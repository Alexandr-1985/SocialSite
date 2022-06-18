import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsType } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../redux/redux-store";
type ProfilePropsType = {
  // profilePage: PostsType;
  // dispatch: any;
  store: Array<String>;
};
const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
