from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..db.db import get_db
from src.service import claims as claim_service
from src.db import schemas

router = APIRouter(prefix="/claims", tags=["Claims"])


@router.get("")
def get_claims(db: Session = Depends(get_db)):
    result = claim_service.get_claims(db)
    return {
        "data": result
    }


@router.get("/{claim_id}")
def get_claim(claim_id: int, db: Session = Depends(get_db)):
    claim = claim_service.get_claim(db, claim_id)

    if not claim:
        raise HTTPException(404, "Claim not found")

    return {
        "data": claim
    }


@router.post("")
def create_claim(
    claim: schemas.ClaimCreate,
    db: Session = Depends(get_db),
):
    obj = claim_service.create_claim(db, claim)

    return {
        "data": obj
    }


@router.put("/{claim_id}")
def update_claim(
    claim_id: int,
    claim: schemas.ClaimUpdate,
    db: Session = Depends(get_db),
):
    obj = claim_service.update_claim(db, claim_id, claim)

    if not obj:
        raise HTTPException(404, "Claim not found")

    return {
        "data": obj
    }


@router.delete("/{claim_id}", status_code=204)
def delete_claim(
    claim_id: int,
    db: Session = Depends(get_db),
):
    ok = claim_service.delete_claim(db, claim_id)

    if not ok:
        raise HTTPException(404, "Claim not found")
    