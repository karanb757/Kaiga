import { getAllTicket } from "@/firebase/functions";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "@/assets/img/emptyCart.svg";
import TicketItem from "./ticketItem";

const TicketContainer = () => {
  const [tickets, setTickets] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    getAllTicket(user.email).then((data) => setTickets(data));
  }, []);

  return (
    <div>
      {" "}
      {tickets && tickets.length > 0 ? (
        <div className=" flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-full py-10 flex flex-col gap-3 scrollbar-none">
            {/* cart Item */}
            {tickets &&
              tickets.length > 0 &&
              tickets.map((item) => <TicketItem key={item.id} item={item} />)}
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

export default TicketContainer;
