import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, name, price, image } = props.data;

  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="w-full h-auto m-1 bg-gray-200 rounded-2xl">
      <div className="w-full flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
      </div>
      <div className="text-center m-3 text-orange-500 font-bold">
        <p>{name}</p>
        <p>${price}</p>
        <div className="flex justify-center items-center p-3 gap-2 text-black font-bold">
          <button
            onClick={() => removeFromCart(id)}
            className="border-none bg-orange-300 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300 hover:bg-orange-500"
          >
            -
          </button>
          <input
            value={cartItems[id]}
            className="w-8 text-center"
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            onClick={() => addToCart(id)}
            className="border-none bg-orange-300 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300 hover:bg-orange-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
