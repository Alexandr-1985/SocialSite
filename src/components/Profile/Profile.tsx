import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost, PostsType, updateNewPostText } from "../../redux/state";
type ProfilePropsType = {
  profilePage: PostsType;
  addPost: (message: string) => void;
  newPostText: string;
  updateNewPostText: (message: string) => void;
};
const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        posts={props.profilePage.posts}
      />
    </div>
  );
};

export default Profile;
