import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = (props: any) => {
  return (
    <nav className={c.nav}>
      <div className={`${c.item} ${c.ative}`}>
        <NavLink to="/profile" className={c.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs" className={c.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/news" className={c.activeLink}>
          News
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/music" className={c.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/setting" className={c.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
