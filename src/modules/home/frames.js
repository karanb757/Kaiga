import FetchFrames from "@/components/fetchFrames";
import { getAllFrames } from "@/firebase/functions";
import { setFrames } from "@/redux/slices/frameSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Frames = () => {
  const frames = useSelector((state) => state.frames.frames);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllFrames().then((frame) => dispatch(setFrames(frame)));
  }, []);
  
  return (
    <div className=" flex flex-col items-center justify-center mt-12 h-auto">
      <p className=" text-2xl font-semibold hover:underline cursor-pointer mb-12 ">
        Recent Frames
      </p>

      {/* Frames */}
      <FetchFrames data={frames?.slice(0, 3)} />
    </div>
  );
};

export default Frames;
