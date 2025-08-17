import React from 'react';
import TypeIcons from '@/@types/icons';

const CrossIcon = ({ className, size, ...props }: TypeIcons) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-x-icon lucide-x`} {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </>
    )
}

export default CrossIcon