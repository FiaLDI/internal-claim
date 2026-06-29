import { ResultType } from "@/features/run-code";

export const ExecutionResultCase = ({r, i}: {r: ResultType, i: number}) => (
    <div  className={`mb-2 ${r.pass?"text-green-400":"text-red-400"}`}>
        Test {i+1}: {r.pass?"PASS":"FAIL"}
        <br/>
        expected: {r.expected}
        <br/>
        output: {r.output}
    </div>
)
