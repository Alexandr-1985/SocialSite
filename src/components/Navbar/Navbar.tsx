import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

type ProtoClassType = {
  activeClassName: string;
};
const Navbar = (props: ProtoClassType) => {
  return (
    <nav className={c.nav}>
      <div className={`${c.item} ${c.ative}`}>
        <NavLink to="/profile" activeClassName={c.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs" activeClassName={c.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/news" activeClassName={c.activeLink}>
          News
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/music" activeClassName={c.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/setting" activeClassName={c.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
