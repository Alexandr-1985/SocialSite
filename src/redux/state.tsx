let state = {
  profilePage: {
    posts: [
      { id: 1, message: "how are you", countLikes: 12 },
      { id: 2, message: "When are we do ", countLikes: 1 },
    ],
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
  sitebar: {},
};

export let addPost = (postMessage: any) => {
  let newPost = {
    id: 5,
    message: postMessage,
    countLikes: 0,
  };
  state.profilePage.posts.push(newPost);
};

export default state;
