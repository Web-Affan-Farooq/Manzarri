"use client";
import React, { useState } from 'react'

const Stock = () => {
    const [category, setcategory] = useState("all");
  return (
    <>
    <div className='flex flex-row flex-wrap gap-[10px] px-5 py-2'>
        <div className={`${category.toLowerCase() === "all" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
            setcategory("all");
        }}>
            All
        </div>
        <div className={`${category.toLowerCase() === "sold" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
            setcategory("sold");
        }}>
            Sold
        </div>
        <div className={`${category.toLowerCase() === "lowstock" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
            setcategory("lowstock");
        }}>
            Low stock
        </div>
        <div className={`${category.toLowerCase() === "trending" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
            setcategory("trending");
        }}>
            Trending
        </div>
        <div className={`${category.toLowerCase() === "toprated" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
            setcategory("toprated");
        }}>
            Top rated
        </div>
    </div>
    </>
  )
}

export default Stock