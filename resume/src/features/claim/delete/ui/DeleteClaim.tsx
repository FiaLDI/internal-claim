import { useClaimStore } from "@/entities/claim/model/store"
import { useNotify } from "@/features/notify";
import { Trash2 } from "lucide-react"


export const DeleteClaim = ({id}: {id: string}) => {
    const removeClaim = useClaimStore((state) => state.removeClaim);
    const {notify} = useNotify();

    return (
        <button onClick={async() => {
            try {
                await removeClaim(id);

                } catch (error) {
                if (error instanceof Error) {
                    notify(error.message);
                }
            }
            
        }}>
            <Trash2 />
        </button>
    )
}
