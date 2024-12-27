import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Yellow desgined kurtis with Set - All sizes",
      price: 649,
      image: require("../images/kurtis.png"),
    },
    {
      id: 2,
      name: "Grey Hoodi wollen dress for winter - M,XL",
      price: 1089.99,
      image: require("../images/wollen.png"),
    },
    {
      id: 3,
      name: "High Weist denim jean with ice blue color turned pant - All sizes",
      price: 769.99,
      image: require("../images/denims.png"),
    },
    {
      id: 4,
      name: "Women Full Sleeve Solid Sweatshirt",
      price: 2499.99,
      image: require("../images/sweatshirt.png"),
    },
    {
      id: 5,
      name: "Women Printed Round Neck Pure Cotton Black T-Shirt",
      price: 29.99,
      image: require("../images/blacktshirt.png"),
    },
    {
      id: 2,
      name: "Grey Hoodi wollen dress for winter - M,XL",
      price: 1089.99,
      image: require("../images/wollen.png"),
    },
    {
      id: 3,
      name: "High Weist denim jean with ice blue color turned pant - All sizes",
      price: 769.99,
      image: require("../images/denims.png"),
    },
    {
      id: 5,
      name: "Women Printed Round Neck Pure Cotton Black T-Shirt",
      price: 29.99,
      image: require("../images/blacktshirt.png"),
    },
    {
      id: 10,
      name: "Women Printed Round Neck Pure Cotton Black T-Shirt",
      price: 29.99,
      image: require("../images/blacktshirt.png"),
    },
    {
      id: 1,
      name: "Yellow desgined kurtis with Set - All sizes",
      price: 649,
      image: require("../images/kurtis.png"),
    },
    {
      id: 4,
      name: "Women Full Sleeve Solid Sweatshirt",
      price: 2499.99,
      image: require("../images/sweatshirt.png"),
    },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const handleBuyNow = (product) => {
    console.log("Buy now:", product);
  };

  return (
    <div className="bg-scroll gap-3 min-h-screen">
      <div className="max-w-full ml-10">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 opacity-90 rounded shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded mb-4"
              />
              <h2 className="text-sm font-normal text- mb-2 ">
                {product.name}
              </h2>
              <p className="text-gray-500 font-medium mb-4">
                ₹{product.price.toFixed(2)}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-gray-100 border border-red-300 hover:bg-red-500 hover:text-white text-red-500 px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
