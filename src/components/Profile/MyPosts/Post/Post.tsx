import React from "react";
import c from "./Post.module.css";

type PostPropsType = {
  message: string;
};

const Post = (props: PostPropsType) => {
  return (
    <div>
      <div className={c.item}>
        <img src="https://th.bing.com/th?id=OIF.aunKGg03UW%2faanIxGf2tnQ&w=143&h=182&c=7&r=0&o=5&pid=1.7" />
        {props.message}
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
