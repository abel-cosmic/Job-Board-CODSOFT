const Banner: React.FC = () => {
  return (
    <div className="flex flex-col w-full px-12 max-md:px-6 gap-6 max-md:gap-4 max-md:mt-4 mt-20">
      <p className="heading3 max-md:text-sm text-center">Remote jobs</p>
      <h1 className="title max-md:text-5xl text-center">Remote jobs</h1>
      <div className="text-center max-md:text-sm ">
        Find your next job at companies like{" "}
        <span className="heading3 text-purple-700 max-md:text-sm max-md:font-semibold">
          Intercon, Spotify, Square
        </span>{" "}
        and
        <span className="heading3 text-purple-700 max-md:text-sm max-md:font-semibold">
          {" "}
          twitter
        </span>
      </div>
    </div>
  );
};
export default Banner;
