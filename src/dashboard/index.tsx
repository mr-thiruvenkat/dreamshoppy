import React, { useEffect } from "react";
import Navbar from "../components/navbar.tsx";
import Products from "../products/index.tsx";
import Constants from "../constants/Constants.ts";
import axios from "axios";

const Dashboard = () => {
  const [categories, setCategories] = React.useState([
    { name: "All", categoryid: 0 },
    { name: "Kurtis", categoryid: 1 },
    { name: "Sweatshirt", categoryid: 2 },
    { name: "Denims", categoryid: 3 },
    { name: "T-Shirt", categoryid: 4 },
    { name: "Wollen Dress", categoryid: 5 },
    { name: "Hoodie", categoryid: 6 },
  ]);
  const [price, setPrices] = React.useState([
    { name: "All", priceid: 0 },
    { name: "0-500", priceid: 1 },
    { name: "500-1000", priceid: 2 },
    { name: "1000-2000", priceid: 3 },
    { name: "2000-5000", priceid: 4 },
  ]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedPrice, setPricesCategory] = React.useState("All");

  useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories(){
    try {
      let url = `${Constants.BASE_URL}${Constants.getAllCategories}`;
      const response = await axios.get(url);
      response.data.unshift({ name: "All" });
      setSelectedCategory(response.data[0].name);
      setCategories(response.data);
    } catch (error) {}
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPricesCategory(event.target.value);
  };

  return (
    <div className="sticky bg-gradient-to-r from-red-300 to-blue-200 bg-red-100 min-h-screen items-center min-w-fit">
      <Navbar />
      <div className="bg-local container py-4">
        {/* Category Filter Dropdown */}
        <div className="flex gap-10 mb-4 ml-10">
          <div>
            <h3 className="font-bold text-white">Category</h3>
            <select
              className="mt-1 px-6 py-1 border rounded shadow focus:outline-none"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option key={category.categoryid} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="font-bold text-white">Price</h3>
            <select
              className="mt-1 px-6 py-1 border rounded shadow focus:outline-none"
              value={selectedPrice}
              onChange={handlePriceChange}
            >
              {price.map((prices) => (
                <option key={prices.priceid} value={prices.name}>
                  {prices.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Dashboard;
