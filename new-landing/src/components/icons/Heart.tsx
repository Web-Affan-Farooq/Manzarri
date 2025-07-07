import React from 'react';
import TypeIcons from '@/@types/icons';
const Heart = ({className, size, ...props}:TypeIcons) => {
  return (
    <>
    <svg width={size? String(size.width) : "25"} height={size? String(size.height) : "25"}  viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`} {...props}>
<path d="M30.8805 18.5243L18.4703 31.1634L6.06002 18.5243C-4.88565 7.36763 7.52458 -5.27142 18.4703 5.88528C29.5894 -5.42745 41.9996 7.19208 30.8805 18.5243Z" stroke="white" strokeWidth="1.85663" strokeLinejoin="round"/>
</svg>

    </>
  )
}

export default Heart