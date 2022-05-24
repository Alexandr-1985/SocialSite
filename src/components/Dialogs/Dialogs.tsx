import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props: { state: { dialogs: any[]; messages: any[] } }) => {
  let dialogsElements = props.state.dialogs.map((d: { name: any; id: any }) => {
    <DialogItem name={d.name} id={d.id} />;
  });
  let messagesElements = props.state.messages.map((m: { message: string }) => (
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
