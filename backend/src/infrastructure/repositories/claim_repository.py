from sqlalchemy import asc, case, desc, or_
from sqlalchemy.orm import Session

from src.application.claims.dto import (
    ClaimFilters,
    ClaimsResult,
    CreateClaimCommand,
    UpdateClaimCommand,
)
from src.domain.claims.enums import Priority
from src.domain.claims.repositories import ClaimRepository
from src.infrastructure.database.models.claims import Claim


class SqlAlchemyClaimRepository(ClaimRepository):
    def __init__(self, db: Session):
        self.db = db

    def get_claims(self, filters: ClaimFilters) -> ClaimsResult:
        query = self.db.query(Claim)

        if filters.search:
            if filters.filtersearch == "title":
                query = query.filter(
                    Claim.title.ilike(f"%{filters.search}%")
                )
            elif filters.filtersearch == "description":
                query = query.filter(
                    Claim.description.ilike(f"%{filters.search}%")
                )
            else:
                query = query.filter(
                    or_(
                        Claim.title.ilike(f"%{filters.search}%"),
                        Claim.description.ilike(f"%{filters.search}%"),
                    )
                )

        if filters.status:
            query = query.filter(Claim.status == filters.status)

        if filters.priority:
            query = query.filter(Claim.priority == filters.priority)

        total = query.count()

        if filters.sort == "priority":
            priority_order = case(
                (Claim.priority == Priority.LOW, 1),
                (Claim.priority == Priority.MEDIUM, 2),
                (Claim.priority == Priority.HIGH, 3),
                else_=0,
            )

            query = query.order_by(
                asc(priority_order)
                if filters.order == "asc"
                else desc(priority_order),
                desc(Claim.created_at),
            )
        else:
            query = query.order_by(
                asc(Claim.created_at)
                if filters.order == "asc"
                else desc(Claim.created_at)
            )

        if filters.offset is not None:
            query = query.offset(filters.offset)

        if filters.limit is not None:
            query = query.limit(filters.limit)

        return ClaimsResult(
            items=query.all(),
            total=total,
        )

    def get(self, claim_id: str) -> Claim | None:
        return (
            self.db.query(Claim)
            .filter(Claim.id == claim_id)
            .first()
        )

    def create(
        self,
        command: CreateClaimCommand,
    ) -> Claim:
        claim = Claim(
            title=command.title,
            description=command.description,
            status=command.status,
            priority=command.priority,
        )

        self.db.add(claim)
        self.db.commit()
        self.db.refresh(claim)

        return claim

    def update(
        self,
        claim_id: str,
        command: UpdateClaimCommand,
    ) -> Claim | None:
        claim = self.get(claim_id)

        if claim is None:
            return None

        claim.title = command.title
        claim.description = command.description
        claim.status = command.status
        claim.priority = command.priority

        self.db.commit()
        self.db.refresh(claim)

        return claim

    def delete(self, claim_id: str) -> bool:
        claim = self.get(claim_id)

        if claim is None:
            return False

        self.db.delete(claim)
        self.db.commit()

        return True