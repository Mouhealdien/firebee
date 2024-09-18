import HalfStar from "./HalfStar";
import OfferCard from "./OfferCard";
import Star from "./Star";
import c1 from "../assets/cards/c1.svg";
import c2 from "../assets/cards/c2.svg";
import c3 from "../assets/cards/c3.svg";
import c4 from "../assets/cards/c4.svg";
import c5 from "../assets/cards/c5.svg";
import c6 from "../assets/cards/c6.svg";
import { FaArrowRight } from "react-icons/fa";
const Offers = () => {
  const cards = [c1, c2, c3, c4, c5, c6];
  return (
    <div className="py-6">
      <div className="pb-5">
        <h2 className="text-[36px] font-bold">Firebee Headband</h2>
        <p className="text-[18px] flex flex-row items-baseline gap-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <HalfStar />
          276 reviews
        </p>
        <p className="text-[16px]">
          Order today and receive your Firebee by June 15th, 2021
        </p>
      </div>

      <div className=" flex flex-col justify-center items-center gap-5">
        <OfferCard
          title={"Firebee Starter Kit"}
          price={
            <div className="flex flex-row gap-2">
              <div className="flex relative items-center justify-center">
                <span className="absolute top-[1rem] inset-0 bg-red-500 h-[2px] -rotate-12"></span>
                <span className="relative">$999.00</span>
              </div>
              <p className="relative">$379.00</p>
            </div>
          }
          isButton={true}
          p={
            <p className=" relative text-[16px] pt-3">
              The starter kit is the most affordable way to get started with
              Firebee. Pay $299 for the Firebee headband and access to the
              entire Firebee Signal Catalogue for only $19 a month.{" "}
              <span className="font-bold">
                Membership can be cancelled anytime. No contracts. Satisfaction
                guaranteed.
              </span>
            </p>
          }
        />

        <OfferCard
          title={"Founder’s Kit"}
          price={"$799.00"}
          p={
            <p className=" relative text-[16px] pt-3">
              The Founders kit allows you to get the Firebee headband and
              lifetime access to the entire Firebee Signal Catalogue for a
              one-time payment. The Founders is kit can be paid through Affirm
              allowing customers to make small payments of $73 a month.
            </p>
          }
        />
        <button className="py-3 px-10 bg-[#07C961] transition-all duration-300 hover:bg-[#07c962aa] text-white flex flex-row gap-3 justify-center items-center rounded-full w-[90%] text-center">
          {" "}
          Buy Now <FaArrowRight />
        </button>
      </div>

      <div className="flex flex-row gap-2 justify-center items-center pt-5">
        {cards.map((e, i) => (
          <img className="max-w-12 sm:max-w-20" src={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
