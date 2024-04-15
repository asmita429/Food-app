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
    <div className="max-w-[1640px] mx-auto h-full p-4">
      <div className="text-4xl text-center font-bold text-orange-500">
        Your cart Items
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-6 m-auto">
        {data.map((product, idx) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={idx} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="text-orange-500 font-bold m-4 text-center">
          <p className="text-2xl m-2">Your Subtotal is: ${totalAmount}</p>
          <div className="flex items-center justify-center flex-wrap w-auto">
            <button
              onClick={() => navigate("/")}
              className="bg-gray-300 border-none rounded-xl min-w-20 py-2 m-4 hover:bg-gray-900 hover:text-white cursor-pointer"
            >
              Continue
            </button>
            <button className="bg-gray-300 border-none rounded-xl min-w-20 py-2 m-4 hover:bg-gray-900 hover:text-white cursor-pointer">
              CheckOut
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-4 mt-8">
          <div className="text-2xl text-center font-bold m-2 p-2">
            "Your Cart is empty, Please select Items"
          </div>
          <button
            onClick={() => navigate("/")}
            className="border-none bg-orange-400 rounded-xl min-w-20 py-2 m-2 hover:bg-gray-900 hover:text-white cursor-pointer"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
