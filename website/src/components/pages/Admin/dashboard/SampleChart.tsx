"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useOrdersCount } from "@/components/hooks";

export const description = "A bar chart with a custom label"

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

const chartConfig = {
  desktop: {
    label: "orders",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig

export default function ChartBarLabelCustom() {
  const {data} = useOrdersCount();
  return (
    <Card className="w-[400px] h-[350px] text-white border-none bg-gray-900 max-sm:w-[92vw] max-[500px]:h-[300px] max-md:w-[85vw] max-md:h-auto">
      <CardHeader>
        <CardTitle>Sales</CardTitle>
        <CardDescription className="text-sm text-gray-500">January - December 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            {/* <CartesianGrid horizontal={false} /> */}
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="orders" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" className="text-black" />}
            />
            <Bar
              dataKey="orders"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
              barSize={30}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="orders"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}

// "use client";
// import { useOrdersCount } from '@/components/hooks';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

// const SampleChart = () => {
//   const { data } = useOrdersCount();

//   return (
//     <div style={{ width: '100%', height: 300 }} >
//       <ResponsiveContainer>
//         <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
//           <CartesianGrid stroke='none'/>
//           <XAxis dataKey="month" className='hidden'/>
//           <YAxis className='hidden'/>
//           <Tooltip contentStyle={{backgroundColor:"transparent", border:"none", }} offset={40} />
//           <Bar dataKey="orders" fill="#29bae6"/>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default SampleChart;
