import { useState, useEffect } from "react";
import { FOOD_URL } from "../constants";
import Card from "./Card";
import { CardShimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import FilterComponent from "./FilterComponent";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(FOOD_URL);
    const json = await data.json();

    setRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return restaurants.length <= 0 ? (
    <CardShimmer />
  ) : (
    <>
      <FilterComponent
        searchText={searchText}
        setFilterRestaurants={setFilterRestaurants}
        restaurants={restaurants}
        setSearchText={setSearchText}
        filterRestaurants={filterRestaurants}
      />
      <div className="flex flex-wrap w-[90%] m-auto">
        {filterRestaurants.map((restaurantData) => {
          return (
            <Link
              to={"/restaurant/" + restaurantData?.info?.id}
              key={restaurantData?.info?.id}
            >
              <Card restaurantData={restaurantData} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
