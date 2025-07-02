"use client";
import { useOrdersCount } from '@/components/hooks';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const SampleChart = () => {
  const { data } = useOrdersCount();

  return (
    <div style={{ width: '100%', height: 300 }} >
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid stroke='none'/>
          <XAxis dataKey="month" className='hidden'/>
          <YAxis className='hidden'/>
          <Tooltip contentStyle={{backgroundColor:"transparent", border:"none", }} offset={40} />
          <Bar dataKey="orders" fill="#29bae6"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SampleChart;
