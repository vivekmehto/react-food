import logo2 from "../assets/logo2-bg.png";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between w-[90%] m-auto">
      <div className="flex justify-center items-center">
        <img className="h-16" src={logo2} alt="react-food-logo" />
        <h1 className="text-2xl font-semibold uppercase">React Food</h1>
      </div>
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
        <li className="m-6">
          <Link to="/cart">
            <FaCartPlus className="inline-block" />{" "}
            <span>{cartItems.length}</span>
          </Link>
        </li>
      </ul>

      {/* <button className=" bg-blue-400 hover:bg-blue-700 mx-1 my-auto p-2 rounded-sm">
        Login
      </button> */}
    </div>
  );
};

export default Header;
