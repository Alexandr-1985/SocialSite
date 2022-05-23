import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={c.posts}>
        <Post message="Hi!" />
        {/*  <Post message="How are you!" />
        <Post message="Hi!" /> */}
      </div>
    </div>
  );
};

export default MyPosts;
