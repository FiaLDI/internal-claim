from fastapi import APIRouter
from .create_claim import router as create_claim_router
from .delete_claim import router as delete_claim_router
from .get_claims import router as get_claims_router
from .get_claims_by_id import router as get_claims_by_id_router
from .update_claim import router as update_claim_router


router = APIRouter()
router.include_router(create_claim_router)
router.include_router(delete_claim_router)
router.include_router(get_claims_router)
router.include_router(get_claims_by_id_router)
router.include_router(update_claim_router)
