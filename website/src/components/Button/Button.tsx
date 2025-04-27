import React from 'react'

const Button = ({text}:{text:string}) => {
  return (
    <button type="button" className='font-libre-bodoni px-[60px] py-[5px] text-[17px] gap-[8.6px] rounded-[8.6px] bg-[var(--faun-light)] font-medium text-white text-center'>{text}</button>
  )
}

export default Button