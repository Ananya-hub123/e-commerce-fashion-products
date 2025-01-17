import "./navbar.css";
import { NavLink } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
            Men
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
            Women
          </NavLink>
        </div>
        <div>
          <NavLink to="/kids" end>
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-featured" end>
            New & featured
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
            Gifts
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo">TULOS</div>

      <div className="navbar">
        <div className="navbar-right">
          <LuSearch />
          <HiOutlineShoppingBag />
          <div className="navbar-user-info">Login</div>
        </div>
      </div>


    </div>
  );
};

export default Navbar;