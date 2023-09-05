import { useState, useEffect } from "react";
import { FOOD_URL } from "../constants";
import Card from "./Card";
import { CardShimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FOOD_URL);
    const json = await data.json();

    setRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return restaurants.length === 0 ? (
    <CardShimmer />
  ) : (
    <div className="flex flex-wrap w-[90%] m-auto">
      {restaurants.map((restaurantData) => {
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
  );
};

export default Body;
