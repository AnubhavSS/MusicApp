"use client"

import React, { useEffect,useState } from "react";
import { fetchCharts } from "../service";
import SongItem from "./SongItem";
import useOnPlay from "@/hooks/useOnPlay";


const PageContent = () => {
const [songs, setsongs] = useState([])
  
useEffect(() => {
  async function getCharts() {
    try {
      const data = await fetchCharts();
      console.log(data);
      setsongs(data?.tracks)
    } catch (error) {
      console.error("Error fetching charts:", error);
      // Handle the error as needed
    }
  }

  getCharts(); // Call the function to fetch data
}, []);

const onPlay=useOnPlay()

if(songs.length===0)
{
  return(<div>
    No song available
  </div>)
}

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
     {
      songs.map((item:any)=>(
        <SongItem
        key={item.key}
        onClick={(item:any) => {onPlay(item)}}
        data={{
          title: item.title,
          artist: item.subtitle,
          image: item.images?.coverart,
          music: item.url
        }}
      />
      ))
     }
    </div>
  );
};

export default PageContent;
