"use client"

import { useEffect } from "react"
import { useSolutionStore } from "../model/store"
import { Solution } from "../types/solution.type"

export function SolutionInit({ solution }: { solution: Solution[] }) {

  const hydrate = useSolutionStore((s) => s.hydrate)

  useEffect(() => {
    hydrate(solution)
  }, [solution, hydrate])

  return null
}