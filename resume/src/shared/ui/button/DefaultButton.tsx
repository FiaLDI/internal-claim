
export const DefaultButton = ({title, handler}: {title: string, handler?:()=>void} ) => (
    <button
        onClick={handler}
        className="w-full lg:w-fit px-6 py-3 rounded-xl bg-indigo-500 text-sm font-medium shadow-[0_0_30px_-8px_rgba(99,102,241,0.8)] hover:shadow-[0_0_40px_-6px_rgba(99,102,241,1)] transition cursor-pointer"
    >
        {title}
    </button>
)