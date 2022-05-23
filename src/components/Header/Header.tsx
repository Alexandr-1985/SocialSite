import React from "react";
import c from "./Header.module.css";

const Header = () => {
  return (
    <header className={c.header}>
      <img
        src="https://i.pinimg.com/474x/39/b5/61/39b5613f275faa3b8e2722aa3925f655.jpg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
