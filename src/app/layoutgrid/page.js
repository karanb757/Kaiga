'use client'
import { EditableLayoutGridDemo } from "@/components/editableLayoutGrid";
import { LayoutGridDemo } from "@/components/layoutGridDemo";
import React from "react";

const Page = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center min-h-screen">
      <div className="w-[45%]">
        <EditableLayoutGridDemo />
      </div>

      {/* <FetchFrames data={frames?.slice(0, 1)} purpose="show" /> */}
    </div>
  );
};

export default Page;
