import { ImLocation } from "react-icons/im";
import { BiPlus } from "react-icons/bi";
import { Button } from "flowbite-react";
const JobsCard: React.FC<JobsCardProp> = ({
  catagory,
  title,
  salary,
  description,
}) => {
  return (
    <div className="px-20 py-10 border shadow-md max-lg:px-10 gap-4 flex flex-col max-md:py-4 bg-white">
      <div className="flex gap-2 items-center">
        <ImLocation className="text-blue-500 w-5 h-5" />
        <div>{catagory}</div>
      </div>
      <div className="text-3xl font-semibold">{title}</div>
      <div className="text-sm">{salary}</div>
      <div className="text-lg font-extralight max-md:text-base line-clamp-2">{description}</div>
      <Button color="purple" className="flex items-center w-fit max-md:self-center">
        <BiPlus className="self-center mr-4 h-5 w-5" />
        <p className="max-md:text-[9px]">MORE DETAILS</p>
      </Button>
    </div>
  );
};
export default JobsCard;
