"use client";

import { useUserStore } from "@/entities/user";
import { LoginForm } from "@/features/login-form";
import { useModal } from "@/features/open-modal";

export const UserProfile = () => {
    const {openModal, closeModal} = useModal();
    const {name} = useUserStore();

    return (
        <>
        <div className="rounded-lg border p-4 shadow-sm text-white">
            {name && <div className="">
                {name}
            </div>}
            
            {!name &&
            <button
                onClick={() =>
                  openModal( <LoginForm onClose={closeModal}/>,
                    "Login"
                  )
                }
              >
                Login
              </button>}

            {name && <button>
                Exit
            </button> }
            
        </div>
        </>
    )
}