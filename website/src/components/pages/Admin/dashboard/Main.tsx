import React from 'react';
import Flashcards from './Flashcards';
import SalesChart from './SalesChart';
// import SampleChart from './SampleChart';
import FetchDashboardData from '../FetchDashboardData';

const Dashboard = () => {
  /* ____ Error tracking ... */
  // console.log("/Admin/");
  return (
    <>
      <FetchDashboardData />
      <section className="p-1">
        <Flashcards />
        {/* <SampleChart/> */}
        <SalesChart />
      </section>
    </>
  );
};

export default Dashboard;

// import React from 'react'

// const Dashboard = () => {
//   return (
//     <section>
//         <div className='flex flex-row flex-nowrap gap-[20px]'>
//             <div className='bg-blue-500 rounded-lg w-[200px] h-[80px] px-[30px] py-[8px]'>
//                 <span className='text-[15px] text-gray-200'>Total Orders</span>
//                 <p className='text-[30px] font-bold'>{300}</p>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Dashboard