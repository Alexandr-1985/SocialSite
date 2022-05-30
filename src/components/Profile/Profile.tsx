import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsType } from "../../redux/store";
type ProfilePropsType = {
  profilePage: PostsType;
  dispatch: any;
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
