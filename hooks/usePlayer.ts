import {create} from 'zustand'

interface PlayerStore{
    ids:any[];
    activeId?:any;
    setId:(id:any)=>void;
    setIds:(ids:any[])=>void;
    reset:()=>void;
}

const usePlayer=create<PlayerStore>((set)=>({
    ids:[],
    activeId:undefined,
    setId:(id:any)=>set({activeId:id}),
    setIds:(ids:any[])=>set({ids:ids}),
    reset:()=>set({ids:[],activeId:undefined})
}))

export default usePlayer