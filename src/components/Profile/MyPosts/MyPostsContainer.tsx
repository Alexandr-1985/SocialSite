import { createRef } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { PostType } from "../../../redux/store";
import StoreConext from "../../../StoreContext";
import MyPosts from "./MyPosts";

type MyPostPropsType = {
  posts: Array<PostType>;
  //addPost: (message: string) => void;
  dispatch: Function;
  newPostText: string;
  // newVariableName: string;
  store: Array<String>;
};

const MyPostsContainer = (props: MyPostPropsType) => {
  return (
    <StoreConext.Consumer>
      {(store) => {
        let state = store.getState();
        let newPostElement = createRef<HTMLTextAreaElement>();

        let onAddPostHandler = () => {
          let text = newPostElement.current?.value;
          const newVariableName = addPostActionCreator();
          text && store.dispatch(newVariableName);
          //newPostElement.current!.value = " ";
        };

        let onPostChangeHandler = (text) => {
          // let text = newPostElement.current?.value;
          if (text) {
            const newVariableName = updateNewPostTextActionCreator(text);
            store.dispatch(newVariableName);
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
      }}
    </StoreConext.Consumer>
  );
};

export default MyPostsContainer;
