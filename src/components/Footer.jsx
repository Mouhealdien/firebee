import Container from "./Container";
import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";
import FooterLogo from "./FooterLogo";
const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "linear-gradient(90deg, #8BF2B5 0%, #35C8EB 100%)",
          height: "1vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <div className="bg-[#12151A]">
        <Container>
          <div className="flex-row  flex justify-start gap-10 sm:justify-between items-center flex-wrap max-w-3xl pt-5 text-white">
            <div className="flex-col flex mb-3 ">
              <h2 className="text-[24px] mb-4"> About</h2>
              <div className="flex-col flex gap-2 text-[18px]">
                <p>Home</p>
                <p>Proudct</p>
              </div>
            </div>

            <div className="flex-col flex mb-3">
              <h2 className="text-[24px] mb-4"> Support</h2>
              <div className="flex gap-2 flex-col text-[18px]">
                <p>Activate</p>
                <p>Login</p>
              </div>
            </div>

            <div className="flex-col flex mb-5 ">
              <h2 className="text-[24px] mb-6"> Find Us On</h2>
              <div className="flex flex-row gap-4 text-[18px]">
                <FaYoutube size={30} />
                <FaTwitter size={30} />
                <FaFacebookF size={30} />
                <FaInstagram size={30} />
                <FaPinterestP size={30} />
              </div>
            </div>
          </div>
        </Container>
        <hr />
        <div className="pt-5   ">
          <Container
            customeStyle={
              " bg-[url('./assets/footer.png')] bg-center bg-cover "
            }
          >
            <div className="flex flex-row justify-between items-center  ">
              <FooterLogo />
              <p className="text-[#A4A4A5] text-[18px] hidden sm:block ">
                Privacy Policy Terms of Service
              </p>
            </div>
            <p className="text-[#A4A4A5] text-[18px] pt-4">
              Copyright © 2020 Firebee Technologies, Inc. All rights reserved.
            </p>
            <p className="text-[#A4A4A5] text-[14px] py-6 lg:max-w-3xl ">
              The statements on this page have not been evaluated by the FDA.
              This product is not intended to diagnose, treat, cure, or prevent
              any disease.
            </p>
            <p className="text-[#A4A4A5] text-[18px] block sm:hidden pb-4 ">
              Privacy Policy Terms of Service
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
