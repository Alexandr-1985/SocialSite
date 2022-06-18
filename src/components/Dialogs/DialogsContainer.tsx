import React, { ChangeEvent, ChangeEventHandler } from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { DialogsType } from "../../redux/store";
//import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

type dialogsPagePropsType = {
  dialogsPage: DialogsType;
  dispatch: Function;
  // newMessageBody: NewMessageBody;
  // sendMessageCreator: () => void;
  //updateNewMessageBodyCreator: (body: string) => void;
};
/*const DialogsContainer = (props: dialogsPagePropsType) => {
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
};*/

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body.currentTarget.value));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
