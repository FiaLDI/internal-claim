
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.db import schemas
from src.service import claims as claim_service


router = APIRouter()

@router.post("/", response_model=schemas.ClaimItemResponse, status_code=201)
def create_claim(
    claim: schemas.ClaimCreate,
    db: Session = Depends(get_db),
):
    obj = claim_service.create_claim(db, claim)
    return {"data": obj}