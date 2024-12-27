import React from "react";
import Navbar from "../../components/navbar.tsx";

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      image:
        "https://kapdavilla.com/images/product/sub_images/2021/03/global-local-landscape-embroidery-rayon-kurti-designs-1-2021-03-13_13_32_03.jpeg",
      name: "Red Dress",
      status: "Delivered",
      deliveredDate: "2024-12-20",
      address: "123 Fashion Street, New York, NY",
      price: 749,
    },
    {
      id: 2,
      image:
        "https://media.fashonation.com/wp-content/uploads/2024/06/19113309/TheEverygirl-0120-CapsuleFashion-TheEverygirl-0120-CapsuleFashion-Featured-Horizonal-Image.jpg",
      name: "Blue Handbag",
      status: "Shipped",
      deliveredDate: null,
      address: "456 Style Avenue, Los Angeles, CA",
      price: 499,
    },
  ];

  const getStatusStepper = (status) => {
    const steps = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];
    return steps.map((step, index) => (
      <div className="flex items-center justify-items-center">
        <div key={index} className="items-center py-5 pr-5">
          <div
            className={`w-4 h-4 self-center rounded-full ${
              steps.indexOf(status) >= index ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
          {index <= steps.length - 1 && (
            <div className={`h-1 flex-1 py-2`}>
              <h3>{steps[index]}</h3>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="sticky bg-gradient-to-r from-red-300 to-blue-200 bg-red-100 min-h-screen items-center min-w-fit">
      <Navbar />

      <div className="min-h-screen p-6">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl text-white font-semibold">Order History</h1>
        </div>

        <div className="p-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex p-4 items-start gap-2 mb-2 border-b bg-white border-gray-300 pb-4"
            >
              <img
                src={order.image}
                alt={order.name}
                className="w-40 h-40 object-cover rounded"
              />
              <div className="flex-1 ml-10">
                <h2 className="text-lg font-medium">{order.name}</h2>
                <div className="flex items-center mt-2 gap-2">
                  {getStatusStepper(order.status)}
                </div>
                <p className="text-gray-500 mt-2">
                  {order.status === "Delivered"
                    ? `Delivered on ${order.deliveredDate}`
                    : `Expected delivery soon`}
                </p>
                <p className="text-gray-500 mt-4">Address: {order.address}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-lg mb-2">
                  ₹{order.price.toFixed(2)}
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
