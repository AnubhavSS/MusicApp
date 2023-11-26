"use client"
import PlayerContent from './PlayerContent'
import usePlayer from '@/hooks/usePlayer'
import React from 'react'

const Player = () => {
    const player=usePlayer()

    // if(!player.activeId){
    //   return null;
    // }

  return (
    <div className='fixed bottom-0 bg-black w-full py-2 h-[80px] px-4'>
      <PlayerContent songUrl=''/>
      </div>
  )
}

export default Player