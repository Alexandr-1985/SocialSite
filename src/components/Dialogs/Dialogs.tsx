import React, { ChangeEvent } from "react";
import { DialogsType } from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";

type dialogsPagePropsType = {
  dialogsPage: DialogsType;
  dispatch: Function;
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
  // newMessageBody: NewMessageBody;
  // sendMessageCreator: () => void;
  //updateNewMessageBodyCreator: (body: string) => void;
};
const Dialogs = (props: dialogsPagePropsType) => {
  //let state = props.store.getState().dialogsPage;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d, index) => {
    return <DialogItem name={d.name} id={d.id} key={index} />;
  });
  let messagesElements = state.messages.map((m, index) => {
    return <Message message={m.message} key={index} />;
  });

  let newMessageBody: string = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
    //props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageBody(e.currentTarget.value);
    // props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value));
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
