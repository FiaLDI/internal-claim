from fastapi import APIRouter, Depends, HTTPException

from src.application.claims.use_cases import GetClaimUseCase
from src.db import schemas
from src.infrastructure.deps.claim_deps import get_get_claim_use_case

router = APIRouter()


@router.get("/{claim_id}", response_model=schemas.ClaimItemResponse)
def get_claim(
    claim_id: str,
    use_case: GetClaimUseCase = Depends(get_get_claim_use_case),
):
    claim = use_case.execute(claim_id)

    if claim is None:
        raise HTTPException(status_code=404, detail="Claim not found")

    return {"data": claim}