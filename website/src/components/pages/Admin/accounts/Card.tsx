"use client";
import React from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

import { useAccountCard } from '@/components/hooks';

const Card = ({ userId, name, email, isBlocked, isAdmin }: { userId: string; name: string; email: string; isBlocked: boolean, isAdmin: boolean }) => {

  const { handleDelete, handleAccountBlockandUnblock, handleDeleteInput } = useAccountCard({
    userId: userId,
    isBlocked: isBlocked,
  });
  /*
      <span
        className={`absolute max-sm:right-14 sm:right-16 top-4 px-[9px] py-[2px] rounded-full text-[9px] tracking-[0.5px] font-semibold text-pink-300 bg-gray-500/40`}>
        Guest
      </span>)
      */

  return (
    <div className='relative'>
      {isAdmin ? (
        <span className={`absolute max-sm:right-14 sm:right-16 top-4 px-[9px] py-[2px] rounded-full text-[9px] tracking-[0.5px] font-semibold text-green-500 bg-green-500/40`}>
        Admin
      </span>) : <></>}

      <Dialog>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className='flex cursor-pointer flex-row flex-nowrap justify-between items-center w-full max-sm:px-[10px] px-[20px] py-[10px]'>
              <div>
                <h1 className='font-bold text-[16px]'>{name}</h1>
                <h2 className='text-[15px] text-gray-500'>{email}</h2>
              </div>

            </div>
          </ContextMenuTrigger>

          <ContextMenuContent>
            <ContextMenuItem className='hover:bg-gray-400 cursor-pointer'>Email</ContextMenuItem>
            <ContextMenuItem className={`${isAdmin ? "hidden" : ""} hover:bg-gray-400 cursor-pointer`}>Invite as guest</ContextMenuItem>

            <ContextMenuItem className={`${isAdmin ? "hidden" : ""} hover:bg-gray-400 cursor-pointer text-orange-500 hover:text-white`} onClick={handleAccountBlockandUnblock}>
              {isBlocked ? <p>Unblock account</p> : <p>Block account</p>}
            </ContextMenuItem>
            <ContextMenuItem>
              <DialogTrigger className={`${isAdmin ? "hidden" : ""} w-full cursor-pointer text-red-500 text-left`}>Delete</DialogTrigger>
            </ContextMenuItem>

          </ContextMenuContent>
          <DialogContent className='bg-gray-900 border-none'>
            <DialogHeader>
              <DialogTitle className='text-white'>Are you sure?</DialogTitle>
              <label htmlFor={`Please provide reason for why you're deleting account of ${name}`} className='text-[13px] text-gray-400' id='delete-input'>Why do you want to delete account ?</label>
              <input type="text" className='text-gray-400 w-full sm:w-[80%] px-[10px] py-[5px]' id='delete-input' onChange={handleDeleteInput} />
              <DialogDescription className='text-gray-400'>
                This action cannot be undone. This will permanently delete account
                and remove all data .
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className='flex flex-row flex-nowrap gap-[10px]'>
              <button type="button" className='cursor-pointer px-[13px] py-[4px] rounded-lg border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200 ease-in-out text-[15px]' onClick={handleDelete}>Delete</button>
              <DialogClose className='px-[13px] py-[4px] rounded-lg bg-black text-white text-[15px] cursor-pointer'>
                Cancel
              </DialogClose>
            </DialogFooter>
          </DialogContent>

        </ContextMenu>
      </Dialog>
    </div>
  )
}

export default Card;

/*
<DialogContent className='bg-gray-900 border-none'>
  <DialogHeader>
    <DialogTitle className='text-white'>Are you sure?</DialogTitle>
    <DialogDescription className='text-gray-400'>
      This action can't be undone. This will permanently delete the account and remove all data.
    </DialogDescription>
  </DialogHeader>
  <label htmlFor={`delete-input`} className='text-[13px] text-gray-400'>
    Why do you want to delete the account of {name}?
  </label>
  <input
    id="delete-input"
    type="text"
    className='text-gray-400 w-[80%] px-[10px] py-[5px]'
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setdeleteText(e.target.value)}
  />
  <DialogFooter className='flex flex-row flex-nowrap gap-[10px]'>
    <button
      type="button"
      className='cursor-pointer px-[13px] py-[4px] rounded-lg border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200 ease-in-out text-[15px]'
      onClick={handleDelete}
    >
      Delete
    </button>
    <DialogClose className='px-[13px] py-[4px] rounded-lg bg-black text-white text-[15px] cursor-pointer'>
      Cancel
    </DialogClose>
  </DialogFooter>
</DialogContent>

*/