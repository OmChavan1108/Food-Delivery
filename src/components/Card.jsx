export default function Card(props){      //do destructure OR props.name
 let resData=props.resData                //directly props madi {resData} lihala ki de-structurig chi garaj ny padat
 let data=resData.info
 let imgadd = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + data.cloudinaryImageId;

 return(
  <div className="w-72 bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col justify-between h-[420px]">
   <img src={imgadd} className="w-full h-40 object-cover rounded-lg mb-3" alt="menu"/>
   <div className="flex flex-col gap-1 grow">
     <h4 className="text-lg font-bold">{data.name}</h4>
     <p className="text-gray-700 text-sm line-clamp-2"> {data.cuisines.join(", ")}</p>
     <p className="text-gray-800 font-medium flex items-center gap-1"> Rating: {data.avgRating}
      <i className="fa-regular fa-star text-yellow-500"></i>
     </p>
     <p className="text-sm text-gray-700">Price: {data.costForTwo}</p>
     <p className="text-sm text-gray-700"> Opened: {data.availability.opened ? "Yes" : "No"}</p>
   </div>
   <div>
     <h5 className="text-md font-semibold">Delivery Time: {data.sla.deliveryTime} mins</h5>
     <h6 className="text-sm text-gray-600">{data.areaName}</h6>
   </div>
 </div>
 )}