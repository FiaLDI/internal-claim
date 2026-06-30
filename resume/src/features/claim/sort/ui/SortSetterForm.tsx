"use client";

import { useClaimStore } from "@/entities/claim/model/store";


export const SortSetterForm = () => {
    const setOrder = useClaimStore((s) => s.setOrder);
    const setSort = useClaimStore((s) => s.setSort);
    
    return (
        <div className="">
            <div className="flex items-center justify-between text-sm text-gray-500">Sorts</div>
            <div className="">
                <select
                    defaultValue="desc"
                    onChange={(e) =>
                        setOrder(
                            (e.target.value as "desc" | "asc")
                        )
                    }
                >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>

                <select
                    defaultValue="created_at"
                    onChange={(e) =>
                        setSort(
                            (e.target.value as "created_at" | "priority")
                        )
                    }
                >
                    <option value="created_at">Creation date</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
        </div>
    )
}
