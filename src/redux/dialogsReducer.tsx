let initialState = {
  dialogs: [
    { id: 1, name: "Viva" },
    { id: 2, name: "Alik" },
    { id: 3, name: "Olia" },
    { id: 4, name: "Ira" },
    { id: 5, name: "Vera" },
    { id: 6, name: "Anna" },
  ],
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "how " },
    { id: 3, message: "myau" },
    { id: 4, message: "ou" },
    { id: 5, message: "you" },
    { id: 6, message: "the" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action: DialogsReducerAT) => {
  console.log(state);

  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_BODY":
      state.newMessageBody = action.body;
      return state;
    case "SEND_MESSAGE":
      let body = state.newMessageBody;
      state.newMessageBody = "";
      let newMessage = { id: 7, message: body };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (
  body: string
): UpdateNewMessageBodyAT => {
  return { type: "UPDATE_NEW_MESSAGE_BODY", body: body };
};
export const sendMessageCreator = (): SendMessageAT => ({
  type: "SEND_MESSAGE",
});
type DialogsReducerAT = UpdateNewMessageBodyAT | SendMessageAT;
type UpdateNewMessageBodyAT = {
  type: "UPDATE_NEW_MESSAGE_BODY";
  body: string;
};
type SendMessageAT = {
  type: "SEND_MESSAGE";
};

export default dialogsReducer;
