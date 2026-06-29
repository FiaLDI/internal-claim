
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.db import schemas
from src.service import claims as claim_service
from src.db.schemas import Status, Priority


router = APIRouter()

@router.get("/", response_model=schemas.ClaimsResponse)
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