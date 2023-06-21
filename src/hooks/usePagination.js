import { useState } from "react"

export const usePagination = (count) => {
    const [perPage, setPerPage] = useState(count);
    const loadMore = () => setPerPage(prev => prev + count);
    
    return { perPage, loadMore, setPerPage };
}
