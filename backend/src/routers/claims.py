from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.db import schemas
from src.service import claims as claim_service

router = APIRouter(
    prefix="/claims",
    tags=["Claims"],
)



@router.get("", response_model=schemas.ClaimsResponse)
def get_claims(
    search: str | None = Query(default=None),
    limit: int | None = Query(default=None, ge=1),
    offset: int | None = Query(default=None, ge=0),
    db: Session = Depends(get_db),
):
    result = claim_service.get_claims(
        db=db,
        search=search,
        limit=limit,
        offset=offset,
    )

    return {"data": result}

@router.get("/{claim_id}", response_model=schemas.ClaimItemResponse)
def get_claim(claim_id: str, db: Session = Depends(get_db)):
    claim = claim_service.get_claim(db, claim_id)

    if claim is None:
        raise HTTPException(status_code=404, detail="Claim not found")

    return {"data": claim}


@router.post("", response_model=schemas.ClaimItemResponse, status_code=201)
def create_claim(
    claim: schemas.ClaimCreate,
    db: Session = Depends(get_db),
):
    obj = claim_service.create_claim(db, claim)
    return {"data": obj}


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


@router.delete("/{claim_id}", status_code=204)
def delete_claim(
    claim_id: str,
    db: Session = Depends(get_db),
):
    ok = claim_service.delete_claim(db, claim_id)

    if not ok:
        raise HTTPException(status_code=404, detail="Claim not found")
    