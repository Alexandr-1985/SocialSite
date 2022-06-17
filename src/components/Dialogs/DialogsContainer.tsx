import React, { ChangeEvent, ChangeEventHandler } from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { DialogsType } from "../../redux/store";
import Dialogs from "./Dialogs";

type dialogsPagePropsType = {
  dialogsPage: DialogsType;
  dispatch: Function;

  // newMessageBody: NewMessageBody;
  // sendMessageCreator: () => void;
  //updateNewMessageBodyCreator: (body: string) => void;
};
const DialogsContainer = (props: dialogsPagePropsType) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (body: ChangeEvent<HTMLTextAreaElement>) => {
    props.store.dispatch(updateNewMessageBodyCreator(body.currentTarget.value));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
