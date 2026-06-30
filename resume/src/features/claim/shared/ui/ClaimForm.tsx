"use client";

import { ClaimApiPayload } from "@/entities/claim/model/types";
import { FormEvent, useEffect, useState } from "react";

type Props = {
  initialValues: ClaimApiPayload;
  submitText: string;
  loadingText: string;
  onSubmit: (values: ClaimApiPayload) => Promise<void>;
  onError?: () => void;
};

export function ClaimForm({
  initialValues,
  submitText,
  loadingText,
  onSubmit,
  onError,
}: Props) {
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm(initialValues);
  }, [initialValues]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await onSubmit(form);
    } finally {
      setLoading(false);
      onError?.();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-[420px] flex-col gap-4 text-white mt-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
        required
        className="border p-1"
      />

      <textarea
        placeholder="Description"
        rows={5}
        value={form.description}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
        required
        className="border p-1"
      />

      <select
        value={form.status}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            status: e.target.value as ClaimApiPayload["status"],
          }))
        }
        className="border p-1"
      >
        <option value="open">Open</option>
        <option value="in_progress">In progress</option>
        <option value="done">Done</option>
      </select>

      <select
        value={form.priority}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            priority: e.target.value as ClaimApiPayload["priority"],
          }))
        }
        className="border p-1"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? loadingText : submitText}
      </button>
    </form>
  );
}
