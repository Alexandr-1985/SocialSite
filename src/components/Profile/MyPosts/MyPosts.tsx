import React from "react";
import c from "./MyPosts.module.css";
const MyPosts = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMusc_3mN25tyiS62YmmJZG9HylhqOFWsKFQ&usqp=CAU"
          alt="img_photo"
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={c.posts}>
          <div className={c.item}>post 1</div>
          <div className={c.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
