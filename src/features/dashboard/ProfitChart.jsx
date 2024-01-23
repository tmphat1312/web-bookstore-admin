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

export default function ProfitChart({ data }) {
  const { isDarkMode } = useDarkMode();

  const simplifiedProfitStat = data.map((stat) => ({
    date: fullDateToShortDate(stat.date),
    profit: stat.profit,
  }));

  const colors = isDarkMode
    ? {
        profit: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        profit: { stroke: "#22c55e", fill: "#c7d2fe" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledChartContainer>
      <SubHeading>Biểu đồ lợi nhuận</SubHeading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={simplifiedProfitStat} margin={{ left: 50 }}>
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
            dataKey="profit"
            type="monotone"
            stroke={colors.profit.stroke}
            fill={colors.profit.fill}
            strokeWidth={2}
            name="Tổng lợi nhuận"
            unit="₫"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
}
