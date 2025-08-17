"use client";

import Image from "next/image"
import { useState } from "react";
import "./style.css";

const Tags = ({ tags }: { tags: { name: string, image: string }[] }) => {
    const [selectedSelf] = useState(false);

     return (
      <div className="w-full max-sm:overflow-x-scroll whitespace-nowrap scroll-container">
      <div className={`flex flex-row justify-start items-center gap-[10px] ${selectedSelf? "bg-faun-light" : ""}`}>
        {
          tags.map((tag, idx) => {
            return <div className='py-[5px] px-[12px] flex flex-col flex-nowrap justiy-start items-center' key={idx} onClick={() => {
            
            }}>
              <Image src={tag.image} alt={tag.name} width={100} height={100} className='rounded-full md:w-[80px] md:h-[80px] sm:w-[55px] sm:h-[55px] max-sm:w-[55px] max-sm:h-[55px]' />
              <span className="text-[15px] text-gray-600">{tag.name}</span>
            </div>
          })
        }
      </div>
      </div>
    )
  }
  export default Tags;