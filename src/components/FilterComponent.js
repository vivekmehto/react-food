import React from "react";
import { FaSearch } from "react-icons/fa";
const FilterComponent = ({
  searchText,
  setSearchText,
  setFilterRestaurants,
  restaurants,
  filterRestaurants,
}) => {
  return (
    <div className="w-[70%] m-auto flex  justify-between">
      <div className="flex items-center justify-center  ">
        <input
          className="border border-orange-400 rounded-md p-3 h-8 m-4 w-60"
          type="text"
          placeholder="Burgers....."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filterRestaurants = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            if (searchText.length <= 0) {
              setFilterRestaurants(restaurants);
            }
            setFilterRestaurants(filterRestaurants);
          }}
        />
        <FaSearch className="font-extralight  h-6" />
      </div>
      <div className="flex text-xs m-4w">
        <button
          className="mx-4"
          onClick={() => {
            const filterList = filterRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            return setFilterRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button onClick={() => setFilterRestaurants(restaurants)}>Reset</button>
      </div>
    </div>
  );
};

export default FilterComponent;
