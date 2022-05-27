import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsType } from "../../redux/state";
type ProfilePropsType = {
  profilePage: PostsType;
  newPostText: (message: string) => void;
  dispatch: (message: string) => void;
};
const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={props.profilePage.newPostText}
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
