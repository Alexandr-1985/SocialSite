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
  let dialogsData = [
    { id: 1, name: "Viva" },
    { id: 2, name: "Alik" },
    { id: 3, name: "Olia" },
    { id: 4, name: "Ira" },
    { id: 5, name: "Vera" },
    { id: 6, name: "Anna" },
  ];

  let messagesData = [
    { id: 1, message: "hi" },
    { id: 2, message: "how " },
    { id: 3, message: "myau" },
    { id: 4, message: "ou" },
    { id: 5, message: "you" },
    { id: 6, message: "the" },
  ];

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <DialogItem name={dialogsData[0]} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1]} id={dialogsData[1].id} />
      </div>
      <div className={c.messages}>
        <Message message={messagesData[0]} />
      </div>
    </div>
  );
};

export default Dialogs;
