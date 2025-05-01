"use client";
import React, { Suspense } from "react";
import Id from "./id";

const Exhibition = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Id />
    </Suspense>
  );
};

export default Exhibition;