import { Button, Dropdown } from "flowbite-react";
import logo from "./../assets/Logo.png";
import Item from "./Item";
import { BsBagFill } from "react-icons/bs";
import { useState } from "react";
import active from "./../assets/active.svg";
import menu from "./../assets/menu.svg";

const NavBar: React.FC = () => {
  const [isMenuActive, setMenuActive] = useState<boolean>(true);

  const handleToogle = () => {
    setMenuActive(!isMenuActive);
  };
  return (
    <div
      className={`shadow w-full fixed top-0 left-0 py-6 px-10 flex flex-row justify-between ${
        isMenuActive ? "items-start" : "items-center"
      }`}
    >
      <img src={logo} alt="logo.png" className=" cursor-pointer" />
      <div className="  flex flex-col items-end max-md:relative">
        <img
          src={isMenuActive ? active : menu}
          alt={isMenuActive ? `active.png` : `menu.png`}
          onClick={handleToogle}
          className="w-8 md:hidden"
        />
        <div className={`flex  flex-row gap-12 max-md:hidden`}>
          <div className="flex gap-0 items-center">
            <BsBagFill className="w-10" />
            <Dropdown inline label="Jobs">
              <Item text="Listing" />
              <Item text="Application" />
            </Dropdown>
          </div>
          <Button outline color="purple">
            Sign In
          </Button>
          <Button color="purple">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
