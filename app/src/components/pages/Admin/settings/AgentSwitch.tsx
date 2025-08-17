"use client";
import React, { useState } from 'react';
const AgentSwitch = () => {
    const [status, setstatus] = useState(false);
    return (
        <div className='transition-all duration-200 ease-in-out w-[53px] h-[24px] rounded-xl relative' onClick={() => {
            setstatus(!status);
        }}>
            <div className={`absolute top-0 transition-all duration-200 ease-in-out w-[20px] h-[20px] rounded-full ${status ? "bg-white translate-x-0" : "bg-gray-600 translate-x-[30px]"}`}>
            </div>
        </div>
    )
}

export default AgentSwitch;