from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.db import schemas
from src.service import claims as claim_service
from src.db.schemas import Status, Priority

router = APIRouter(
    prefix="/claims",
    tags=["Claims"],
)


@router.get("", response_model=schemas.ClaimsResponse)
def get_claims(
    search: str | None = Query(default=None),
    filtersearch: str | None = Query(default=None, pattern="^(title|description)$"),
    status: Status | None = Query(default=None),
    priority: Priority | None = Query(default=None),
    sort: str = Query(default="created_at", pattern="^(created_at|priority)$"),
    order: str = Query(default="desc", pattern="^(asc|desc)$"),
    limit: int | None = Query(default=None, ge=1),
    offset: int | None = Query(default=None, ge=0),
    db: Session = Depends(get_db),
):
    result = claim_service.get_claims(
        db=db,
        search=search,
        filtersearch=filtersearch,
        status=status,
        priority=priority,
        sort=sort,
        order=order,
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
    