"use client";
import BuyProduct from "@/components/razorPay/buyProduct";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RazorPay = () => {
  const payment = useSelector((state) => state.payment.payment);
  const [loading, setLoading] = useState(true);
  console.log(payment)

  useEffect(() => {
    setLoading(false); // Set loading to false once component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator during initial render
  }

  return (
    <>
      {payment && (
        <BuyProduct
          paymentFor={payment?.paymentFor}
          price={payment?.price}
          userId={payment?.us}
          productId={payment.productId}
        />
      )}
    </>
  );
};

export default RazorPay;