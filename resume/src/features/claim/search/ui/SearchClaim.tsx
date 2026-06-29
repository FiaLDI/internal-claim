import { useSearchClaim } from "../model/useSearchClaim";

export const SearchClaim = () => {

    const {
        searchTitle,
        setSearchTitle,
        searchDescription, 
        setSearchDescription
    } = useSearchClaim();

    return (
        <div className="flex gap-3">
            <input 
                type="text" 
                className=" border-2 border-white p-1" 
                onChange={
                    (e) => {setSearchTitle(e.target.value)}
                }
                value={searchTitle}    
                placeholder="Search by Title"
            />
            
            <input 
                type="text" 
                className=" border-2 border-white p-1" 
                onChange={
                    (e) => {setSearchDescription(e.target.value)}
                }
                value={searchDescription}    
                placeholder="Search by Description"
            />
        </div>
    )
}