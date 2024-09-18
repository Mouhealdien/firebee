import React from "react";
import g1 from "../assets/gallery1.svg";
import g2 from "../assets/gallery2.svg";
const GallerySvg = () => {
  return (
    <div className="flex gap-5 absolute z-20 -top-1 lg:top-10">
      <img className="w-14 sm:w-20 md:w-28 lg:w-full" src={g2} alt="" />
      <img className="w-14 sm:w-20 md:w-28 lg:w-full" src={g1} alt="" />
    </div>
  );
};

export default GallerySvg;
