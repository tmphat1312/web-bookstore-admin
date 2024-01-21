import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user = {} } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: getCurrentUser,
    staleTime: Infinity,
    cacheTime: Infinity,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { isLoading, user, isAuthenticated: user && !!user.id };
}
