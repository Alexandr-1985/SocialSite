import React from "react";
import { NavLink } from "react-router-dom";
import { DialogsType } from "../../../redux/state";
import c from "./../Dialogs.module.css";

type PropsType = {
  name: string;
  id: number;
};
const Dialog = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog + " " + c.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

// export default Dialog;
