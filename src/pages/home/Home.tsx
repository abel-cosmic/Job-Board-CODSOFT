import NavBar from "../../components/navbar/navbar";
import Banner from "./Banner";

const Home: React.FC = () => {
  return (
    <div className="pt-32">
      <Banner/>
      <NavBar />
    </div>
  );
};
export default Home;
