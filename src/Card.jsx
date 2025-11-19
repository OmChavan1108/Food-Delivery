import './card.css'
export default function Card(props){      //do destructure OR props.name
 let resData=props.resData                //directly props madi {resData} lihala ki de-structurig chi garaj ny padat
    return(
        <div className="card">
             <img src={resData.img}  className="menuimg"/>
             <h4>Name:{resData.name}</h4>
             <p>Description:{resData.keywords.join(", ")}</p>
             <p>Rating:{resData.rating} <i className="fa-regular fa-star"></i></p>
             <p>Price:<i className="fa-solid fa-rupee-sign">:{resData.price}</i></p>
             <p>Discout:{resData.discount}</p>
             <h5>DeliveryTime:{resData.deliveryTime}</h5>
             <h6>{resData.isVeg?" Veg":" Non-Veg"}</h6>
            
         </div>
    )
}