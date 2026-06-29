"use client"

import { useRef, useState } from "react"
import { CodeArea, usePrism } from "@/entities/code-area"
import { downloadCode } from "@/shared/lib/code-run/download/downloadCode"

export const ModalCodeView = ({ code, saveStore }: { code: string, saveStore: (code: string) => void }) => {

  const codeRef = useRef<HTMLElement>(null);

  const [title, setTitle] = useState<string>("");

  usePrism(codeRef, code)

  return (
    <div className="text-white p-3 flex flex-col gap-3">

      <div className="text-2xl">Your code</div>

      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <div className="">
        <CodeArea code={code} codeRef={codeRef} />
      </div>

      <div className="flex w-full flex-col gap-3 justify-center items-center">
        <button 
            onClick={() => downloadCode(code, title)}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm rounded text-white">
          Download .txt
        </button>

        <button 
            onClick={() => {saveStore(code)}}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm rounded text-white"
        >
          Load on store
        </button>
      </div>

    </div>
  )
}