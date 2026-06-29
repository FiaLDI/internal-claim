import { ClaimStoreProvider } from "@/entities/claim";
import { ClaimApi } from "@/entities/claim/model/api";
import { Claim } from "@/entities/claim/model/types";
import { ClaimList } from "@/widgets/claim-list";
import { UserProfile } from "@/widgets/user-profile";

export default async function Page() {
  let claims: Claim[] = [];

  try {
    claims = await ClaimApi.fetchClaims();
  } catch (e) {
    console.error(e);
  }

  return (
    <ClaimStoreProvider claims={claims}>
      <div className="flex gap-10 w-full max-w-7xl mx-auto p-10 text-white">
        <UserProfile />
        <ClaimList />
      </div>
    </ClaimStoreProvider>
  );
}