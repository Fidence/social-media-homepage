import React from "react";
import "./profile.scss";
import First from "../../components/first/First";
import Second from "../../components/second/Second";
import Third from "../../components/third/Third";
import Topbar from "../../components/Topbar/Topbar";
import Shoe from "../../components/Assets/orange.webp";
import Img2 from "../../components/Assets/image2.jpg";

const ProfilePage = () => {
  return (
    <div className="profile">
      <Topbar />
      <div className="profile-container">
        <First />
        <div className="profile-container-right">
          <div className="profile-container-right-top">
            <div className="img-cover">
              <img className="profile-img" src={Shoe} alt="" />
              <img className="profile-img2" src={Img2} alt="" />
            </div>
            <div className="greetings">
              <h6>Moses Favour</h6>
              <span>大家 好</span>
            </div>
          </div>
          <div className="profile-container-right-buttom">
            <Second />
            <Third />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
