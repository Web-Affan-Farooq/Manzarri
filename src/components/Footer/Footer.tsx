import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className='text-center bg-[var(--faun-light)] text-white'>
                <div className='flex flex-row flex-wrap gap-6 justify-evenly max-sm:justify-start items-center p-4'>
                    <div className='p-3'>
                        <h2 className='text-[20px] font-bold font-libre-bodoni'>MY ACCOUNT</h2>
                        <br />
                        <div className='flex flex-col flex-wrap text-left gap-2'>
                            <span>
                                <Link href={'/'} className='font-lato'>Career at Eldy</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>About us</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Sustainability</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Press</Link>
                            </span>
                        </div>
                    </div>

                    <div className='p-3'>
                        <h2 className='text-[20px] font-bold font-libre-bodoni'>HELP</h2>
                        <br />
                        <div className='flex flex-col flex-wrap text-left gap-2'>
                            <span>
                                <Link href={'/'} className='font-lato'>FAQ</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Shipping</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Returns</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Order Status</Link>
                            </span>
                        </div>
                    </div>

                    <div className='p-3'>
                        <h2 className='text-[20px] font-bold font-libre-bodoni'>FOLLOW US ON</h2>
                        <br />
                        <div className='flex flex-col flex-wrap text-left gap-2'>
                            <span>
                                <Link href={'/'} className='font-lato'>Twitter </Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Facebook</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Google Plus</Link>
                            </span>
                            <span>
                                <Link href={'/'} className='font-lato'>Instagram</Link>
                            </span>
                        </div>
                    </div>

                    <div className='p-3'>
                        <h2 className='text-[20px] font-bold font-libre-bodoni'>ABOUT US</h2>
                        <br />
                        <div className='flex flex-col flex-wrap text-left gap-2'>
                            <div className='text-black font-lato'>Email:<span className='text-white font-lato'>purity_jewel@gmail.com</span></div>
                            <div className='text-black font-lato'>Phone:<span className='text-white font-lato'>0987654321</span></div>
                        </div>
                    </div>
                </div>

            </footer>
            <div className='text-white text-center p-5 bg-[#5e5844]'>
                <p>&copy; MANZARRI X Muhammad Affan 2024 | All rights reserved .</p>
            </div>
        </>
    )
}

export default Footer;

/*

*/