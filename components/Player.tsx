"use client"
import PlayerContent from './PlayerContent'
import usePlayer from '@/hooks/usePlayer'
import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
    const player=usePlayer()
    console.log(player.activeId,"active")

    if(!player.activeId){
      return null;
    }

  return (
    <div className='fixed bottom-0 bg-black w-full py-2 h-[80px] px-4'>
      {/* <PlayerContent data={player.activeId}/> */}
      <AudioPlayer
    autoPlay
    src="https://p.scdn.co/mp3-preview/1d53b96abb564f9ba08427c3c5361dd8fbe72f7d?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
      </div>
  )
}

export default Player