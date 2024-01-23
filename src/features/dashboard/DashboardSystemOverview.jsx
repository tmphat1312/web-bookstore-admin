import styled from "styled-components";
import OverviewCard from "./_OverviewCard";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { PiBooksDuotone } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";

const _Layout = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function DashboardSystemOverview({ data = {} }) {
  return (
    <_Layout>
      <OverviewCard
        label="Số tài khoản khách hàng"
        value={data.noCustomers}
        icon={<HiMiniUserGroup />}
        color="indigo"
      />
      <OverviewCard
        label="Số danh mục sản phẩm"
        value={data.noCategories}
        icon={<BiCategory />}
        color="yellow"
      />
      <OverviewCard
        label="Số sách trong kho"
        value={data.noBooks}
        icon={<PiBooksDuotone />}
        color="brand"
      />
      <OverviewCard
        label="Số sách đã bán ra"
        value={data.noSellingBooks}
        icon={<TbPigMoney />}
        color="red"
      />
    </_Layout>
  );
}
