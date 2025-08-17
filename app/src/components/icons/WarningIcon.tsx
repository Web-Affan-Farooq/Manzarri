import React from 'react';
import TypeIcons from '@/@types/icons';

const WarningIcon = ({ className, size, ...props }: TypeIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-triangle-alert-icon lucide-triangle-alert ${className}`} {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    )
}

export default WarningIcon