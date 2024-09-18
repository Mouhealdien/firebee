import Container from "./Container";
import SignalCard from "./SignalCard";
import Heart from "./Heart";
import s1 from "../assets/signals/s1.png";
import s2 from "../assets/signals/s2.png";
import s3 from "../assets/signals/s3.png";
import s4 from "../assets/signals/s4.png";
import s5 from "../assets/signals/s5.png";
import s6 from "../assets/signals/s6.png";
import s7 from "../assets/signals/s7.png";
import s8 from "../assets/signals/s8.png";
const Signals = () => {
  const arr = [s1, s2, s3, s6, s4, s5, s7, s8];
  return (
    <div className="mb-32">
      <Container>
        <div className="-top-10 absolute hidden lg:block  -z-10">
          <Heart />
        </div>
        <div className="relative overflow-hidden">
          <div className="flex pt-10 flex-col justify-center items-center">
            <h2 className="text-[36px] md:text-[48px]">Firebee Signals</h2>
            <h3 className="text-[18px] md:text-[24px]">
              A Signal for every situation
            </h3>
          </div>

          <div className=" flex flex-wrap sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center  ">
            {arr.map((e, i) => {
              return <SignalCard key={i} image={e} />;
            })}
          </div>
        </div>
        <div className=" bottom-[-1rem]  xl:bottom-[-5rem] right-0 absolute hidden lg:block  -z-10">
          <Heart />
        </div>
      </Container>
    </div>
  );
};

export default Signals;
