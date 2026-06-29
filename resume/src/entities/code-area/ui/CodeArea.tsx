import { RefObject } from "react"

export const CodeArea = ({
    preRef, 
    codeRef, 
    code
}: {
    preRef?: RefObject<HTMLPreElement | null>, 
    codeRef?: RefObject<HTMLElement | null>,  code: string
}) => {

    return (
        <pre
            ref={preRef}
            className="p-4 overflow-auto font-mono text-sm leading-6 whitespace-pre [tab-size:2]"
        >
            <code ref={codeRef} className="language-javascript">
                {code}
            </code>
        </pre>
    )
}