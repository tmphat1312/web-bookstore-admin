import { useApiParams } from "../../hooks/useApiParams";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import { useQueryPrefetch } from "../../hooks/useQueryPrefetch";

import { getCategories } from "../../services/apiCategories";

import { PAGE_SIZE } from "../../constants/api";
import { QUERY_KEYS } from "../../constants/keys";
import { objectToArray } from "../../utils/helpers";

export function useCategories() {
  const { page, q } = useApiParams();
  const queryOptions = { page, q };
  const queryKey = [QUERY_KEYS.CATEGORIES, objectToArray(queryOptions)].flat();

  const {
    isLoading,
    error,
    data: { data, count = 0 },
  } = useQueryFetch({
    fn: () => getCategories(queryOptions),
    key: queryKey,
  });

  const noPage = Math.ceil(count / PAGE_SIZE);

  useQueryPrefetch({
    fn: () => getCategories({ ...queryOptions, page: page + 1 }),
    key: queryKey.with(1, page + 1),
    when: page < noPage,
  });
  useQueryPrefetch({
    fn: () => getCategories({ ...queryOptions, page: page - 1 }),
    key: queryKey.with(1, page - 1),
    when: page > 1,
  });

  return { isLoading, error, categories: data, count };
}
