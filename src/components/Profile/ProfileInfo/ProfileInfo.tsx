import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMusc_3mN25tyiS62YmmJZG9HylhqOFWsKFQ&usqp=CAU"
          alt="img_photo"
        />
      </div>
      <div className="c.descriptionBlock">ava + description</div>
    </div>
  );
};

export default ProfileInfo;
