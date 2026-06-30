from fastapi import APIRouter, Depends, Response

from src.application.auth.use_cases import LogoutUseCase
from src.infrastructure.deps.auth_deps import get_logout_use_case

router = APIRouter()


@router.post("/logout")
def logout(
    response: Response,
    use_case: LogoutUseCase = Depends(get_logout_use_case),
):
    response.delete_cookie("access_token")
    return use_case.execute()