import NavBar from "../../components/navbar/navbar";
import Banner from "./Banner";
import JobLists from "./JobLists";
import SearchRelated from "./SearchRelated";

const Home: React.FC = () => {
  return (
    <div className="pt-24">
      <Banner />
      <SearchRelated />
      <JobLists />
      <NavBar />
    </div>
  );
};
export default Home;
