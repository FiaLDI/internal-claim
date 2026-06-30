"use client";

import { useClaimStore } from "@/entities/claim/model/store";
import { Priority, Status } from "@/entities/claim/model/types";


export const FilterSetterForm = () => {
    const setStatus = useClaimStore((s) => s.setStatus);
    const setPriority = useClaimStore((s) => s.setPriority);
    
    return (
        <div className="">
            <div className="flex items-center justify-between text-sm text-gray-500">Filters</div>
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
            </div>
        </div>
    )
}
