import React from "react";
import { DialogsType } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";

type dialogsPagePropsType = {
  dialogsPage: DialogsType;
};
const Dialogs = (props: dialogsPagePropsType) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d, index) => {
    return <DialogItem name={d.name} id={d.id} key={index} />;
  });
  console.log();

  let messagesElements = props.dialogsPage.messages.map((m, index) => {
    return <Message message={m.message} key={index} />;
  });

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
