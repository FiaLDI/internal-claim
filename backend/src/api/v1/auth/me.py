from fastapi import APIRouter, Depends

from src.api.v1.auth.dependencies import get_current_user
from src.application.auth.use_cases import MeUseCase
from src.infrastructure.deps.auth_deps import get_me_use_case

router = APIRouter()


@router.get("/me")
def me(
    user=Depends(get_current_user),
    use_case: MeUseCase = Depends(get_me_use_case),
):
    return use_case.execute(user)