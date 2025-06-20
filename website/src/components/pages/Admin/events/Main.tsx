import React from 'react';
import { Plus } from 'lucide-react';

const Main = () => {
  return (
    <div className='w-full p-4'>
        <h1 className='text-[25px] font-bold text-gray-400'>Events</h1>
        <br />
        <button type="button" className='flex flex-row items-center font-semibold bg-gray-custom gap-[5px] rounded-md px-[10px] py-[5px]'><Plus className='text-[15px]'/> Create </button>
    </div>
  )
}

export default Main