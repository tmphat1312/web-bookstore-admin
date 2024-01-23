import { useQueryFetch } from "../../hooks/useQueryFetch";
import { getBookCategories } from "../../services/apiBooks";

import { QUERY_KEYS } from "../../constants/keys";

export function useBookCategories() {
  const queryKey = [QUERY_KEYS.BOOK_CATEGORIES];

  const { isLoading, error, data } = useQueryFetch({
    fn: getBookCategories,
    key: queryKey,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const bookCategories = Array.isArray(data) ? data : [];

  const bookCategoryOptions = bookCategories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  return { isLoading, error, bookCategories, bookCategoryOptions };
}
