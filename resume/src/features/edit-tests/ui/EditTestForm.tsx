import { TestCase } from "@/features/run-code"

export const EditTestForm = ({t, tests, setTests, i}: {
    t: TestCase,
    tests: TestCase[],
    setTests: (newTests: TestCase[]) => void,
    i: number;
}) => {
    return (
        <div key={i} className="grid grid-cols-2 gap-2">
            <textarea
                value={t.input}
                onChange={(e)=>{
                const newTests=[...tests]
                    newTests[i].input=e.target.value
                    setTests(newTests)
                }}
                className="bg-zinc-950 p-2 text-sm font-mono text-zinc-300"
            />
            <textarea
                value={t.expected}
                onChange={(e)=>{
                    const newTests=[...tests]
                    newTests[i].expected=e.target.value
                    setTests(newTests)
                }}
                className="bg-zinc-950 p-2 text-sm font-mono text-zinc-300"
            />
        </div>
    )
}
