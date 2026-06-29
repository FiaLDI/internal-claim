from sqlalchemy import or_, desc, asc, case
from sqlalchemy.orm import Session

from src.db.schemas import Status, Priority
from src.model.claims import Claim
from src.db import schemas


def get_claims(
    db: Session,
    search: str | None = None,
    filtersearch: str | None = None,
    status: Status | None = None,
    priority: Priority | None = None,
    sort: str = "created_at",
    order: str = "desc",
    limit: int | None = None,
    offset: int | None = None,
):
    query = db.query(Claim)

    if search:
        if filtersearch == "title":
            query = query.filter(Claim.title.ilike(f"%{search}%"))
        elif filtersearch == "description":
            query = query.filter(Claim.description.ilike(f"%{search}%"))
        else:
            query = query.filter(
                or_(
                    Claim.title.ilike(f"%{search}%"),
                    Claim.description.ilike(f"%{search}%"),
                )
            )

    if status:
        query = query.filter(Claim.status == status)

    if priority:
        query = query.filter(Claim.priority == priority)

    if sort == "priority":
        priority_order = case(
            (Claim.priority == Priority.LOW, 1),
            (Claim.priority == Priority.MEDIUM, 2),
            (Claim.priority == Priority.HIGH, 3),
            else_=0,
        )

        query = query.order_by(
            asc(priority_order) if order == "asc" else desc(priority_order),
            desc(Claim.created_at),
        )
    else:
        query = query.order_by(
            asc(Claim.created_at) if order == "asc" else desc(Claim.created_at)
        )

    if offset is not None:
        query = query.offset(offset)

    if limit is not None:
        query = query.limit(limit)

    return query.all()


def get_claim(db: Session, claim_id: str):
    return db.query(Claim).filter(Claim.id == claim_id).first()


def create_claim(db: Session, claim: schemas.ClaimCreate):
    obj = Claim(**claim.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


def update_claim(db: Session, claim_id: str, claim: schemas.ClaimUpdate):
    obj = get_claim(db, claim_id)

    if not obj:
        return None

    for key, value in claim.model_dump().items():
        setattr(obj, key, value)

    db.commit()
    db.refresh(obj)

    return obj


def delete_claim(db: Session, claim_id: str):
    obj = get_claim(db, claim_id)

    if not obj:
        return False

    db.delete(obj)
    db.commit()

    return True
