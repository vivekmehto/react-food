import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IMG_URL,
  MENU_API,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";
import { MenuShimmer } from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const Menu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [categories, setCategories] = useState([]);

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });

      const categories =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setCategories(categories);
      setRestaurantMenu(uniqueMenuItems);
    } catch (error) {
      setRestaurantMenu([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  const getBgColor = () => {
    if (restaurant.avgRating >= 3.5) {
      return "green";
    } else {
      return "red";
    }
  };

  return restaurant === null ? (
    <MenuShimmer />
  ) : (
    <div className="">
      <div className="bg-gray-700 flex justify-center items-center">
        <img
          src={IMG_URL + restaurant?.cloudinaryImageId}
          alt={"REACT FOOD " + restaurant?.name}
          className="w-72 h-80 rounded-2xl m-4 p-4"
        />
        <div className="leading-8 text-white">
          <h1 className="font-semibold text-4xl">{restaurant?.name}</h1>
          <div
            style={{ background: getBgColor() }}
            className="border-gray-500 border-solid border-1 my-2 w-max rounded-md px-1 text-white "
          >
            ☆ {restaurant?.avgRating}
          </div>
          {restaurant?.cuisines.map((i) => (
            <span className="font-light" key={i}>
              {" "}
              {i}
            </span>
          ))}

          <p className="text-lg">
            {restaurant?.availabilityServiceabilityMessage}
          </p>
          <p className="text-lg">{restaurant?.costForTwoMessage}</p>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Menu;
