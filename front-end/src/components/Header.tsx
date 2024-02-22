import { PiStudent } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import "../styles/Header.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Logout from "./Logout";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="header-container">
      <div className="navbar">
        <div className="icon">
          <PiStudent />
        </div>
        <div className="navbarheader">
          <Dashboard />
          <Courses />
          <Profile />
          <Logout  /><IoIosLogOut />
        </div>
      </div>
    </div>
  );
};

export default Header;
