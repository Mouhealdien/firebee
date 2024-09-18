import check from "../assets/help/check.png";
const OfferCard = ({ title, price, isButton, p }) => {
  const sentences = [
    "Access to 7 signals (and future signal releases)",
    "Firebee Headband",
    "$19/month membership, first 2 months free",
  ];
  return (
    <div className="relative p-4 max-w-[700px] rounded-lg bg-white">
      <div className="absolute inset-0 rounded-[9px] p-[2px] bg-gradient-to-r from-[#275FD0] to-[#A34D9F]  ">
        <div className="w-full h-full bg-white rounded-lg "></div>
      </div>
      <div className="flex flex-col justify-start items-start lg:flex-row lg:justify-between  lg:items-center relative mb-3 ">
        <h2 className="text-[24px] font-bold">{title}</h2>
        <p className="text-[24px]">{price}</p>
      </div>
      {isButton && (
        <button
          style={{
            background: "linear-gradient(90deg, #A34D9F 0%, #275FD0 100%)",
          }}
          className="relative text-white rounded-full px-8 py-1 text-[16px]  "
        >
          MOST POPULAR KIT
        </button>
      )}
      <div className="flex  relative flex-col justify-start items-start  pt-5 gap-5 ">
        {sentences.map((e, i) => {
          return (
            <p
              key={i}
              className="flex flex-row justify-center items-center gap-2 text-[18px]   "
            >
              <img className="w-7 " src={check} />
              {e}
            </p>
          );
        })}
      </div>
      {p}
    </div>
  );
};

export default OfferCard;
