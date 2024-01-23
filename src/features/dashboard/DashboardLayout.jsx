import DashboardSalesChart from "./DashboardSalesChart";
import DashboardSystemOverview from "./DashboardSystemOverview";

export default function DashboardLayout() {
  return (
    <>
      <DashboardSystemOverview />
      <DashboardSalesChart />
    </>
  );
}
