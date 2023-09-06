import { Button, Dropdown, TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col w-full px-12 gap-10">
        <p className="heading3">Remote jobs</p>
        <h1 className="title">Remote jobs</h1>
        <div>
          Find your next job at companies like{" "}
          <span className="heading3 text-purple-700">
            Intercon, Spotify, Square
          </span>{" "}
          and
          <span className="heading3 text-purple-700"> twitter</span>
        </div>
      </div>
      <div>
        <form className="flex w-full justify-between px-12">
          <input
            className="w-[400px] pl-10 py-2 border-[0.4px] rounded-md"
            type="text"
          />
          <div className="border w-[500px] flex flex-row py-2 px-4  justify-between items-center">
            <FiSearch className="h-6 w-6" />
            <select className="border-none">
              <option disabled>Catagory</option>
              <option>Africa</option>
            </select>

            <div className="flex gap-5">
              <button>Clear</button>
              <Button color="purple">Search</Button>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};
export default Banner;
