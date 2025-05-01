import FetchFrames from "@/components/fetchFrames";
import { getAllFrames } from "@/firebase/functions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Cat = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("cat");
  const [frames, setFrames] = useState([]);

  const renderFrames = async () => {
    try {
      const framesData = await getAllFrames();
      const filteredFrames = framesData.filter(
        (item) => category === item.category
      );
      setFrames(filteredFrames);
    } catch (error) {
      console.error("Error fetching frames:", error);
    }
  };

  useEffect(() => {
    renderFrames();
  }, [category]);

  return (
    <div>
      <FetchFrames data={frames} />
    </div>
  );
};

export default Cat;
