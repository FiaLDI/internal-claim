
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.service import claims as claim_service


router = APIRouter()


@router.delete("/{claim_id}", status_code=204)
def delete_claim(
    claim_id: str,
    db: Session = Depends(get_db),
):
    ok = claim_service.delete_claim(db, claim_id)

    if not ok:
        raise HTTPException(status_code=404, detail="Claim not found")