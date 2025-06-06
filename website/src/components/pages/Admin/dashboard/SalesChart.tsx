"use client";
import sanityClient from "@/lib/sanity";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const SalesChart = () => {
  const [data, setData] = useState<{ month: string, sales: number }[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      const salesData: { month: string, sales: number }[] = [];

      for (let i = 0; i < 12; i++) {
        const monthStart = `2025-${String(i + 1).padStart(2, "0")}-01T00:00:00Z`;
        const monthEnd = i === 11
          ? `2026-01-01T00:00:00Z` // End of December
          : `2025-${String(i + 2).padStart(2, "0")}-01T00:00:00Z`;

        const countQuery = `count(*[_type == "Orders" && _updatedAt >= "${monthStart}" && _updatedAt < "${monthEnd}"])`;

        const getOrdersCount = await sanityClient.fetch(countQuery);
        salesData.push({ month: monthNames[i], sales: getOrdersCount });
      }

      setData(salesData);
    };

    getOrders();
  }, []);

  return (
    <>
      <br />
      <h1 className='text-[23px] font-semibold pb-[15px] '>Sales analytics</h1>

      <div className="w-full h-[300px] cursor-pointer text-black">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="none" />
            <XAxis dataKey="month" />
            <YAxis
              domain={['auto', 'auto']} // <-- auto scaling based on data
              allowDataOverflow={true}
              tickCount={8}
            />            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#FFFFFF"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
<Tooltip
  formatter={(value: number) => [`${value} orders`, "Sales"]}
  labelFormatter={(label: string, payload) => {
    const sales = payload?.[0]?.value;
    return `Month: ${label}\nSales: ${sales}`;
  }}
/>

          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SalesChart;