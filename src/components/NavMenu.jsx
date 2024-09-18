import { IoPersonCircleSharp } from "react-icons/io5";
const NavMenu = () => {
  const pages = ["How It Works", "Signals", "Reviews", "Blog"];
  const ListItem = ({ title }) => {
    return (
      <li className=" transition-all hover:-translate-y-1 duration-500">
        <a href="#" className="block py-2 px-3 md:p-0 rounded ">
          {title}
        </a>
      </li>
    );
  };
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <IoPersonCircleSharp
        className="md:hidden block "
        color="#4B93D0"
        size={44}
      />
      {pages.map((e, i) => {
        return <ListItem title={e} key={i} />;
      })}
    </ul>
  );
};

export default NavMenu;
