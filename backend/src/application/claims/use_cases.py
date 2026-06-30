from src.domain.claims.exceptions import ClaimAlreadyCompletedError
from src.domain.claims.enums import Status
from src.application.claims.dto import (
    ClaimFilters,
    ClaimsResult,
    CreateClaimCommand,
    UpdateClaimCommand,
)
from src.domain.claims.repositories import ClaimRepository
from src.infrastructure.database.models.claims import Claim


class GetClaimsUseCase:
    def __init__(self, repository: ClaimRepository):
        self.repository = repository

    def execute(self, filters: ClaimFilters) -> ClaimsResult:
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
        claim = self.repository.get(claim_id)

        if claim is None:
            return None

        if claim.status == Status.DONE:
            raise ClaimAlreadyCompletedError()

        return self.repository.update(claim_id, command)


class DeleteClaimUseCase:
    def __init__(self, repository: ClaimRepository):
        self.repository = repository

    def execute(self, claim_id: str):
        claim = self.repository.get(claim_id)

        if claim is None:
            return False

        if claim.status == Status.DONE:
            raise ClaimAlreadyCompletedError()

        return self.repository.delete(claim_id)
        