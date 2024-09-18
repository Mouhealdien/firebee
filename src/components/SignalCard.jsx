const SignalCard = ({ image }) => {
  return (
    <div className=" max-w-[420px] shadow-sm px-8 py-6 bg-[#FBFBFD] flex flex-col sm:flex-row gap-2 items-center sm:items-start justify-center">
      <img src={image} />
      <p className="text-[16px] md:text-[18px]">
        Discover your best sleep with responsive sleep journeys, overnight sleep
        tracking, and personalized insights.
      </p>
    </div>
  );
};

export default SignalCard;
