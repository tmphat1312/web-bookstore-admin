import LoadingProgress from "../../ui/LoadingProgress";
import ProfitChart from "./_ProfitChart";
import RevenueChart from "./_RevenueChart";
import { useSalesStatistics } from "./useSalesStatistics";

export default function DashboardSalesChart() {
  const state = useSalesStatistics();

  return (
    <LoadingProgress {...state} resourceName="Thông kê doanh số và lợi nhuận">
      <RevenueChart data={state.data} />
      <ProfitChart data={state.data} />
    </LoadingProgress>
  );
}
