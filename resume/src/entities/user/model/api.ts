import { fetchFromApi } from "@/shared/api/client";
import { User, UserPayload, UserResponse } from "./types";


export const AuthApi = {
    async login(user: UserPayload): Promise<User> {
        const response = await fetchFromApi<UserResponse, UserPayload>(
            "auth/login",
            {
                method: "POST",
                body: user,
            }
        );

        return response.data;
    },

    async me(): Promise<User> {
        const response = await fetchFromApi<UserResponse>("auth/me");

        return response.data;
    },

    async logout(): Promise<void> {
        const response = await fetchFromApi<{ok: boolean}>("auth/logout");
    }
};
