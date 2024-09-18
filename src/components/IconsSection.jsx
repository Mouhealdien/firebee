import g1 from "../assets/gallery/g1.svg";
import g2 from "../assets/gallery/g2.svg";
import g3 from "../assets/gallery/g3.svg";
import g4 from "../assets/gallery/g4.svg";
import GalleryCard from "./GalleryCard";
const IconsSection = ({ customeStyle }) => {
  const icons = [
    { icon: g1, title: "30-day Money-backGuarantee" },
    { icon: g2, title: "Signal Catalogue Updates Included" },
    { icon: g4, title: "Free Shipping within USA" },

    { icon: g3, title: "Customer Support via E-mail, Phone, and Chat" },
  ];
  return (
    <div className={`flex flex-row pt-10  justify-evenly ${customeStyle}`}>
      <div className="flex flex-col gap-8 justify-start items-start">
        {icons.map((e, i) => {
          return i < 2 && <GalleryCard key={i} icon={e.icon} title={e.title} />;
        })}
      </div>

      <div className="flex flex-col gap-8 justify-start items-start">
        {icons.map((e, i) => {
          return (
            i >= 2 && <GalleryCard key={i} icon={e.icon} title={e.title} />
          );
        })}
      </div>
    </div>
  );
};

export default IconsSection;
