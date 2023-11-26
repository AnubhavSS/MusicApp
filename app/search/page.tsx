"use client"

import Header from '@/components/Header';
import React,{useEffect,useState} from 'react'
import SearchInput from '@/components/SearchInput';
import SearchContent from '@/components/SearchContent';
import { fetchSearched } from '@/service';
interface SearchProps{
    searchParams:{
        title:string;
    }
}

const Search = ({searchParams}:SearchProps) => {
const [songs, setsongs] = useState([])

// useEffect(() => {
//     function getSongs() {
//         fetchSearched(searchParams.title)
//             .then(data => {
//                 setsongs(data?.tracks?.hits);
//                 console.log(songs);
//             })
//             .catch(error => {
//                 console.error("Error fetching songs:", error);
//             });
//     }

//     getSongs();
// }, [searchParams.title]);

    
    

  return (
    <div className='bg-neutral-900 w-full h-full rounded-lg overflow-hidden overflow-y-auto'>
        <Header className='from-bg-neutral-900'>
           <div className='mb-2 flex flex-col gap-y-6'>
<h1 className='text-white text-3xl font-semibold'>Search</h1>
<SearchInput/>
           </div>
        </Header>
        <SearchContent songs={songs}/>
        </div>
  )
}

export default Search