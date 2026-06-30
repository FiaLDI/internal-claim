from fastapi import APIRouter, Depends, HTTPException

from src.application.claims.use_cases import DeleteClaimUseCase
from src.infrastructure.deps.claim_deps import get_delete_claim_use_case

router = APIRouter()


@router.delete("/{claim_id}")
def delete_claim(
    claim_id: str,
    use_case: DeleteClaimUseCase = Depends(get_delete_claim_use_case),
):
    deleted = use_case.execute(claim_id)

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Claim not found",
        )

    return {"success": True}