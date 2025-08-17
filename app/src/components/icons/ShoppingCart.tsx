import React from 'react';
import TypeIcons from '@/@types/icons';

const ShoppingCart = ({className, size,...props}:TypeIcons) => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg"  width={size? String(size.width) : "25"} height={size? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-shopping-cart-icon lucide-shopping-cart`} {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    </>
  )
}

export default ShoppingCart