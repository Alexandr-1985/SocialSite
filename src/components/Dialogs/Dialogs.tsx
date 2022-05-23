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
  let dialogs = [
    { id: 1, name: "Viva" },
    { id: 2, name: "Alik" },
    { id: 3, name: "Olia" },
    { id: 4, name: "Ira" },
    { id: 5, name: "Vera" },
    { id: 6, name: "Anna" },
  ];

  let messages = [
    { id: 1, message: "hi" },
    { id: 2, message: "how " },
    { id: 3, message: "myau" },
    { id: 4, message: "ou" },
    { id: 5, message: "you" },
    { id: 6, message: "the" },
  ];

  let dialogsElements = dialogs.map((d) => {
    <DialogItem name={d.name} id={d.id} />;
  });
  let messagesElement = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
