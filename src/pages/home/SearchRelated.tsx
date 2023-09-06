import { Button, Dropdown } from "flowbite-react";
import { FiSearch } from "react-icons/fi";
const SearchRelated: React.FC = () => {
  return (
    <div>
      <div className="flex w-full justify-center gap-4 px-12 mt-10  max-md:flex-col">
        <div className="relative">
          <FiSearch className="h-6 w-6 absolute top-4 left-3 " />
          <input
            placeholder="Job title or keyword"
            className="w-[400px] max-md:w-full pl-10 py-4 h-full border-[0.4px] rounded-md"
            type="text"
          />
        </div>
        <div className="flex gap-5 items-center">
          <Button color="purple" className="w-full">
            Search
          </Button>
          <Button outline color="purple">
            Clear
          </Button>
        </div>
      </div>
      <div className="flex px-12 mt-4 gap-4 max-md:flex-col justify-center w-full">
        <div className="flex gap-4 max-md:flex-col">
          <select className=" border-[0.4px] border-black h-fit px-4 py-2  max-md:py-2 flex items-center justify-center rounded-md">
            <option disabled selected hidden>
              Catagory
            </option>
            <option>Front End</option>
            <option>Back End</option>
            <option>FullStack</option>
            <option>DevOps</option>
          </select>
          <select className=" border-[0.4px] border-black h-fit px-4 py-2  max-md:py-2 flex items-center justify-center rounded-md">
            <option disabled selected hidden>
              Salary
            </option>
            <option>per-hour</option>
            <option>monthly</option>
            <option>one time</option>
          </select>
          <select className=" border-[0.4px] border-black h-fit px-4 py-2  max-md:py-2 flex items-center justify-center rounded-md">
            <option disabled selected hidden>
              Type of work
            </option>
            <option>Full time</option>
            <option>Part time</option>
            <option>Remote</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default SearchRelated;
