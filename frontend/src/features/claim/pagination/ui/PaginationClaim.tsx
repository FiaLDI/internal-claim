import { useClaimStore } from "@/entities/claim/model/store";

export const PaginationClaim = () => {
  const {
    limit,
    offset,
    total,
    setLimit,
    setOffset,
  } = useClaimStore();

  const currentPage = Math.floor(offset / limit) + 1;
  const pages = Math.ceil(total / limit);

  return (
    <div className="flex justify-between">
        <div className="">
            <div className="flex items-center justify-between text-sm text-gray-500">Limit</div>

            <div className="flex gap-2">
                {[5, 10, 20, 30].map((value) => (
                <button
                    key={value}
                    onClick={() => setLimit(value)}
                    data-current={value === limit}
                    className="rounded-full border px-6 data-[current=true]:bg-amber-50/10"
                >   
                    {value}
                </button>
                ))}
            </div>
        </div>

        <div className="">
            <div className="flex items-center justify-between text-sm text-gray-500 text-right">Pages</div>

            <div className="flex gap-2">
                {Array.from({ length: pages }, (_, i) => {
                    const page = i + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => setOffset(i * limit)}
                            data-current={page === currentPage}
                            className="rounded-full border px-4 data-[current=true]:bg-amber-50/10"
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
  );
};