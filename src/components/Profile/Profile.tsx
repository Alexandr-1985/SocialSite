import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";

/* type MyPostsPropsType = { props: string }; */
const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMusc_3mN25tyiS62YmmJZG9HylhqOFWsKFQ&usqp=CAU"
          alt="img_photo"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
