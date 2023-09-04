import { useState, useEffect } from "react";
import { FOOD_URL } from "../constants";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FOOD_URL);
    const json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap w-[90%] m-auto">
      {restaurants.map((restaurantData) => {
        return <Card restaurantData={restaurantData} />;
      })}
    </div>
  );
};

export default Body;
