import LoadingProgress from "../../ui/LoadingProgress";
import ProfitChart from "./ProfitChart";
import RevenueChart from "./RevenueChart";
import { useSalesStatistics } from "./useSalesStatistics";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

export default function DashboardSalesChart() {
  const state = useSalesStatistics();

  return (
    <LoadingProgress {...state} resourceName="Thông kê doanh số và lợi nhuận">
      <TableOperations end="true">
        <Filter
          filterField="type"
          options={[
            { label: "Trong 30 ngày", value: "month" },
            { label: "Trong 12 tháng", value: "year" },
          ]}
        />
      </TableOperations>
      <RevenueChart data={state.data} />
      <ProfitChart data={state.data} />
    </LoadingProgress>
  );
}
