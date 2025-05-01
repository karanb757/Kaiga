"use client";
import Exhibiton from "@/components/exhibition";
import React, { Suspense } from "react";

const Page = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <Exhibiton />
  </Suspense>;
};

export default Page;
