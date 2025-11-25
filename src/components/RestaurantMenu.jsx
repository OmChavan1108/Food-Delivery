import { useParams } from "react-router-dom";
import { restaurants } from "../utils/resObj";
import "./Menu.css";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const restInfo = restaurants.find((r) => r.id === resid);

  if (!restInfo) {
    return <h2>Restaurant not found for ID: {resid}</h2>;
  }

  const menu = restInfo.menu;

  return (
    <div className="menu-page">
      
      <div className="restaurant-header">
        <h1>{restInfo.name}</h1>
        <p><strong>Cuisines:</strong> {restInfo.cuisines.join(", ")}</p>
        <p><strong>Rating:</strong> ⭐ {restInfo.avgRating}</p>
      </div>

      <h2 className="menu-title">Menu Items</h2>

      {menu.length > 0 ? (
        menu.map((item) => (
          <div key={item.card.info.id} className="menu-card">

            <div className="menu-info">
              <h3>{item.card.info.name}</h3>
              <p className="menu-price">₹ {item.card.info.price / 100}</p>
              <p className="menu-category">{item.card.info.category}</p>
            </div>
           
          </div>
        ))
      ) : (
        <h3>No items available</h3>
      )}
    </div>
  );
};

export default RestaurantMenu;
