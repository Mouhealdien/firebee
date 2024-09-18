import Container from "./Container";
import help from "../assets/help/help.png";
import HelpSentence from "./HelpSentence";

const Help = () => {
  const senteces = [
    {
      title: (
        <p className=" ">
          Can’t sleep? Turn on the
          <span className="bg-gradient-to-r mx-1 from-[#2E034B] via-[#002182] to-[#2E034B] text-transparent bg-clip-text inline-block font-bold">
            deep sleep
          </span>
          signal
        </p>
      ),
    },
    {
      title: (
        <p className="">
          Feeling tired? Turn on the alert
          <span className="bg-gradient-to-r from-[#FF225E] to-[#9D2AC6] mx-1 text-transparent bg-clip-text inline-block font-bold">
            alert
          </span>
          signal
        </p>
      ),
    },
    {
      title: (
        <p className="">
          Feeling anxious? Turn on the
          <span className="bg-gradient-to-r from-[#8BF2B5] to-[#35C8EB] mx-1 text-transparent bg-clip-text inline-block font-bold">
            calm
          </span>
          signal
        </p>
      ),
    },
    {
      title: (
        <p className="">
          Feeling unproductive? Turn on the
          <span className="bg-gradient-to-r from-[#E280DA] to-[#6694EF] mx-1 text-transparent bg-clip-text inline-block font-bold">
            focus
          </span>
          signal
        </p>
      ),
    },
    {
      title: (
        <p className="">
          Feeling blue? Turn on the happy
          <span className=" bg-gradient-to-r from-[#A34D9F] to-[#275FD0] mx-1 text-transparent bg-clip-text inline-block font-bold">
            happy
          </span>
          signal
        </p>
      ),
    },
  ];
  return (
    <Container customeStyle={"bg-[#FBFCFB]"}>
      <div className="lg:flex pt-10 flex-col hidden  justify-center items-center">
        <h2 className="text-[72px] text-center">
          What will Firebee do for me?
        </h2>
        <h3 className="text-[24px] text-center">
          Firebee will help you gently nudge yourself into a different mental
          state
        </h3>
      </div>
      <div className=" flex flex-col lg:flex-row justify-center items-center">
        <img src={help} />
        <div className="lg:hidden pt-10 flex-col flex  justify-center items-center">
          <h2 className="text-[36px] text-center">
            What will Firebee do for me?
          </h2>
          <h3 className="text-[18px] pb-10 text-center">
            Firebee will help you gently nudge yourself into a different mental
            state
          </h3>
        </div>
        <div className=" flex flex-col justify-center lg:justify-start items-center md:items-start gap-5">
          {senteces.map((e, i) => {
            return <HelpSentence title={e.title} key={i} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Help;
