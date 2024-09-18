import banner from "../assets/banner.png";
import Container from "./Container";
const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center lg:flex-row pt-5 lg:justify-between gap-10 items-center pb-20">
        <img className="w-60" src={banner} />
        <div className="flex flex-col">
          <h2 className="text-[36px] text-center lg:text-left md:text-[48px] mb-8">
            30 Day Money Back Guarantee
          </h2>
          <p className=" text-[18px]  md:text-[24px]  leading-8">
            At Firebee we believe in building quality products that actually
            work. Firebee and its partners have invested over $85 million in
            research and development to create the highest quality wearable for
            customers to enjoy. If for any reason if you are not satisfied with
            your Firebee headband we will happily refund your purchase.{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
