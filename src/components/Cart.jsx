import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Cart Items</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {cartItems.map((item, index) => {
            const { name, price, category } = item.card.info;

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {name}
                </h3>

                <p className="text-gray-500 mt-1">
                  Category: {category}
                </p>

                <p className="text-green-600 font-bold mt-2">
                  ₹{price / 100}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}