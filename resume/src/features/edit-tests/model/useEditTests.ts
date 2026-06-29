import { examples, TestCase } from "@/features/run-code"
import { useState } from "react"

export const useEditTests = () => {

    const [tests, setTests]=useState<TestCase[]>(examples.array.testCases)

    return {
        tests, setTests
    }
}
