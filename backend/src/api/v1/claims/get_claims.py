from fastapi import APIRouter, Depends

from src.domain.claims import schemas
from src.application.claims.dto import ClaimFilters
from src.application.claims.use_cases import GetClaimsUseCase
from src.infrastructure.deps.claim_deps import get_get_claims_use_case

router = APIRouter()


@router.get("/", response_model=schemas.ClaimsResponse)
def get_claims(
    filters: ClaimFilters = Depends(),
    use_case: GetClaimsUseCase = Depends(get_get_claims_use_case),
):
    result = use_case.execute(filters)

    return {
        "data": result.items,
        "meta": {
            "limit": filters.limit,
            "offset": filters.offset,
            "total": result.total,
        },
    }
