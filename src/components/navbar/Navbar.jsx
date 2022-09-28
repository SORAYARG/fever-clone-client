import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <div className="navb">
        <p id="title">UCHOOSE</p>
        <input className="inputsearch" placeholder="Encuentra eventos"></input>
        <button><Link to="/register">Register</Link></button>
        <button ><Link to="./login">Login</Link></button>
        {/* <p><Link to="/profile">Profile</Link></p> */}

      </div>
    </nav>
  );
};

export default Navbar;