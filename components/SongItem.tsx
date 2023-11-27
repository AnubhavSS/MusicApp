"use client"
import Image from 'next/image';
import React, { FC } from 'react'
import PlayButton from './PlayButton';

interface Data{
    title:string;
    artist:string;
    image:string;
    music:string;
}

interface SongItemProps{
    onClick:(id:any)=>void;
    data:Data;
}

const SongItem:FC<SongItemProps> = ({onClick,data}) => {
  return (
    <div onClick={() => onClick(data)} className='relative group flex flex-col item-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3'>
        <div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
            <Image className='object-cover' src={data.image || '/3d-movie.png'} fill alt={data.title} sizes="(min-width:64px) (min-height:64px)"/>
        </div>
        <div className='flex flex-col items-start w-full pt-4 gap-y-1'>
          <p className='font-semibold truncate w-full'>{data.title}</p>
          <p className='text-sm pb-4 truncate w-full text-neutral-400'>By {data.artist}</p></div>
          <div className='absolute bottom-24 right-5'>
            <PlayButton/>
          </div>
    </div>
  )
}

export default SongItem