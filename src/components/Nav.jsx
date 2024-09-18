import { useState } from "react";
import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import { IoPersonCircleSharp } from "react-icons/io5";
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 ">
      <div className=" flex flex-wrap items-center justify-between mx-2 p-4">
        <div className="flex  justify-center items-center gap-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <NavLogo />
          </a>

          <div
            className={`items-center justify-between w-full hidden md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <NavMenu />
          </div>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white mx-1  bg-[#07C961] transition-all duration-300 hover:bg-[#07c962aa]  font-medium rounded-full text-sm px-6 py-3 text-center "
          >
            Buy Now
          </button>
          <IoPersonCircleSharp
            className=" hidden md:block"
            color="#4B93D0"
            size={44}
          />
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 transition-all duration-300 hover:text-white rounded-lg md:hidden hover:bg-[#07C961]    "
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:hidden  md:w-auto md:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
