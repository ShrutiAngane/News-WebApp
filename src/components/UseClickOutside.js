import { useEffect } from "react";

const useClickOutside=(ref,callback)=>{
    function handleClick(e){
        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }

    } ;
useEffect(()=>{
    document.addEventListener('click',handleClick)
    return ()=>{
        document.removeEventListener('click',handleClick)
    }
})
}

export default useClickOutside;
