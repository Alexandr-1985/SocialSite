export type PostType = { id: number; message: string; countLikes: number };

export type PostsType = {
  posts: Array<PostType>;
  newPostText: string;
};
type DialogType = {
  id: number;
  name: string;
};
export type DialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};
export type MessageType = {
  id: number;
  message: string;
};

export type StateType = {
  profilePage: PostsType;
  dialogsPage: DialogsType;
};

export type dispatchActionType = {
  type: string;
};

export type StoreType = {
  _state: StateType;
  _callSubscriber: () => void;
  subscribe: () => void;
  getState: () => StateType;
  // addPost: () => void;
  //updateNewPostText: () => void;
  dispatch: (message: string) => void;
};

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const store = {
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
    },
  },
  _callSubscriber() {
    console.log("data changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer: any) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        countLikes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      //this._callSubscriber(this._state);
    } else if (action.addPost === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      //this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPosTextActionCreator = (text: string) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default store;
