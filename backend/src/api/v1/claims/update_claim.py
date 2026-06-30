from fastapi import APIRouter, Depends, HTTPException

from src.application.claims.dto import UpdateClaimCommand
from src.application.claims.use_cases import UpdateClaimUseCase
from src.db import schemas
from src.infrastructure.deps.claim_deps import get_update_claim_use_case

router = APIRouter()


@router.put("/{claim_id}", response_model=schemas.ClaimItemResponse)
def update_claim(
    claim_id: str,
    claim: schemas.ClaimUpdate,
    use_case: UpdateClaimUseCase = Depends(get_update_claim_use_case),
):
    command = UpdateClaimCommand.from_schema(claim)

    obj = use_case.execute(claim_id, command)

    if obj is None:
        raise HTTPException(status_code=404, detail="Claim not found")

    return {"data": obj}