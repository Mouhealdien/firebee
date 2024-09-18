import check from "../assets/help/check.png";

const HelpSentence = ({ title }) => {
  return (
    <p className="flex flex-row justify-center items-center gap-5 text-[18px] md:text-[30px] max-w-[300px] md:max-w-full ">
      <img className="w-8 " src={check} />
      {title}
    </p>
  );
};

export default HelpSentence;
