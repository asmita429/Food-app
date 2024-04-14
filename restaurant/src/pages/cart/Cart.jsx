import React, { useContext } from "react";
import { data } from "../../data/data";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-bold">Your cart Items</h1>
      </div>
      <div className="flex flex-col items-center justify-between flex-wrap w-auto ">
        {data.map((product, idx) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={idx} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="flex flex-col items-center justify-between flex-wrap w-auto">
          <p>Subtotal: {totalAmount}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-emerald-400 rounded-xl min-w-20 p-2 m-2 hover:bg-gray-900 hover:text-white cursor-pointer"
          >
            Continue
          </button>
          <button className="bg-emerald-400 rounded-xl min-w-20 p-2 m-2 hover:bg-gray-900 hover:text-white cursor-pointer">
            CheckOut
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl text-center mt-2">
            "Your current Cart is empty"
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-emerald-400 rounded-xl min-w-20 p-2 m-2 hover:bg-gray-900 hover:text-white cursor-pointer"
          >
            GO back
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
