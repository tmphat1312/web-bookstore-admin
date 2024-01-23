import { useCountItems } from "./useCountItems";
import LoadingProgress from "../../ui/LoadingProgress";
import DashboardSystemOverview from "./DashboardSystemOverview";

export default function DashboardLayout() {
  const state = useCountItems();

  return (
    <LoadingProgress {...state} resourceName="Tổng quan hệ thống">
      <DashboardSystemOverview data={state.data} />
      <div>
        <div>sales chart</div>
        <div>category sales chart</div>
        <div>best sellers chart</div>
      </div>
    </LoadingProgress>
  );
}
