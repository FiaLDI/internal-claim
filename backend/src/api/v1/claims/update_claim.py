
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.db import schemas
from src.service import claims as claim_service

router = APIRouter()


@router.put("/{claim_id}", response_model=schemas.ClaimItemResponse)
def update_claim(
    claim_id: str,
    claim: schemas.ClaimUpdate,
    db: Session = Depends(get_db),
):
    obj = claim_service.update_claim(db, claim_id, claim)

    if obj is None:
        raise HTTPException(status_code=404, detail="Claim not found")

    return {"data": obj}