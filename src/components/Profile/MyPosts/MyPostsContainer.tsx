import { createRef } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { PostType } from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostPropsType = {
  posts: Array<PostType>;
  //addPost: (message: string) => void;
  dispatch: Function;
  newPostText: string;
  // newVariableName: string;
  store: [];
};

const MyPostsContainer = (props: MyPostPropsType) => {
  let state = props.store.getState();

  let newPostElement = createRef<HTMLTextAreaElement>();

  let onAddPostHandler = () => {
    let text = newPostElement.current?.value;
    const newVariableName = addPostActionCreator();
    text && props.store.dispatch(newVariableName);
    //newPostElement.current!.value = " ";
  };

  let onPostChangeHandler = (text) => {
    // let text = newPostElement.current?.value;
    if (text) {
      const newVariableName = updateNewPostTextActionCreator(text);
      props.store.dispatch(newVariableName);
    }
  };

  return (
    <MyPosts
      updateNewPostText={onPostChangeHandler}
      addPost={onAddPostHandler}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
