"use client"

import { examples } from "@/features/run-code";
import { Mode } from "../types/change.mode.types";

export const ChangeMode = ({
    mode,
    changeMode,
    callback
}:{
    mode:Mode
    changeMode:(m:Mode,callback:(m:Mode)=>void)=>void
    callback:(m:Mode)=>void
}) => {

    return (
        <div className="flex gap-2">
            {(Object.keys(examples) as Mode[]).map(m=>(
                <button
                    key={m}
                    onClick={()=>changeMode(m,callback)}
                    className={`px-3 py-1 rounded text-sm capitalize cursor-pointer text-white
                    ${mode===m?"bg-blue-600":"bg-zinc-800 hover:bg-zinc-700"}`}
                >
                    {m}
                </button>
            ))}
        </div>
    )
}
