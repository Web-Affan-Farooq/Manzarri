import TypeIcons from '@/@types/icons'
import React from 'react'

const Orders = ({ className, size, ...props }: TypeIcons) => {
    return (
        <svg width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`} {...props}>
            <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.93014 2.47979L4.59014 5.43979C3.38014 6.10979 2.39014 7.78979 2.39014 9.16979V14.8198C2.39014 16.1998 3.38014 17.8798 4.59014 18.5498L9.93014 21.5198C11.0701 22.1498 12.9401 22.1498 14.0801 21.5198L19.4201 18.5498C20.6301 17.8798 21.6201 16.1998 21.6201 14.8198V9.16979C21.6201 7.78979 20.6301 6.10979 19.4201 5.43979L14.0801 2.46979C12.9301 1.83979 11.0701 1.83979 9.93014 2.47979Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default Orders