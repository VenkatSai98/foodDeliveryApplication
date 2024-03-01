import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemsList = ({ itemNames }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {itemNames?.map((items) => (
        <div className="mb-3 cursor-pointer border-b-2 flex justify-between items-center text-left" data-testid="cartItems">
          <div className="mb-5">
            <h4 className="mb-2">{items?.card?.info?.name}</h4>
            <h6>
              ₹{" "}
              {items?.card?.info?.price
                ? items?.card?.info?.price / 100
                : items?.card?.info?.defaultPrice / 100}{" "}
              /-
            </h6>
          </div>
          <div className="relative">
            <img
              className="w-32 mb-5 rounded-lg"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                items?.card?.info?.imageId
              }
              alt=""
            />
            <button
              className="text-white absolute bottom-5 border-slate-500 border rounded-lg w-20 bg-black"
              onClick={() => handleAdd(items)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemsList;
