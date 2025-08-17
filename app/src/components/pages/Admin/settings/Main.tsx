import React from 'react';
import AgentSwitch from './AgentSwitch';

const Main = () => {
    return (
        <section>
            <h1 className='font-semibold text-gray-400 text-[24px]'>Settings</h1>
            <br />
            <div className='p-5 flex flex-row flex-nowrap justify-between items-center'>
                <p className='text-[15px] text-gray-300'>Activate Agent</p>
                <AgentSwitch />
            </div>
        </section>
    )
}

export default Main