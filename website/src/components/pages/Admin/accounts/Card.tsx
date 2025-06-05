import React from 'react';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

const Card = ({name, email }: { userId: string; name: string; email: string }) => {

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div className='flex cursor-pointer flex-row flex-nowrap justify-between items-center w-full max-sm:px-[10px] px-[20px] py-[10px] relative'>
                    <div>
                        <h1 className='font-bold text-[16px]'>{name}</h1>
                        <h2 className='text-[15px] text-gray-500'>{email}</h2>
                    </div>
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem className='hover:bg-gray-400 cursor-pointer'>Email</ContextMenuItem>
                <ContextMenuItem className='hover:bg-gray-400 cursor-pointer text-red-500 hover:text-white'>Delete</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}

export default Card