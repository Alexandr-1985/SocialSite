import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

type ArrayType = {
  posts: string[];
};
const MyPosts: React.FC<ArrayType> = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} countLikes={p.countLikes} />
  ));

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
      <div className={c.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
