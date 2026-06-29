from sqlalchemy import or_
from sqlalchemy.orm import Session

from src.model.claims import Claim
from src.db import schemas


def get_claims(
    db: Session,
    search: str | None = None,
    limit: int | None = None,
    offset: int | None = None,
):
    query = db.query(Claim)

    if search:
        query = query.filter(
            or_(
                Claim.title.ilike(f"%{search}%"),
                Claim.description.ilike(f"%{search}%"),
                Claim.status.ilike(f"%{search}%"),
            )
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
