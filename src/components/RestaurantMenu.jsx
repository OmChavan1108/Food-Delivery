import { useParams } from "react-router-dom";
import { restaurants } from "../utils/resObj";


const RestaurantMenu = () => {
  const { resid } = useParams();
  const restInfo = restaurants.find((r) => r.id === resid);

  if (!restInfo) {
    return <h2>Restaurant not found for ID: {resid}</h2>;
  }

  const menu = restInfo.menu;

 return (
<div className="w-full min-h-screen px-6 py-8 bg-linear-to-br from-gray-100 to-gray-200">
  {/* Header Section */}
  <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200">
    <h1 className="text-3xl font-extrabold text-indigo-700 mb-2"> {restInfo.name} </h1>
    <p className="text-gray-600"><strong className="text-gray-800">Cuisines:</strong> {restInfo.cuisines.join(", ")}</p>
    <p className="text-yellow-600 font-semibold mt-1"><strong className="text-gray-800">Rating:</strong> ⭐ {restInfo.avgRating}</p>
  </div>
  {/* Menu title */}
  <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center underline decoration-indigo-400"> Menu Items </h2>
  {/* Menu List */}
  {menu.length > 0 ? (
    <div className="space-y-4">
      {menu.map((item) => (
        <div key={item.card.info.id}
          className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer" >
          <div className="menu-info space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h3>
            <p className="text-green-600 font-bold">₹ {item.card.info.price / 100}</p>
            <p className="text-sm text-gray-500 italic"> {item.card.info.category} </p>
          </div>
        </div>
      ))}
    </div>
  ) : (<h3 className="text-center text-gray-600 text-lg font-semibold">No items available 🍽️</h3> )}
</div>
 )};

export default RestaurantMenu;
