from dataclasses import dataclass

from src.infrastructure.database.models.claims import Claim
from src.domain.claims import schemas
from src.domain.claims.enums import Priority, Status


@dataclass(slots=True)
class ClaimFilters:
    search: str | None = None
    filtersearch: str | None = None

    status: Status | None = None
    priority: Priority | None = None

    sort: str = "created_at"
    order: str = "desc"

    limit: int | None = None
    offset: int | None = None

    @classmethod
    def from_query(
        cls,
        search: str | None = None,
        filtersearch: str | None = None,
        status: Status | None = None,
        priority: Priority | None = None,
        sort: str = "created_at",
        order: str = "desc",
        limit: int | None = None,
        offset: int | None = None,
    ) -> "ClaimFilters":
        return cls(
            search=search,
            filtersearch=filtersearch,
            status=status,
            priority=priority,
            sort=sort,
            order=order,
            limit=limit,
            offset=offset,
        )


@dataclass(slots=True)
class CreateClaimCommand:
    title: str
    description: str
    status: Status
    priority: Priority

    @classmethod
    def from_schema(
        cls,
        schema: schemas.ClaimCreate,
    ) -> "CreateClaimCommand":
        return cls(
            title=schema.title,
            description=schema.description,
            status=schema.status,
            priority=schema.priority,
        )


@dataclass(slots=True)
class UpdateClaimCommand:
    title: str
    description: str
    status: Status
    priority: Priority

    @classmethod
    def from_schema(
        cls,
        schema: schemas.ClaimUpdate,
    ) -> "UpdateClaimCommand":
        return cls(
            title=schema.title,
            description=schema.description,
            status=schema.status,
            priority=schema.priority,
        )


@dataclass
class ClaimsResult:
    items: list[Claim]
    total: int
