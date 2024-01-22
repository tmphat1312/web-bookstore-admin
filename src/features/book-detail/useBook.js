import { QUERY_KEYS } from "../../constants/keys";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import { getBook } from "../../services/apiBooks";

export function useBook(id) {
  const { isLoading, error, data } = useQueryFetch({
    fn: () => getBook(id),
    key: [QUERY_KEYS.BOOK, id],
  });

  return { isLoading, error, book: data };
}
