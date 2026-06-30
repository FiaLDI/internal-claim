from fastapi import APIRouter
from .login import router as login_router
from .me import router as me_router
from .logout import router as logout_router


router = APIRouter()
router.include_router(login_router)
router.include_router(me_router)
router.include_router(logout_router)
