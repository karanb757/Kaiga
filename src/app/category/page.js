"use client";
import CategoryPage from "@/modules/category";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import Cat from "./category";

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("cat");

  return <Suspense fallback={<div>Loading...</div>}>
    {category ? <Cat /> :<CategoryPage /> }
    </Suspense>; 
};

export default Page;
