import React from "react";
import "./home.scss";
import Topbar from "../../components/Topbar/Topbar";
import First from "../../components/first/First";
import Second from "../../components/second/Second";
import Third from "../../components/third/Third";

const HomePage = () => {
  return (
    <div>
      <Topbar />
      <div className="flex_container">
        <First />
        <Second />
        <Third />
      </div>
    </div>
  );
};

export default HomePage;
