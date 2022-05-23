import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <div className={c.dialog + " " + c.active}>
          <NavLink to="/dialogs/1"> NAME </NavLink>
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Whats fun?</div>
      </div>
    </div>
  );
};

export default Dialogs;
