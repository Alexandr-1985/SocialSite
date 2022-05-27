import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsType } from "../../redux/state";
type ProfilePropsType = {
  profilePage: PostsType;
  addPost: (message: string) => void;
  dispatch: (message: string) => void;
};
const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        addPost={props.addPost}
        dispatch={props.profilePage.newPostText}
        posts={props.profilePage.posts}
      />
    </div>
  );
};

export default Profile;
