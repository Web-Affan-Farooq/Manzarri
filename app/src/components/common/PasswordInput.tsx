"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    const [show, setShow] = useState(false);
    return (
        <div className="flex flex-row flex-nowrap items-center gap-[10px]">
            <input type={show ? "text" : "password"} {...props} />
            {show ? <Eye onClick={() => setShow(!show)} className='w-5 cursor-pointer' /> : <EyeOff onClick={() => setShow(!show)} className='w-5 cursor-pointer' />}
        </div>
    )
}
export default PasswordInput;