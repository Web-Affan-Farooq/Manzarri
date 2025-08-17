import React from 'react';
import TypeIcons from '@/@types/icons';

const DecreaseArrow = ({className, size, ...props}:TypeIcons) => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-trending-down-icon lucide-trending-down`} {...props}><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>
    </>
  )
}

export default DecreaseArrow