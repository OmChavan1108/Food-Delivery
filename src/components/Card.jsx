import './card.css'
export default function Card(props){      //do destructure OR props.name
 let resData=props.resData                //directly props madi {resData} lihala ki de-structurig chi garaj ny padat

 let data=resData.info
 let imgadd = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + data.cloudinaryImageId;

    return(
        <div className="card">
              <img src={imgadd}  className="menuimg"/>
             <h4>Name:{data.name}</h4>
             <p>Description:{data.cuisines.join(", ")}</p>
             <p>Rating:{data.avgRating} <i className="fa-regular fa-star"></i></p>
             <p>Price:{data.costForTwo}</p>
             <p>Opened:{data.availability.opened?"yes":"No"}</p>
             <h5>DeliveryTime:{data.sla.deliveryTime}</h5>
             <h6>Area Name:{data.areaName}</h6>
            
         </div>
    )
}