import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between">
      <img className="w-24 h-24 " src={logo} alt="react-food-logo" />

      <ul className="flex">
        <li className="m-6">
          <Link to="/">Home</Link>
        </li>
        <li className="m-6">
          <Link to="/about">About</Link>
        </li>
        <li className="m-6">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button className=" bg-blue-400 hover:bg-blue-700 mx-1 my-auto p-2 rounded-sm">
        Login
      </button>
    </div>
  );
};

export default Header;
