import { useState,useEffect } from "react";

const useListOfRes = () => {
    let [list, setList] = useState([]);
  async function fetchdata(){
          let data = await fetch("http://localhost:3000/swiggy");
          let jdata=await data.json()
        
          //to read data
          const restaurants =
          jdata?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;  //optional chaining
  
         console.log("RESTAURANTS:", restaurants);
         if(restaurants){
          setList(restaurants)
          }
      }

      useEffect(() => {
    (async () => {
        await fetchdata();               //this is done to stop warnings
    })();
   }, []);

   return list;
}

export default useListOfRes