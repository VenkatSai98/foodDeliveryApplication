import React, {useState} from "react";
import MenuItemsList from "./MenuItemsList";
import { useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import TestProps from "./TestProps";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const listItems = useSelector((st) => st.todo.items);
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState();

  // const [cartItems, listItems] = [useSelector((store) => store.cart.items), useSelector((st) => st.todo.items)];

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  // const getAnswer = () => {
  //   let sum = 0
  //   for(i=0; i<5000000; i++) {
  //     sum+=i
  //   }
  //   setValue(sum)
  // }
  // const incrementCount = () => {
  //   setCount(count+1)
  // }

  let testObj = {
    name: "sai",
    age: 25
  }
  let testArr = [1, 5, 10]
  return (
    <div className="text-center m-5 p-5">
      {/* <h1>answer is: {value}</h1>
      <h1>count is: {count}</h1>
      <button className="border bg-black text-white font-bold mx-8" onClick={incrementCount}> count</button>
      <button className="border bg-black text-white font-bold mx-8" onClick={getAnswer}>Answer</button> */}
      <h1 className="text-2xl font-bold m-8">
        Cart Total-items({cartItems?.length})
      </h1>
      <div className="w-6/12 mx-auto">
        {cartItems.length > 0 && (
          <button
            className="border border-r-cyan-50 px-5 mb-8 rounded-lg"
            onClick={handleClearCart}
          >
            Clear All
          </button>
        )}
        <MenuItemsList itemNames={cartItems} />
        {cartItems.length > 0 && (
          <h1 className="text-end text-xl font-bold">
            Total price:{" "}
            {cartItems.reduce(
              (accumulator, priceRes) =>
                accumulator + priceRes.card.info.price / 100,
              0
            )}{" "}
            /-
          </h1>
        )}
        {listItems.map((list) => <h1>{list}</h1>)}
        {/* <TestProps  {...testArr}/> */}
      </div>
    </div>
  );
};

export default Cart;
