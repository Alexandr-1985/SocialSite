import React, { ChangeEvent, ChangeEventHandler } from "react";
import {
  DialogsType,
  sendMessageCreator,
  StoreType,
  updateNewMessageBodyCreator,
} from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";

type dialogsPagePropsType = {
  dialogsPage: DialogsType;
  dispatch: Function;
  // newMessageBody: NewMessageBody;
  // sendMessageCreator: () => void;
  //updateNewMessageBodyCreator: (body: string) => void;
};
const Dialogs = (props: dialogsPagePropsType) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d, index) => {
    return <DialogItem name={d.name} id={d.id} key={index} />;
  });
  let messagesElements = state.messages.map((m, index) => {
    return <Message message={m.message} key={index} />;
  });

  let newMessageBody: string = state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value));
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
