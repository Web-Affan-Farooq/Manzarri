import React from 'react';
import TypeIcons from '@/@types/icons';

const Messages = ({className, size , ...props}:TypeIcons) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg"width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 24 24" fill="none" stroke="#536b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-messages-square-icon lucide-messages-square`} {...props}><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>  )
}

export default Messages