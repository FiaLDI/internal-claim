from typing import Protocol

from src.application.claims.dto import (
    ClaimFilters,
    CreateClaimCommand,
    UpdateClaimCommand,
)
from src.infrastructure.database.models.claims import Claim


class ClaimRepository(Protocol):
    def get_claims(self, filters: ClaimFilters) -> list[Claim]:
        ...

    def get(self, claim_id: str) -> Claim | None:
        ...

    def create(self, command: CreateClaimCommand) -> Claim:
        ...

    def update(
        self,
        claim_id: str,
        command: UpdateClaimCommand,
    ) -> Claim | None:
        ...

    def delete(self, claim_id: str) -> bool:
        ...