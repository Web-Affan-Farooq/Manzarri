"use client";
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

const Fallback = ({success,message}:{success:boolean; message?:string}) => {
  useEffect(() => {
    if(!success && message) {
        toast.error(message)
    }
  },[success,message])
    return (
    <></>
  )
}

export default Fallback