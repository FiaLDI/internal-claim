import { useSearchClaim } from "../model/useSearchClaim";

export const SearchClaim = () => {
    const {
        mode,
        setMode,
        search,
        setSearch,
    } = useSearchClaim();

    return (
        <div className="flex gap-3">
            <select
                defaultValue="title"
                onChange={(e) =>
                    setMode(
                        (e.target.value as "title" | "description")
                    )
                }
            >
                <option value="title">Title</option>
                <option value="description">Description</option>
            </select>
            <input 
                type="text" 
                className=" border-2 border-white p-1 w-full" 
                onChange={
                    (e) => {setSearch(e.target.value)}
                }
                value={search}    
                placeholder={`Search by ${mode}`}
            />
        </div>
    )
}