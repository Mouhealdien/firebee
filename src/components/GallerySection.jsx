import Container from "./Container";
import Gallery from "./Gallery";
import GallerySvg from "./GallerySvg";
import IconsSection from "./IconsSection";
import Offers from "./Offers";

const GallerySection = () => {
  return (
    <Container customeStyle={"bg-[#F6F6F6]"}>
      <div className=" flex  flex-col pb-5 lg:flex-row gap-5 justify-center items-center ">
        <div className="flex-1 ">
          <GallerySvg />
          <Gallery />
          <IconsSection customeStyle={"hidden lg:flex"} />
        </div>
        <div className="flex-1">
          <Offers />
        </div>

        <IconsSection customeStyle={" flex lg:hidden"} />
      </div>
    </Container>
  );
};

export default GallerySection;
