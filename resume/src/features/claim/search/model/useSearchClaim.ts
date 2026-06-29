import { useClaimStore } from "@/entities/claim/model/store";
import { useEffect, useState } from "react";

export const useSearchClaim = () => {
    const setSearchStore = useClaimStore((state) => state.setSearch);

    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchDescription, setSearchDescription] = useState<string>("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchStore(searchTitle, "title");
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTitle, setSearchStore]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchStore(searchDescription, "description");
        }, 500);

        return () => clearTimeout(timer);
    }, [searchDescription, setSearchDescription]);

    return {
        searchTitle,
        setSearchTitle,
        searchDescription, 
        setSearchDescription
    }
}