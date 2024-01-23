import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import SubHeading from "../../ui/headings/SubHeading";
import { fullDateToShortDate } from "../../utils/helpers";
import StyledChartContainer from "./_ChartContainer";

export default function RevenueChart({ data }) {
  const { isDarkMode } = useDarkMode();

  const simplifiedRevenueStat = data.map((stat) => ({
    date: fullDateToShortDate(stat.date),
    revenue: stat.revenue,
  }));

  const colors = isDarkMode
    ? {
        revenue: { stroke: "#0ea5e9", fill: "#0ea5e9" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        revenue: { stroke: "#0ea5e9", fill: "#c7d2fe" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledChartContainer>
      <SubHeading>Biểu đồ doanh thu</SubHeading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={simplifiedRevenueStat} margin={{ left: 50 }}>
          <Legend verticalAlign="top" height={36} />

          <XAxis
            dataKey="date"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            tickFormatter={(tick) => tick.toLocaleString()}
            unit="₫"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />

          <CartesianGrid strokeDasharray="4" />

          <Tooltip contentStyle={{ backgroundColor: colors.background }} />

          <Area
            dataKey="revenue"
            type="monotone"
            stroke={colors.revenue.stroke}
            fill={colors.revenue.fill}
            strokeWidth={2}
            name="Tổng doanh thu"
            unit="₫"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
}
