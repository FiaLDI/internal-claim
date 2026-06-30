from fastapi import Depends
from sqlalchemy.orm import Session

from src.infrastructure.database.session.db import get_db
from src.application.claims.use_cases import (
    CreateClaimUseCase,
    DeleteClaimUseCase,
    GetClaimUseCase,
    GetClaimsUseCase,
    UpdateClaimUseCase,
)
from src.domain.claims.repositories import ClaimRepository
from src.infrastructure.repositories.claim_repository import (
    SqlAlchemyClaimRepository,
)


def get_claim_repository(
    db: Session = Depends(get_db),
) -> ClaimRepository:
    return SqlAlchemyClaimRepository(db)


def get_get_claims_use_case(
    repository: ClaimRepository = Depends(get_claim_repository),
) -> GetClaimsUseCase:
    return GetClaimsUseCase(repository)


def get_get_claim_use_case(
    repository: ClaimRepository = Depends(get_claim_repository),
) -> GetClaimUseCase:
    return GetClaimUseCase(repository)


def get_create_claim_use_case(
    repository: ClaimRepository = Depends(get_claim_repository),
) -> CreateClaimUseCase:
    return CreateClaimUseCase(repository)


def get_update_claim_use_case(
    repository: ClaimRepository = Depends(get_claim_repository),
) -> UpdateClaimUseCase:
    return UpdateClaimUseCase(repository)


def get_delete_claim_use_case(
    repository: ClaimRepository = Depends(get_claim_repository),
) -> DeleteClaimUseCase:
    return DeleteClaimUseCase(repository)
