import React, { createRef } from "react";
import { PostsType, PostType } from "../../../redux/state";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
type MyPostPropsType = {
  posts: Array<PostType>;
  //addPost: (message: string) => void;
  dispatch: (message: string) => void;
  newPostText: string;
  newVariableName: string;
};
const MyPosts = (props: MyPostPropsType) => {
  let postsElement = props.posts.map((p, index) => {
    return <Post message={p.message} countLikes={p.countLikes} key={index} />;
  });

  let newPostElement = createRef<HTMLTextAreaElement>();

  let addPostHandler = () => {
    let text = newPostElement.current?.value;
    text && props.dispatch({ type: "ADD-POST", newText: text });
    //newPostElement.current!.value = " ";
  };

  let onPostChangeHandler = () => {
    let text = newPostElement.current?.value;
    const newVariableName = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    text && props.dispatch(newVariableName);
    //newPostElement.current!.value = " ";
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
          <button onClick={addPostHandler}>Add post</button>
        </div>
      </div>
      <div className={c.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
