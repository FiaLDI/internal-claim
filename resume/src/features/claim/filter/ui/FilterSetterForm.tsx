"use client";

import { useClaimStore } from "@/entities/claim/model/store";
import { Priority, Status } from "@/entities/claim/model/types";


export const FilterSetterForm = () => {
    const setStatus = useClaimStore((s) => s.setStatus);
    const setPriority = useClaimStore((s) => s.setPriority);
    const setOrder = useClaimStore((s) => s.setOrder);
    const setSort = useClaimStore((s) => s.setSort);
    
    return (
        <div className="">
            <select
                defaultValue=""
                onChange={(e) =>
                    setStatus(
                        e.target.value === ""
                            ? undefined
                            : (e.target.value as Status)
                    )
                }
            >
                <option value="">All statuses</option>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            <select
                defaultValue=""
                onChange={(e) =>
                    setPriority(
                        e.target.value === ""
                            ? undefined
                            : (e.target.value as Priority)
                    )
                }
            >
                <option value="">All priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

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
    )
}