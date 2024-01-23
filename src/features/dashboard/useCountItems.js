import { QUERY_KEYS } from "../../constants/keys";
import { countItems, countItemsByPath } from "../../services/apiDashboard";
import { useQueryFetch } from "../../hooks/useQueryFetch";

async function getCountingFn() {
  const [noCustomers, noCategories, noBooks, noSellingBooks] =
    await Promise.all([
      countItems("users?role=customer"),
      countItems("categories"),
      countItemsByPath("statistics/count-books"),
      countItemsByPath("statistics/count-selling-books"),
    ]);

  return {
    noCustomers,
    noCategories,
    noBooks,
    noSellingBooks,
  };
}

export function useCountItems() {
  const queryKey = [QUERY_KEYS.COUNTING];

  const { isLoading, error, data } = useQueryFetch({
    fn: getCountingFn,
    key: queryKey,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { isLoading, error, data };
}
