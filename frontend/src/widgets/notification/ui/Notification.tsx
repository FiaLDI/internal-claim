"use client";

import { useNotify } from "@/features/notify";

export const Notification = () => {
  const { isEnable, content } = useNotify();

  if (!isEnable) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-600 border text-white px-4 py-2 rounded shadow border-red-400">
      {content}
    </div>
  );
};