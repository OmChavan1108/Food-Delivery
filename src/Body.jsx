import './Body.css'
import Card from './Card'
import { resObj } from './resObj'
export default function Body(){
    return(
        <div className="body">

            <div className="search">
              <input type="text" placeholder="Search you needed right now"/>
              <button className='btn'>Search</button>
            </div>
            
            <div className="card-container">
             {/*<Card  name="Apna Dhaba"  keyword="Chicken Dum of Pune"  rating="4.3"  price="450" />  */} {/*manual enter data*/}
              {/*<Card resData={resObj[1]}/>      Or else we can render single single obj */}
             {resObj.map(items=> <Card key={items.id} resData={items}/>)} {/*Key use ny keli tari chaltay pn partek obj la unique key pahijen*/ }                           
            </div>
        </div>
    )
}