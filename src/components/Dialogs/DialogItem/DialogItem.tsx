import React from "react";
import { NavLink } from "react-router-dom";
import c from "./../Dialogs.module.css";

const DialogItem = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog + " " + c.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

export default DialogItem;
