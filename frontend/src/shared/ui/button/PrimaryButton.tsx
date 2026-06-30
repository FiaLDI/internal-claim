
export const PrimaryButton = ({title, handler}: {title: string, handler?:()=>void} ) => (
    <button
        onClick={handler}
        className="w-full lg:w-fit px-6 py-2.5 rounded-xl border border-neutral-700 bg-neutral-900/40 text-sm font-medium hover:bg-neutral-800 transition cursor-pointer"
    >
        {title}
    </button>
)