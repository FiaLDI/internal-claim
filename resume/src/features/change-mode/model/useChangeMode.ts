"use client"

import { useState } from "react"
import { Mode } from "../types/change.mode.types"

export const useChangeMode = () => {

    const [mode,setMode] = useState<Mode>("array")

    const changeMode = (m:Mode, callback:(m:Mode)=>void) => {
        setMode(m)
        callback(m)
    }

    return {
        mode,
        changeMode
    }
}
