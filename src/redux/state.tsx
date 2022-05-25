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

export type StoreType = {
  _state: StateType;
  subscribe: Function;
  getState: Function;
  addPost: Function;
  updateNewPostText: Function;
  rerenderEntireTree: Function;
};

const store: StoreType = {
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
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      countLikes: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTreethis(this._state);
  },
  rerenderEntireTree() {},
  subscribe(observer: any) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
//window.store=store;
