import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: "how are you", likesCount: 12 },
    { id: 2, message: "When are we do ", likesCount: 1 },
  ];

  return (
    <div className={c.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={c.posts}>
        <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
