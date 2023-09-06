import { Button } from "flowbite-react";
import JobsCard from "../../components/cards/JobsCard";

const JobLists: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-10 gap-10 my-60 w-full bg-[#F2F3F7] py-16 md:py-40">
      <div className="text-4xl font-semibold my-10 max-md:text-center max-md:text-2xl">Find your best next job with us</div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        <JobsCard
          catagory="remote"
          title="Front End"
          salary="per hour 3$"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem?"
        />
        <JobsCard
          catagory="remote"
          title="Front End"
          salary="per hour 3$"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem?"
        />
        <JobsCard
          catagory="remote"
          title="Front End"
          salary="per hour 3$"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem?"
        />
        <JobsCard
          catagory="remote"
          title="Front End"
          salary="per hour 3$"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem?"
        />
      </div>
      <Button color="purple"><p>Load More</p></Button>
    </div>
  );
};
export default JobLists;
