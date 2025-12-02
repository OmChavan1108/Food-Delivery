import Card from './Card'
import {  useState,useEffect } from 'react';
import useListOfRes from '../utils/useListOfRes';
import Shimmer from '../utils/Shimmer';
import { Link } from 'react-router-dom';

export default function Body(){
    let [filteredList, setFilteredList] = useState([]);
    const[searchedText,setSearchText]=useState("")

     let list=useListOfRes("");               //custom hook
     useEffect(() => {
     setFilteredList(list); // sync filtered list with API list
     }, [list]);

    function stars(){
        const obj=list.filter(item=>item.info.avgRating>=4.5)
        setFilteredList(obj)
    }

     function search(){
       const filtered = list.filter((i) => i.info.name.toLowerCase().includes(searchedText.toLowerCase()) );
       setFilteredList(filtered);
       setSearchText("");
    }

    function change(e){
        setSearchText(e.target.value)
    }

     function enter(e){
    if (e.key === "Enter") {
      search();
    }}
    //Conditional Rendering
    if(list.length===0 ){
        return <Shimmer/>
    }

    if(filteredList.length===0){
      return(
     <div className="w-full flex flex-col items-center mt-6">
       <div className="flex gap-3 items-center mb-4">
        <input type="text" placeholder="Search what you need right now" value={searchedText} onChange={change} onKeyDown={enter}
         className="border border-gray-400 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"onClick={search}>
          Search </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"onClick={stars} >
         Top Rated Restaurants</button>
       </div>
       <h1 className="text-xl font-semibold text-red-600"> No such restaurants</h1>
     </div>
      )   }

    return(
<div className="w-full px-6 mt-6">

  <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
   <input type="text" placeholder="Search what you need right now" value={searchedText} onChange={change} onKeyDown={enter}
      className="border border-gray-400 rounded-lg px-4 py-2 w-72 focus:ring-2 focus:ring-indigo-500 outline-none" />
   <button className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition" onClick={search}>
      Search</button>
   <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/50 hover:bg-indigo-600 transition" onClick={stars} >
      Top Rated Restaurants  </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredList.map((items, idx) => (  <Link  to={`/restaurant/${idx}`}  key={idx}  className="no-underline">
        <Card resData={items} /> </Link> ))}
  </div>

</div>  
)}