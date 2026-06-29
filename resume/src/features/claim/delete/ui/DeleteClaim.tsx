import { useClaimStore } from "@/entities/claim/model/store"
import { Trash2 } from "lucide-react"

export const DeleteClaim = ({id}: {id: string}) => {
    
  const removeClaim = useClaimStore((state) => state.removeClaim)

    return (
        <button onClick={() => {
            removeClaim(id)
        }}>
            <Trash2 />
        </button>
    )
}
