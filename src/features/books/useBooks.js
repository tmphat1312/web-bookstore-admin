import { useApiParams } from "../../hooks/useApiParams";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import { useQueryPrefetch } from "../../hooks/useQueryPrefetch";

import { getBooks } from "../../services/apiBooks";

import { PAGE_SIZE } from "../../constants/api";
import { QUERY_KEYS } from "../../constants/keys";
import { objectToArray } from "../../utils/helpers";

export function useBooks() {
  const { page } = useApiParams();
  const queryOptions = { page };
  const queryKey = [QUERY_KEYS.BOOKS, objectToArray(queryOptions)].flat();

  const {
    isLoading,
    error,
    data: { data, count = 0 },
  } = useQueryFetch({
    fn: () => getBooks(queryOptions),
    key: queryKey,
  });

  const noPage = Math.ceil(count / PAGE_SIZE);

  useQueryPrefetch({
    fn: () => getBooks({ ...queryOptions, page: page + 1 }),
    key: queryKey.with(1, page + 1),
    when: page < noPage,
  });
  useQueryPrefetch({
    fn: () => getBooks({ ...queryOptions, page: page - 1 }),
    key: queryKey.with(1, page - 1),
    when: page > 1,
  });

  return { isLoading, error, books: data, count };
}
