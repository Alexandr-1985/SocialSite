import React, { createRef } from "react";
import { PostsType, PostType } from "../../../redux/state";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
type MyPostPropsType = {
  posts: Array<PostType>;
  addPost: (message: string) => void;
};
const MyPosts = (props: MyPostPropsType) => {
  let postsElement = props.posts.map((p, index) => {
    return <Post message={p.message} countLikes={p.countLikes} key={index} />;
  });

  let newPostElement = createRef<HTMLTextAreaElement>();

  let addPostHandler = () => {
    let text = newPostElement.current?.value;
    text && props.addPost(text);
    newPostElement.current!.value = " ";
  };

  return (
    <div className={c.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
