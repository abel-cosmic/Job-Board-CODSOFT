import { Button, Dropdown } from "flowbite-react";
import logo from "./../../assets/Logo.png";
import Item from "../item/Item";
import { BsBagFill } from "react-icons/bs";
import { useState } from "react";
import active from "./../../assets/active.svg";
import menu from "./../../assets/menu.svg";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isMenuActive, setMenuActive] = useState<boolean>(false);

  const handleToogle = () => {
    setMenuActive(!isMenuActive);
    setTimeout(() => {
      setMenuActive(false);
    }, 3000);
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
          <Link to="SignIn">
            <Button color="purple" outline>
              Sign In
            </Button>
          </Link>
          <Link to="SignUp">
            <Button color="purple">Sign Up</Button>
          </Link>
        </div>
        {isMenuActive && (
          <div className=" md:hidden z-50 bg-white flex flex-col items-end justify-between w-[300px] h-[300px] fixed top-[100px] right-2 border">
            <div className="border w-full text-end pr-5 py-4">Jobs</div>
            <ul className="flex flex-col items-end gap-10 pr-5">
              <Item text="Listing" />
              <Item text="Application" />
            </ul>
            <Link to="SignIn">
              <Button color="purple" className="w-60" outline>
                Sign In
              </Button>
            </Link>
            <Link to="SignUp">
              <Button color="purple" className="w-60">
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
