import React from "react";
import Navbar from "../../components/navbar.tsx";

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "Red Dress",
      price: 99.99,
      quantity: 1,
      image: require("../../images/blacktshirt.png"),
    },
    {
      id: 2,
      name: "Blue Handbag",
      price: 789.99,
      quantity: 1,
      image: require("../../images/denims.png"),
    },
    {
      id: 3,
      name: "Yellow desgined kurtis with Set - All sizes",
      price: 649,
      quantity: 1,
      image: require("../../images/kurtis.png"),
    },
    {
      id: 4,
      name: "Grey Hoodi wollen dress for winter - M,XL",
      price: 1089.99,
      quantity: 1,
      image: require("../../images/wollen.png"),
    },
    {
      id: 5,
      name: "Women Printed Round Neck Pure Cotton Black T-Shirt",
      price: 29.99,
      quantity: 1,
      image: require("../../images/blacktshirt.png"),
    },
    {
      id: 6,
      name: "Women Printed Round Neck Pure Cotton Black T-Shirt",
      price: 29.99,
      quantity: 1,
      image: require("../../images/blacktshirt.png"),
    },
  ]);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="sticky bg-gradient-to-r from-red-300 to-blue-200 bg-red-100 min-h-screen items-center min-w-fit">
      <Navbar />

      <div className="p-4">
        <div className="flex-wrap grid grid-cols-3 gap-3">
          {cartItems.map((order) => (
            <div
              key={order.id}
              className="flex mb-2 justify-between border-b p-4 bg-white border-gray-300"
            >
              <div className="flex  flex-col items-center p-4">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-40 h-40 object-cover rounded mb-4"
                />
              </div>

              <div className="ml-1 p-3 top-16">
                <h3 className="text-lg font-thin">{order.name}</h3>
                <div className="top-80">
                  <p className="font-medium text-lg mb-2">
                    ₹{order.price.toFixed(2)}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="bg-gray-100  text-black px-4 py-2 rounded shadow"
                      onClick={() => {
                        let items = cartItems.filter(
                          (item) => item.id !== order.id
                        );
                        setCartItems(items);
                      }}
                    >
                      Remove
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-6 border-t border-gray-200">
        <h2 className="text-lg font-medium mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <p>Subtotal</p>
          <p>₹{calculateTotal()}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Shipping</p>
          <p>₹5.00</p>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <p>Total</p>
          <p>₹{(parseFloat(calculateTotal()) + 5).toFixed(2)}</p>
        </div>
        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded shadow">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
