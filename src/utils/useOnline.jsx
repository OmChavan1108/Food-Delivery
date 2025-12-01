import { useState,useEffect } from "react"

export const useOnline = () => {
     
    let [status,setStatus]=useState(true);
    
    useEffect(()=>{
        window.addEventListener("offline",()=>{
         setStatus(false)
        })
       window.addEventListener("online",()=>{
         setStatus(true)
        })
    },[])

  return status;
  
}
