"use client";

import { useUserStore } from "@/entities/user";
import { AuthApi } from "@/entities/user/model/api";
import { LoginForm } from "@/features/login-form";
import { useModal } from "@/features/open-modal";

export const UserProfile = () => {
    const {openModal, closeModal} = useModal();
    const {user} = useUserStore();

    const name = user?.username;

    return (
        <>
        <div className="rounded-lg border p-4 shadow-sm text-white">
            {user?.username && <div className="">
                {user?.username} 
            </div>}
            
            {!user?.username &&
            <button
                onClick={() =>
                  openModal( <LoginForm onClose={closeModal}/>,
                    "Login"
                  )
                }
              >
                Login
              </button>}

            {user?.username && <button onClick={() => {
              AuthApi.logout()
            }}>
                Exit
            </button> }
            
        </div>
        </>
    )
}