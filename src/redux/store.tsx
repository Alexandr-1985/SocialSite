import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export type PostType = { id: number; message: string; countLikes: number };

export type PostsType = {
  posts: Array<PostType>;
  newPostText: string;
};
export type DialogType = {
  id: number;
  name: string;
};

type NewMessageBody = {
  newMessageBody: string;
};

export type DialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  newMessageBody: string;
};
export type MessageType = {
  id: number;
  message: string;
};

export type StateType = {
  profilePage: PostsType;
  dialogsPage: DialogsType;
};

export type StoreType = {
  _state: StateType;
  _callSubscriber: () => void;
  subscribe: () => void;
  getState: () => StateType;
  dispatch: (action: any) => void;
};

export const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "how are you", countLikes: 12 },
        { id: 2, message: "When are we do ", countLikes: 1 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state: any) {
    console.log("data changed");
  },
  subscribe(observer: any) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
