import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: { state: { posts: string[] } }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
