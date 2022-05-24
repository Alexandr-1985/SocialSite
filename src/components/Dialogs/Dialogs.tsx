import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";

type ArrayType = {
  dialogs: string[];
  messages: string[];
};
const Dialogs: React.FC<ArrayType> = (props) => {
  let dialogsElements = props.dialogs.map((d) => {
    <DialogItem name={d.name} id={d.id} />;
  });
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
