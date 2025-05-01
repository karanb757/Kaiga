"use client";
import { getTicketByEmailAndId } from "@/firebase/functions";
import { Item } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [found, setFound] = useState(false);
  const [data, setData] = useState(null);
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };
  useEffect(() => {
    const email = params.ticket[0];
    const id = params.ticket[1];

    getTicketByEmailAndId(email, id).then((data) => {
      console.log(data);
      setData(data);
      setFound(true);
    });
  }, []);

  return (
    <div>
      {found && data !== null ? (
        <div>
          <p>Verified</p>
          <img src={data.purchaseData.imageURL} />
          <p>Issued to: {data.userEmail}</p>
          <p>on {formatTimestamp(data.timestamp)}</p>
          <p>Ttile: {data.purchaseData.title}</p>
          <p>Price: {data.purchaseData.price}</p>
          <p>Description: {data.purchaseData.description}</p>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};

export default Page;
