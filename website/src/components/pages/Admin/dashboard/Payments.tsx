"use client"

import { Area, AreaChart,XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartData = [
    { month: "January", desktop: 186},
    { month: "February", desktop: 305},
    { month: "March", desktop: 237},
    { month: "April", desktop: 73},
    { month: "May", desktop: 209},
    { month: "June", desktop: 214},
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#1d3dcf",
    },
} satisfies ChartConfig

export default function ChartAreaGradient() {
    return (
        <Card className="w-[400px] h-[350px] text-white border-none bg-gray-900 max-sm:w-[92vw] max-[500px]:h-[300px] max-md:w-[85vw] max-md:h-auto">
            <CardHeader>
        <CardTitle>Payments</CardTitle>
                <CardDescription>
                    Showing payments in last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent className="text-black"/>} />
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>

                        </defs>
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="url(#fillDesktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
