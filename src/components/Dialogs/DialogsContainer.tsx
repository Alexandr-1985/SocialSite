import React, { ChangeEvent, ChangeEventHandler } from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { DialogsType } from "../../redux/store";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

type dialogsPagePropsType = {
  dialogsPage: DialogsType;
  dispatch: Function;
  // newMessageBody: NewMessageBody;
  // sendMessageCreator: () => void;
  //updateNewMessageBodyCreator: (body: string) => void;
};
const DialogsContainer = (props: dialogsPagePropsType) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };
        let onNewMessageChange = (body: ChangeEvent<HTMLTextAreaElement>) => {
          store.dispatch(updateNewMessageBodyCreator(body.currentTarget.value));
        };

        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
      ;
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
