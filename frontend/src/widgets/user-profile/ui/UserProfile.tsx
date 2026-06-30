"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";

import { useUserStore } from "@/entities/user";
import { LoginForm } from "@/features/login-form";
import { useModal } from "@/features/open-modal";

export const UserProfile = () => {
  const { openModal, closeModal } = useModal();

  const {
    user,
    getMe,
    logout,
    loading,
    error,
  } = useUserStore();

  useEffect(() => {
    getMe();
  }, [getMe]);

  if (loading) {
    return (
      <div className="rounded-lg border p-4 shadow-sm flex items-center gap-2 text-gray-500">
        <Loader2 className="h-4 w-4 animate-spin" />
        Загрузка...
      </div>
    );
  }

  return (
    <div className="rounded-lg border p-4 shadow-sm text-white">
      
      {user ? (
        <div className="w-full flex gap-3 items-center">
          <div className="">{user.username}</div>

          <button onClick={logout}>
            Exit
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            openModal(
              <LoginForm onClose={closeModal} />,
              "Login"
            )
          }
        >
          Login
        </button>
      )}
    </div>
  );
};
