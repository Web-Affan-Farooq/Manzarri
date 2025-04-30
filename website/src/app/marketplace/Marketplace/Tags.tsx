"use client";

import Image from "next/image"
import { useState } from "react";
import { useCategory } from "@/stores/category";

const Tags = ({ tags }: { tags: { name: string, image: string }[] }) => {
    const [selectedSelf, setselectedSelf] = useState(false);
    const {category, updateCategory} = useCategory();

     return (
      <div className={`flex flex-row flex-wrap justify-start items-center gap-[20px] ${selectedSelf? "bg-faun-light" : ""}`}>
        {
          tags.map((tag, idx) => {
            return <div className='border border-solid border-gray-400 rounded-2xl py-[5px] px-[12px] flex flex-row flex-nowrap justiy-start items-center gap-[10px]' key={idx} onClick={(e) => {
                updateCategory(tag.name.toLowerCase())
            }}>
              <Image src={tag.image} alt={tag.name} width={30} height={30} className='rounded-full' />
              <span>{tag.name}</span>
            </div>
          })
        }
      </div>
    )
  }
  export default Tags;