import usePlayer from "./usePlayer"

const useOnPlay=()=>{
    const player=usePlayer()

    const onPlay=(item:any)=>{
      
player.setId(item)

    }

    return onPlay;
}

export default useOnPlay