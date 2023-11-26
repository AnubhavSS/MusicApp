"use client";
import React from "react";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";

const Library = () => {
  const onClick = () => {
    // handle upload later
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs!
      <MediaItem onClick={()=>{}}/></div>
    </div>
  );
};

export default Library;
