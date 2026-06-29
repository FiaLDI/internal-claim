import {CodeRunner} from "@/widgets/code-editor";


export default async function Page() {
    
    return (
        <div className="flex gap-10 w-full max-w-7xl mx-auto p-10">
            <CodeRunner />
        </div>
    )
}
