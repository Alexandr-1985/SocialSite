import React, { createRef } from "react";
import { PostType } from "../../../redux/store";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
type MyPostPropsType = {
  posts: Array<PostType>;
  //addPost: (message: string) => void;
  dispatch: Function;
  newPostText: string;
  // newVariableName: string;
  updateNewPostText: (value: string) => void;
};

const MyPosts = (props: MyPostPropsType) => {
  let postsElement = props.posts.map((p, index) => {
    return <Post message={p.message} countLikes={p.countLikes} key={index} />;
  });

  let newPostElement = createRef<HTMLTextAreaElement>();

  let onAddPostHandler = () => {
    // let text = newPostElement.current?.value;
    props.addPost();
    // const newVariableName = addPostActionCreator();
    // text && props.dispatch(newVariableName);
  };

  let onPostChangeHandler = () => {
    let text = newPostElement.current?.value;
    if (text) props.updateNewPostText(text);
  };

  return (
    <div className={c.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChangeHandler}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPostHandler}>Add post</button>
        </div>
      </div>
      <div className={c.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
