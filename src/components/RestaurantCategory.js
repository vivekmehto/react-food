import { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setShowIndex();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && isActive && <MenuItem items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
