import './Body.css'
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
           {filteredList.map((items,idx)=> <Link to={"/restaurant/"+idx} key={idx} className='Link' ><Card key={idx} resData={items}/></Link>)} {/*Key use ny keli tari chaltay pn partek obj la unique key pahijen*/ }                           
            </div>
        </div>
    )
}