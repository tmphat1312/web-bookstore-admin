import { QUERY_KEYS } from "../../constants/keys";
import { getSalesStatistics } from "../../services/apiDashboard";
import { useQueryFetch } from "../../hooks/useQueryFetch";

export function useSalesStatistics() {
  const queryKey = [QUERY_KEYS.SALES_STATISTICS];

  const { isLoading, error, data } = useQueryFetch({
    fn: getSalesStatistics,
    key: queryKey,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { isLoading, error, data: Array.isArray(data) ? data : [] };
}
