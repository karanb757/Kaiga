import React from "react";
import { Badge } from "./ui/badge";

const Header = () => {
  return (
    <div className="mb-20 flex flex-col gap-4">
      {" "}
      <div className="flex items-center justify-center">
        <Badge
          className={
            "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
          }
        >
          <p>🎉</p>
          <p>Discover Exhibitons that suits you</p>
        </Badge>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Book Now!
          <br className="hidden sm:inline" />
        </h1>
        {/* <h1 className="text-3xl mt-3 font-extrabold leading-tight tracking-tighter md:text-4xl text-center"></h1> */}
        <p className="max-w-[700px] text-lg text-muted-foreground text-center">
          Evolutionzing Exhibiton Booking system
        </p>
      </div>
    </div>
  );
};

export default Header;
