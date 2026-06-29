import { RefObject, useEffect } from "react"
import Prism from "@/shared/lib/prism/prism"

export const usePrism = (
  ref: RefObject<HTMLElement | null>,
  code: string
) => {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    Prism.highlightElement(el)
  }, [code, ref])
}