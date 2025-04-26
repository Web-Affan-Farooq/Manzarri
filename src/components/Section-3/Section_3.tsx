import React from 'react';
import Image from 'next/image';

const Section_3 = () => {
  return (
    <section className='text-center w-full p-5 flex flex-row flex-wrap justify-center items-center gap-5 '>
      <div className='w-[350px] p-3 bg-customgray rounded-md'>
        <Image src={'/images/section-3-images/1.svg'} alt='icon van' width={70} height={70} className='m-auto'/>
        <h2 className='text-[20px] font-bold leading-10 font-libre-bodoni'>Shipping Worldwide</h2>
        <p className='text-[13px] w-40 text-center m-auto font-playfair'>  kjfd lorem fhdjhf dfjdhfd fjdhfjd fdjfhjd fdhf</p>
      </div>
      <div className='w-[350px] p-3 bg-customgray rounded-md'>
        <Image src={'/images/section-3-images/2.svg'} alt='icon van' width={70} height={70} className='m-auto'/>
        <h2 className='text-[20px] font-bold leading-10 font-libre-bodoni'>Shipping Worldwide</h2>
        <p className='text-[13px] w-40 text-center m-auto font-playfair'>  kjfd lorem fhdjhf dfjdhfd fjdhfjd fdjfhjd fdhf</p>
      </div>
      <div className='w-[350px] p-3 bg-customgray rounded-md'>
        <Image src={'/images/section-3-images/3.svg'} alt='icon van' width={70} height={70} className='m-auto'/>
        <h2 className='text-[20px] font-bold leading-10 font-libre-bodoni'>Shipping Worldwide</h2>
        <p className='text-[13px] w-40 text-center m-auto font-playfair'>  kjfd lorem fhdjhf dfjdhfd fjdhfjd fdjfhjd fdhf</p>
      </div>
    </section>
  )
}

export default Section_3