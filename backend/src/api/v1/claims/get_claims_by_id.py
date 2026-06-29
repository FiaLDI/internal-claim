
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.db import schemas
from src.service import claims as claim_service

router = APIRouter()


@router.get("/{claim_id}", response_model=schemas.ClaimItemResponse)
def get_claim(claim_id: str, db: Session = Depends(get_db)):
    claim = claim_service.get_claim(db, claim_id)

    if claim is None:
        raise HTTPException(status_code=404, detail="Claim not found")

    return {"data": claim}