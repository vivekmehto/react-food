import React from "react";
import { MENU_IMG_URL } from "../constants";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Add Items to your cart</p>
      ) : (
        cartItems.map((item) => (
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
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Cart;
