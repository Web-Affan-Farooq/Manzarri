import React from 'react';
import Button_2 from '../Button/Button-2';

const Section_5 = () => {
  return (
    <section className={`bg-[url("/images/section-5-images/1.svg")] bg-no-repeat bg-center bg-cover backdrop-opacity-100 backdrop-blur-3xl w-full h-[662px] flex flex-col flex-nowrap justify-center items-center`}>

    <div className='
    flex flex-col flex-nowrap justify-center items-center'>
      <div className='text-faun-dark font-libre-bodoni font-bold text-[40px] leading-[50px] text-center'>
      <h1>Jewelry for Every</h1>
      <h1>Ocassion</h1>
      </div>
      <Button_2/>
    </div>

  </section>
//     <section className='bg-[var(--faun-light)] grid grid-cols-[3fr_2fr_2fr] grid-rows-[2fr_2fr_2fr] justify-center item-center'>
//       <div className='row-start-1 row-span-4'>
//     <Image src={'/images/section-5-images/1.svg'} alt='img' width={400} height={400} className='w-full object-cover h-full'/>
//       </div>

//       <div className='col-start-2 row-start-2 
//       flex flex-col flex-nowrap justify-center items-center'>
//         <div className='text-[40px] leading-[50px] text-center'>
//         <h1>Jewelry for Every</h1>
//         <h1>Ocassion</h1>
//         </div>
//         <Button_2/>
//       </div>

// <div className='col-start-3 row-start-2 row-end-3 col-end-4'>
// <Image src={'/images/section-5-images/1.svg'} alt='img' width={400} height={400} className='w-1/2 h-full'/>
// </div>
//     </section>
  )
}

export default Section_5;