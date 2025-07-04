import React from 'react';
import { AtSign } from 'lucide-react';

const Login = () => {
    return (
        <main>
            <article>
                <section className='w-full h-screen bg-background'>
                    {/*Logo... */}
                    <span className="font-rye
    font-normal
    leading-[100%]
    tracking-[0%]
    2xl:text-[50px]
    xl:text-[40px]
    lg:text-[38px]
    md:text-[38px]
    sm:text-[30px]
    max-sm:text-[28px]
    text-skin
    ">Manzarri</span>

                    <div className='flex flex-col flex-nowrap justify-center items-center'>
                        <div className='border-b border-skin flex flex-row flex-nowrap justify-center items-center gap-[3px]'>
                            <AtSign className=''/>
                            <input type="text" id='email' className='border-l border-skin' />
                        </div>
                    </div>

                </section>
            </article>
        </main>
    )
}

export default Login