import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import EmptyCart from "@/assets/img/emptyCart.svg";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";

const CartContainer = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.user);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full  flex flex-col">
      {/* <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <div>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <p className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base">
          Clear <RiRefreshFill />
        </p>
      </div> */}

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className=" flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-full px-6 py-10 flex flex-col gap-3 scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">RS. {totalAmount}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">RS. 50</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-red-500 text-xl font-semibold">Total</p>
              <p className="text-red-500 text-xl font-semibold">
                RS.{totalAmount + 50}
              </p>
            </div>

            {/* {user ? (
              <Button>Check Out</Button>
            ) : (
              <Button>Login to check out</Button>
            )} */}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
