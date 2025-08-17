import React from 'react'
import { Notification } from '@/@types/notifications';
// import { CheckIcon, X, } from 'lucide-react';
import { WarningIcon } from '@/components/icons';

const NotificationCard = ({ notification }: { notification: Notification }) => {
  return (
    <div className='flex flex-row flex-nowrap gap-[10px] items-center border-2 border-solid border-white'>
      {/* <div className='bg-green-500/20 rounded-full p-1 border border-green-500/20'>
        <CheckIcon className='text-green-400 w-[21px] h-[21px]'/>
      </div> */}
      {/* <div className='bg-red-500/20 rounded-full p-1 border border-red-500/20'>
        <X className='text-red-400 w-[21px] h-[21px]'/>
      </div> */}
      <div className='bg-yellow-500/20 rounded-full p-1 border border-yellow-500/20'>
        <WarningIcon className='w-[21px] h-[21px] text-yellow-400' />
      </div>

      <div className=''> {/** continue ... */}
        <p className='text-gray-400 text-[15px]'>{notification.notificationText}</p>
      </div>
    </div>
  )
}

export default NotificationCard