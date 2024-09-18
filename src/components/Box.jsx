import Container from "./Container";
import product from "../assets/product.png";
import check from "../assets/help/check.png";
import b1 from "../assets/box/b1.png";
import b2 from "../assets/box/b2.png";
import b3 from "../assets/box/b3.png";
import b4 from "../assets/box/b4.png";
import b5 from "../assets/box/b5.png";
import b6 from "../assets/box/b6.png";
const Box = () => {
  const arr = [b1, b2, b3, b4, b5, b6];
  const sentences = ["1 Firebeeheadband", "1 Charging cable", "1 User manual"];
  return (
    <Container customeStyle={"pb-10"}>
      <div className="flex pt-10 flex-col text-center justify-center items-center ">
        <h2 className=" text-[36px] md:text-[48px]">What`s in the box?</h2>
      </div>

      <div className=" flex flex-col gap-5 ">
        <div className="flex justify-center items-center">
          <img src={product} />
        </div>

        <h6 className=" uppercase text-center text-[18px] font-bold">
          Featured on
        </h6>
        <div className="flex flex-row flex-wrap justify-center gap-5 items-center ">
          {arr.map((e, i) => {
            return <img src={e} key={i} />;
          })}
        </div>

        <div className="flex flex-col sm:flex-row  justify-start items-start sm:justify-center sm:items-center pt-5 gap-5  border-t-2  border-gray-200">
          {sentences.map((e, i) => {
            return (
              <p
                key={i}
                className="flex flex-row justify-center items-center gap-5 text-[18px] lg:text-[30px]  "
              >
                <img className="w-8 " src={check} />
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Box;
