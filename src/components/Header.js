import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="react-food-logo" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </div>
  );
};

export default Header;
