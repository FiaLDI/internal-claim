from fastapi import APIRouter, Depends, HTTPException

from src.domain.claims.exceptions import ClaimAlreadyCompletedError
from src.domain.users.enums import Role
from src.api.v1.auth.dependencies import require_role
from src.application.claims.use_cases import DeleteClaimUseCase
from src.infrastructure.deps.claim_deps import get_delete_claim_use_case

router = APIRouter()


@router.delete("/{claim_id}")
def delete_claim(
    claim_id: str,
    _: dict = Depends(require_role(Role.ADMIN)),
    use_case: DeleteClaimUseCase = Depends(get_delete_claim_use_case),
):
    try:
        deleted = use_case.execute(claim_id)

        if not deleted:
            raise HTTPException(
                status_code=404,
                detail="Claim not found",
            )

        return {"success": True}
    
    except ClaimAlreadyCompletedError:
        raise HTTPException(
            400,
            "Completed claims cannot be modified.",
        )
    