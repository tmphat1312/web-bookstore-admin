import styled from "styled-components";
import OverviewCard from "./_OverviewCard";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { PiBooksDuotone } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { useCountItems } from "./useCountItems";
import LoadingProgress from "../../ui/LoadingProgress";

const _Layout = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function DashboardSystemOverview() {
  const state = useCountItems();

  return (
    <LoadingProgress {...state} resourceName="Tổng quan hệ thống">
      <_Layout>
        <OverviewCard
          label="Số tài khoản khách hàng"
          value={state.data.noCustomers}
          icon={<HiMiniUserGroup />}
          color="indigo"
        />
        <OverviewCard
          label="Số danh mục sản phẩm"
          value={state.data.noCategories}
          icon={<BiCategory />}
          color="yellow"
        />
        <OverviewCard
          label="Số sách trong kho"
          value={state.data.noBooks}
          icon={<PiBooksDuotone />}
          color="brand"
        />
        <OverviewCard
          label="Số sách đã bán ra"
          value={state.data.noSellingBooks}
          icon={<TbPigMoney />}
          color="red"
        />
      </_Layout>
    </LoadingProgress>
  );
}
