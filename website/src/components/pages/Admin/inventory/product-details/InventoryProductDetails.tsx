"use client";
import React from 'react';
import { Bar, BarChart, XAxis } from "recharts";
import Image from 'next/image';

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

export const description = "A bar chart"

import { useInventoryProductDetails } from '@/components/hooks';

interface SalesData {
    month: string;
    sale: number;
}

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#5eb1e0",
    },
} satisfies ChartConfig

const SizeTag = ({ size }: { size: string }) => {
    if (size.toLowerCase().trim() === "md") {
        return (
            <span className='px-[10px] py-[1px] rounded-lg bg-green-500/30 text-green-500 text-[14px]'> {size}</span>
        )
    }
    else if (size.toLowerCase().trim() === "lg") {
        return (
            <span className='px-[10px] py-[1px] rounded-lg bg-yellow-500/30 text-yellow-500 text-[14px]'> {size}</span>
        )
    }
    if (size.toLowerCase().trim() === "md") {
        return (
            <span className='px-[10px] py-[1px] rounded-lg bg-pink-400/30 text-pink-400 text-[14px]'> {size}</span>
        )
    }
}

function ChartBarDefault({ data }: { data: SalesData[] }) {
    return (
        <Card className="w-[400px] h-[350px] text-white border-none bg-gray-900 max-sm:w-[92vw] max-[500px]:h-[300px] max-md:w-[85vw] max-md:h-auto">
            <CardHeader>
                <CardTitle>Product sales</CardTitle>
                <CardDescription>{data[0].month} - {data[data.length - 1].month}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={data}>
                        {/* <CartesianGrid vertical={false} /> */}
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="sale" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

const InventoryProductDetails = ({ productId }: { productId: string }) => {
    const { product, sold, remaining, salesData } = useInventoryProductDetails(productId);

    return (
        <section className='w-full h-[100vh] overflow-y-auto gray-scroller'>
            <h1 className='text-2xl font-bold my-[20px] p-5'>{product.productName}</h1>

            {/* Details ...  */}
            <div className='p-5 flex flex-col gap-[10px]'>
                <h1 className='text-lg font-bold my-[20px]'>Details</h1>
                <p><span className='text-blue-600'>{remaining}</span> pieces in stock</p>
                <p><span className='text-blue-600'>{sold}</span> pieces sold</p>
                <div className='flex flex-row flex-nowrap items-center gap-[20px]'>
                    <p>Ratings <span className='text-gray-400 text-sm'>(5.0)</span></p>
                    <div className='flex flex-row flex-nowrap gap-[5px]'>
                        <Image src={"/images/star-ratings.svg"} alt='ratings' width={15} height={15} />
                        <Image src={"/images/star-ratings.svg"} alt='ratings' width={15} height= {15} />
                        <Image src={"/images/star-ratings.svg"} alt='ratings' width={15} height={15} />
                        <Image src={"/images/star-ratings.svg"} alt='ratings' width={15} height={15} />
                        <Image src={"/images/star-ratings.svg"} alt='ratings' width={15} height={15} />
                    </div>
                </div>
                <p><span className='text-blue-600'>{product.stockKeepingUnit}</span> stock keeping unit id</p>
                <div className='flex flex-row items-center gap-[10px]'>
                    <p>Available sizes : </p>
                    <div className='flex flex-row gap-[10px]'>
                        {product.availableSizes.map((size, idx) => (
                            <SizeTag size={size} key={idx} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-row flex-wrap gap-4 gray-scroller p-5 max-sm:p-3'>
                    <ChartBarDefault data={salesData} />
                </div>
            </div>
        </section>
    )
}

export default InventoryProductDetails