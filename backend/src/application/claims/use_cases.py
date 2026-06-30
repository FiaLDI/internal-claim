from src.application.claims.dto import (
    ClaimFilters,
    CreateClaimCommand,
    UpdateClaimCommand,
)
from src.domain.claims.repositories import ClaimRepository
from src.infrastructure.database.models.claims import Claim


class GetClaimsUseCase:
    def __init__(self, repository: ClaimRepository):
        self.repository = repository

    def execute(
        self,
        filters: ClaimFilters,
    ) -> list[Claim]:
        return self.repository.get_claims(filters)


class GetClaimUseCase:
    def __init__(self, repository: ClaimRepository):
        self.repository = repository

    def execute(
        self,
        claim_id: str,
    ) -> Claim | None:
        return self.repository.get(claim_id)


class CreateClaimUseCase:
    def __init__(self, repository: ClaimRepository):
        self.repository = repository

    def execute(
        self,
        command: CreateClaimCommand,
    ) -> Claim:
        return self.repository.create(command)


class UpdateClaimUseCase:
    def __init__(self, repository: ClaimRepository):
        self.repository = repository

    def execute(
        self,
        claim_id: str,
        command: UpdateClaimCommand,
    ) -> Claim | None:
        return self.repository.update(claim_id, command)


class DeleteClaimUseCase:
    def __init__(self, repository: ClaimRepository):
        self.repository = repository

    def execute(
        self,
        claim_id: str,
    ) -> bool:
        return self.repository.delete(claim_id)
    