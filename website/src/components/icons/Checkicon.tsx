import React from 'react';
import TypeIcons from '@/@types/icons';

const Checkicon = ({ className, size, ...props }: TypeIcons) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-check-icon lucide-check`} {...props}><path d="M20 6 9 17l-5-5" /></svg>
        </>
    )
}

export default Checkicon