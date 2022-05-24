import React from "react";
import { NavLink } from "react-router-dom";
import c from "./../Dialogs.module.css";

const DialogItem = (props: { id: string; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | ((props: { isActive: boolean; }) => React.ReactNode) | null | undefined; }) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog + " " + c.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

export default DialogItem;
