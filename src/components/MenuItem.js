import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
const MenuItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => dispatch(addItem(item));
  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center w-6/12 m-3 p-3"
        >
          <div className="w-[60%]">
            <p>{item.card.info?.isVeg ? " 🟢 Veg" : " 🔴 Non-Veg"}</p>
            <p className="font-semibold text-xl">{item.card.info?.name}</p>

            <p className="font-light ">{item.card.info?.description}</p>
            <p className="font-medium text-lg">
              ₹{" "}
              {item.card.info?.price / 100 ||
                item.card.info?.defaultPrice / 100}
            </p>
          </div>
          <div className="flex flex-col justify-between item.card.infos-center ">
            <img
              src={MENU_IMG_URL + (item.card.info?.imageId || null)}
              alt={"REACT FOOD " + item.card.info?.name}
              className="w-40 h-40 rounded-lg"
            />
            <button
              className="border-white bg-red-400 border-solid border-2 rounded-md p-2 m-2"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
