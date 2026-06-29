import { useClaimStore } from "@/entities/claim/model/store";
import { useEffect, useState } from "react";

export const useSearchClaim = () => {
    const setSearchStore = useClaimStore((state) => state.setSearch);

    const [search, setSearch] = useState<string>("");
    const [mode, setMode] = useState<"title" | "description">("title");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchStore(search, mode);
        }, 500);

        return () => clearTimeout(timer);
    }, [search, setSearchStore]);

    return {
        setMode,
        search,
        setSearch,
    }
}