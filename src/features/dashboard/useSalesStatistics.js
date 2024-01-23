import { QUERY_KEYS } from "../../constants/keys";
import { getSalesStatistics } from "../../services/apiDashboard";
import { useApiParams } from "../../hooks/useApiParams";
import { useQueryFetch } from "../../hooks/useQueryFetch";

export function useSalesStatistics() {
  const { filters } = useApiParams({ filterFields: ["type"] });
  const queryKey = [QUERY_KEYS.SALES_STATISTICS, filters];

  if (filters.length <= 0) {
    filters.push({
      field: "type",
      value: "month",
    });
  }

  const { isLoading, error, data } = useQueryFetch({
    fn: () => getSalesStatistics({ filters }),
    key: queryKey,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { isLoading, error, data: data.data || [] };
}
