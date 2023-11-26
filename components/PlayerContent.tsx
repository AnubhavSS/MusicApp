"use client";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import React, { FC } from "react";
import MediaItem from "./MediaItem";

interface PlayerContentProps {
  songUrl: string;
}

const PlayerContent: FC<PlayerContentProps> = ({ songUrl }) => {
  const Icon = true ? BsPauseFill : BsPlayFill;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4"> 
          <MediaItem />
        </div>
      </div>

      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
          <Icon size={30} className="text-black"/>
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
