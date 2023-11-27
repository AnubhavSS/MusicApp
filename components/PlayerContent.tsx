"use client";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import React, { FC, useState,useEffect } from "react";
import MediaItem from "./MediaItem";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import useSound from 'use-sound'

interface PlayerContentProps {
  title:string;
    artist:string;
    image:string;
    music:string;
}

interface Data{
  data:PlayerContentProps
}

const PlayerContent: FC<Data> = ({ data }) => {
  const [volume, setvolume] = useState(1);
  const [isPlaying, setisPlaying] = useState(false);

  const player = usePlayer();
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return 0;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }
    player.setId(nextSong);
  };


  
  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return 0;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) {
      return player.setId(player.ids[player.ids.length-1]);
    }
    player.setId(previousSong);
  };

  // console.log(data.music,"music")

  const [play, { pause, sound }] = useSound(
    "spotify:track:4WNcduiCmDNfmTEz7JvmL",
    { 
      volume: volume,
      onplay: () => setisPlaying(true),
      onend: () => {
        setisPlaying(false);
        onPlayNext();
      },
      onpause: () => setisPlaying(false),
      format: ['mp3']
    }
  );

  useEffect(() => {
    sound?.play();
    
    return () => {
      sound?.unload();
    }
  }, [sound]);

  const handlePlay = () => {
    console.log("hello")
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  }

const toggleMute=()=>{
  if(volume===0)
  {
    setvolume(1);
  }
  else{
    setvolume(0);
  }
}


  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={data}/>
        </div>
      </div>

      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div onClick={handlePlay} className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onPlayPrevious}
        />
        <div
          onClick={handlePlay}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onPlayNext}
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon onClick={toggleMute} size={34} className="cursor-pointer" />
          <Slider value={volume} onChange={(value)=>setvolume(value)}/>
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
