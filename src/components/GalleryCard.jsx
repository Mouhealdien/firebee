import React from "react";

const GalleryCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-2 items-center">
      <img src={icon} alt="" />
      <p className="text-[18px] max-w-48 text-center ">{title}</p>
    </div>
  );
};

export default GalleryCard;
