import { addItem, clearCart, updateQuantity } from "@/redux/slices/cartSlice";
import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.items);

  // console.log(cartItems);

  return (
    <div className=" w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-lg object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base font-semibold">{item?.title}</p>
        <p className="text-sm font-semibold">
          RS. {parseFloat(item?.price) * item?.quantity}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <div
          onClick={() => {
            if (item.quantity > 1) {
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              );
            }
          }}
        >
          <BiMinus className=" " />
        </div>

        <p className="w-5 h-5 rounded-sm bg-muted-foreground flex items-center justify-center text-background">
          {item.quantity}
        </p>

        <div onClick={() => dispatch(addItem(item))}>
          <BiPlus className="" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
