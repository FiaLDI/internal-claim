"use client";

import { ClaimApiPayload } from "@/entities/claim/model/types";
import { FormEvent, useEffect, useState } from "react";

type Props = {
  initialValues: ClaimApiPayload;
  submitText: string;
  loadingText: string;
  onSubmit: (values: ClaimApiPayload) => Promise<void>;
};

export function ClaimForm({
  initialValues,
  submitText,
  loadingText,
  onSubmit,
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
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-[420px] flex-col gap-4 text-white"
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
      />

      <select
        value={form.status}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            status: e.target.value as ClaimApiPayload["status"],
          }))
        }
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
