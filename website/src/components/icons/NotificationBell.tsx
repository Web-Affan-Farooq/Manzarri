import React from 'react';
import TypeIcons from '@/@types/icons';

const NotificationBell = ({className, size , ...props}:TypeIcons) => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" stroke="#536b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-bell-icon lucide-bell`} {...props}><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
    </>
  )
}

export default NotificationBell