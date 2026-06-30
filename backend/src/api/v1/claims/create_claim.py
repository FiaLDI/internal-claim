from fastapi import APIRouter, Depends

from src.domain.claims import schemas
from src.application.claims.dto import CreateClaimCommand
from src.application.claims.use_cases import CreateClaimUseCase
from src.infrastructure.deps.claim_deps import get_create_claim_use_case

router = APIRouter()


@router.post("/", response_model=schemas.ClaimItemResponse)
def create_claim(
    claim: schemas.ClaimCreate,
    use_case: CreateClaimUseCase = Depends(get_create_claim_use_case),
):
    command = CreateClaimCommand.from_schema(claim)

    return {"data": use_case.execute(command)}