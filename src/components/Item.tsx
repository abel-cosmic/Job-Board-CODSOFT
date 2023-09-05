import { Link } from "react-router-dom";

interface itemProps {
  text: string;
}
const Item: React.FC<itemProps> = ({ text }) => {
  return (
    <Link to={text}>
        <div className="px-4 py-2 hover:bg-black/5 hover:font-semibold active:bg-black/10 cursor-pointer">
          {text}
        </div>
    </Link>
  );
};
export default Item;
