"use client";

import { User } from "../model/types";
import { useUserStore } from "../model/store";

export function UserInit({ user }: { user: User | null }) {
  useUserStore.getState().hydrate(user);

  return null;
}
