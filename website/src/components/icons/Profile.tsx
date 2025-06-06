import React from 'react';
import TypeIcons from '@/@types/icons';

const Profile = ({ className, size, ...props }: TypeIcons) => {
    return (
        <>
            <svg width={size ? String(size.width) : "25"} height={size ? String(size.height) : "25"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`} {...props}>
                <path d="M16.4011 14.8594C20.102 14.8594 23.1022 11.8593 23.1022 8.15836C23.1022 4.45746 20.102 1.45728 16.4011 1.45728C12.7002 1.45728 9.70007 4.45746 9.70007 8.15836C9.70007 11.8593 12.7002 14.8594 16.4011 14.8594Z" stroke="white" strokeWidth="1.99782" />
                <path d="M1.99199 30.7176C1.6179 30.7176 3.0492 26.5864 3.16305 26.2773C5.27747 20.9913 9.47376 21.0076 16.4025 21.0076C23.3313 21.0076 28.0481 20.9913 30.1788 26.2773C30.2926 26.5701 31.1709 30.7014 30.8131 30.7014H2.00825L1.99199 30.7176Z" stroke="white" strokeWidth="1.99782" />
            </svg>
        </>
    )
}

export default Profile