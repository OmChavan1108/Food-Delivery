
export default function Shimmer(){
    return(
  <div className="w-full px-6 mt-6">
    <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
      <input type="text" placeholder="Search what you need right now"
       className="border border-gray-400 rounded-lg px-4 py-2 w-72 focus:ring-2 focus:ring-indigo-500 outline-none"/>
      <button className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow">Search</button>
      <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow">Top Rated Restaurants </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
      {[1, 2,3,4,5,6,7,8,9].map((i) => (
      <div key={i} className="w-72 h-72 bg-gray-300 rounded-xl shadow-md overflow-hidden">
        <div className="w-full h-40 bg-gray-400">
        </div>

        <div className="p-4 space-y-3">
          <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
          <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>
      ))}
   </div>

</div>
)}