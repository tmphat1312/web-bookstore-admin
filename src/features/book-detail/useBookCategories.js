import { useQueryFetch } from "../../hooks/useQueryFetch";
import { getBookCategories } from "../../services/apiBooks";

import { QUERY_KEYS } from "../../constants/keys";

export function useBookCategories() {
  const queryKey = [QUERY_KEYS.BOOK_CATEGORIES];

  const {
    isLoading,
    error,
    data: { data },
  } = useQueryFetch({
    fn: () => getBookCategories(),
    key: queryKey,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { isLoading, error, bookCategories: data };
}
