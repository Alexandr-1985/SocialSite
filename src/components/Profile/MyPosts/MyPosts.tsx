import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={c.posts}>
        <Post message="Hi!" countLikes="25" />
      </div>
    </div>
  );
};

export default MyPosts;
