import React from 'react';
import TypeIcons from '@/@types/icons';

const ArrorRight = ({className, size, ...props}:TypeIcons) => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-arrow-right-icon lucide-arrow-right`} {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </>
  )
}

export default ArrorRight