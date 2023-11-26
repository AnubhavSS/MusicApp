"use client"

import React from 'react'
import MediaItem from './MediaItem'

const SearchContent = ({songs}:any) => {
//songs comes from props

    if (songs?.length === 0) {
        return (
          <div 
            className="
              flex 
              flex-col 
              gap-y-2 
              w-full 
              px-6 
              text-neutral-400
            "
          >
            No songs found.
          </div>
        )
      }

  return (
    <div className='flex flex-col gap-y-2 w-full px-6'>{
        songs?.map((item:any)=>
        <div className='flex items-center gap-x-4 w-full' key={item.track?.key}>
            <div className='flex-1'>
                <MediaItem data={{
          title: item.track?.title,
          artist: item.track?.subtitle,
          image: item.track?.images?.coverart,
          music: item.track?.url
        }} />
            </div>
        </div>
    )}</div>
  )
}

export default SearchContent