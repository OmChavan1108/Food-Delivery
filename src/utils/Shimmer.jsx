import '../components/card.css'
export default function Shimmer(){
    return(
     <div>
        <div className="search">
              <input type="text" placeholder="Search you needed right now"/>
              <button className='btn'>Search</button>
              <button className='filter-btn btn'>Top Rated Restaurants</button>
            </div>

        <div className="shimmer-con">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    </div>
    )
}