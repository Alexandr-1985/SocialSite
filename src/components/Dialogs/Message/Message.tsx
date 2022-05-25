import React from "react";
import c from "./../Dialogs.module.css";

const Message = (props: any) => {
  return <div className={c.dialog}>{props.message}</div>;
};

export default Message;
