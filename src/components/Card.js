import { IMG_URL } from "../constants";

const Card = ({ restaurantData }) => {
  const {
    id,
    name,
    avgRating,
    cuisines,
    areaName,
    locality,
    cloudinaryImageId,
  } = restaurantData?.info;
  return (
    <div key={id} className="w-[320px] rounded-md p-4 m-2">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={"REACT FOOD " + name}
        className="w-[100%] h-48 rounded-lg"
      />
      <h1 className="font-semibold text-3xl">{name}</h1>
      <h2 className="font-light text-sm">
        {" "}
        {cuisines.map((i, index) => (
          <span key={index} className="first:px-0 px-1">
            {" "}
            {i + " "}
          </span>
        ))}
      </h2>
      <div className="flex justify-between">
        <p>{"⭐" + avgRating}</p>
        <p className="font-extralight">
          {areaName}, {locality}
        </p>
      </div>
    </div>
  );
};

export default Card;
