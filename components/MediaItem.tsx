"use client"

import Image from 'next/image';
import React, { FC } from 'react'

interface Data{
    title:string;
    artist:string;
    image:string;
    music:string;
}

interface MediaItemProps{
    onClick?:(id:string)=>void;
    data?:Data;
}



const MediaItem:FC<MediaItemProps> = ({onClick,data}) => {

    const handleClick=()=>{
        if(onClick){
            // return onClick()
        }
    }

  return (
    <div onClick={handleClick} className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md'>
    <div className='relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden'>
<Image fill src={data?.image || '/3d-movie.png'} className='object-cover' alt='media items'/>
    </div>
    <div className='flex flex-col gap-y-1 overflow-hidden'>
<p className='text-white truncate'>{data?.title}</p>
<p className='text-neutral-400 text-sm truncate'>{data?.artist}</p>
    </div>
       </div>
  )
}

export default MediaItem