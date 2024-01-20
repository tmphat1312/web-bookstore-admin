import { useApiParams } from "../../hooks/useApiParams";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import { useQueryPrefetch } from "../../hooks/useQueryPrefetch";

import { getUsers } from "../../services/apiUsers";

import { PAGE_SIZE } from "../../constants/api";
import { QUERY_KEYS } from "../../constants/keys";
import { objectToArray } from "../../utils/helpers";

export function useUsers() {
  const { page, filters, q } = useApiParams({ filterFields: ["role"] });
  const queryOptions = { page, filters, q };
  const queryKey = [QUERY_KEYS.USERS, objectToArray(queryOptions)].flat();

  const {
    isLoading,
    error,
    data: { data, count = 0 },
  } = useQueryFetch({
    fn: () => getUsers(queryOptions),
    key: queryKey,
  });

  const noPage = Math.ceil(count / PAGE_SIZE);

  useQueryPrefetch({
    fn: () => getUsers({ ...queryOptions, page: page + 1 }),
    key: queryKey.with(1, page + 1),
    when: page < noPage,
  });
  useQueryPrefetch({
    fn: () => getUsers({ ...queryOptions, page: page - 1 }),
    key: queryKey.with(1, page - 1),
    when: page > 1,
  });

  return { isLoading, error, users: data, count };
}
