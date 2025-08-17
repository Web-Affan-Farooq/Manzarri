import React from 'react';
import Image from 'next/image';

const Section_9 = () => {
  return (
    <section className='w-full p-5 text-center'>
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Purity On Instagram</h1>              <br /><br /><br />
              <div className='flex flex-row flex-wrap justify-center align-middle gap-10'>
                <Image src={'/images/section-9-images/1.svg'} alt='model image' width={150} height={150} className='object-cover rounded-lg'/>
                <Image src={'/images/section-9-images/2.svg'} alt='model image' width={150} height={150} className='object-cover rounded-lg'/>
                <Image src={'/images/section-9-images/3.svg'} alt='model image' width={150} height={150} className='object-cover rounded-lg'/>
                <Image src={'/images/section-9-images/4.svg'} alt='model image' width={150} height={150} className='object-cover rounded-lg'/>
                <Image src={'/images/section-9-images/5.svg'} alt='model image' width={150} height={150} className='object-cover rounded-lg'/>
              </div>
    </section>
  )
}

export default Section_9