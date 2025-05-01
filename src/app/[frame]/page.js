"use client";
import SingleProduct from "@/components/productComponent";
import { getFrameById } from "@/firebase/functions";
import React, { useEffect, useState } from "react";

const Page = ({ params: { frame } }) => {
  const [frameData, setFrameData] = useState({});
  useEffect(() => {
    getFrameById(frame).then((data) => setFrameData(data));
  }, []);

  return <><SingleProduct frameData={frameData} /></>;
};

export default Page;
