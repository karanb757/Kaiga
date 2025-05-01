"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Buy = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      onClick={() => {
        makePayment({ productId: "example_ebook" });
      }}
      disabled={isLoading}
    >
      {isLoading ? "Processing..." : "Buy Now"}
    </Button>
  );
};

export default Buy;
