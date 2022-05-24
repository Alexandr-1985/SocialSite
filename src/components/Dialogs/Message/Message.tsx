import React from "react";
import c from "./../Dialogs.module.css";

type PropsType = {
  message: string;
};
const Message: React.FC<PropsType> = (props) => {
  return <div className={c.dialog}>{props.message}</div>;
};

export default Message;
