import './Body.css'
import Card from './Card'
import { useEffect, useState } from 'react';
import Shimmer from '../utils/Shimmer';

export default function Body(){

    let [list, setList] = useState([]);
    let [filteredList, setFilteredList] = useState([]);
    const[searchedText,setSearchText]=useState("")

     async function fetchdata(){
        let data = await fetch("http://localhost:3000/swiggy");
        let jdata=await data.json()
      
        //to read data
        const restaurants =
        jdata?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;  //optional chaining

       console.log("RESTAURANTS:", restaurants);
       if(restaurants){
        setList(restaurants)
        setFilteredList(restaurants); }
    }

   useEffect(() => {
    (async () => {
        await fetchdata();               //this is done to stop warnings
    })();
   }, []);

     
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
       <div>
        <div className="search">
            <input type="text" placeholder="Search you needed right now" value={searchedText} onChange={change} onKeyDown={enter}  />
              <button className='btn'  onClick={search}>Search</button>
              <button className='filter-btn btn' onClick={stars}>Top Rated Restaurants</button>
            </div>

        <h1>No Such restaurants</h1>
       </div>
      )  
       }

    return(
        <div className="body">

            <div className="search">
            <input type="text" placeholder="Search you needed right now" value={searchedText} onChange={change} onKeyDown={enter}  />
              <button className='btn'  onClick={search}>Search</button>
              <button className='filter-btn btn' onClick={stars}>Top Rated Restaurants</button>
            </div>
            
            <div className="card-container">
             {/*<Card  name="Apna Dhaba"  keyword="Chicken Dum of Pune"  rating="4.3"  price="450" />  */} {/*manual enter data*/}
              {/*<Card resData={resObj[1]}/>      Or else we can render single single obj */}
             {filteredList.map(items=> <Card key={items.info.id} resData={items}/>)} {/*Key use ny keli tari chaltay pn partek obj la unique key pahijen*/ }                           
            </div>
        </div>
    )
}