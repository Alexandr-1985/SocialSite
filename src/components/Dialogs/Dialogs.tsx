import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

type PropsType = {
  name: string;
  id: number;
};
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog + " " + c.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={c.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <DialogItem name="Viva" id="1" />
        <DialogItem name="Alik" id="2" />
        <DialogItem name="Olia" id="3" />
        <DialogItem name="Ira" id="4" />
        <DialogItem name="Vera" id="5" />
        <DialogItem name="Anna" id="6" />
      </div>
      <div className={c.messages}>
        <Message message="Hi" />
      </div>
    </div>
  );
};

export default Dialogs;
