"use client";
import { useCallback } from "react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import moment from "moment";
import "moment/locale/vi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
type LineChartComponentProps = {
  dataX: Array<string>;
  dataY: Array<string>;
  title?: string;
  highestValue?: number;
};
export function LineChartComponent({
  dataX,
  dataY,
  highestValue,
  title,
}: LineChartComponentProps) {
  const date = moment().startOf("day").valueOf();
  const chartData = useCallback(() => {
    return dataX.map((xValue, index) => ({
      x: xValue,
      y: parseFloat(dataY[index]) || 0,
    }));
  }, [dataX, dataY]);
  const getValue = useCallback(() => {
    if (dataY.length === 0) return 0;
    const sum = dataY.reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0);
    return (sum / dataY.length).toFixed(2);
  }, [dataY]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}:{getValue()}
        </CardTitle>
        <CardDescription>
          {moment(date)
            .format("dddd [ngày] D [tháng] M [năm] YYYY ")
            .charAt(0)
            .toUpperCase() +
            moment(date).format("dddd [ngày] D [tháng] M [năm] YYYY ").slice(1)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData()}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="x"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="y"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Giá trị lớn nhất: {highestValue}
        </div>
      </CardFooter>
    </Card>
  );
}
