import React from "react";
import Background from "assets/images/background.jpeg";
//local components
import MainContainer from "components/MainContainer";
import Explore from "components/Explore";
import GetInspired from "components/GetInspired";
import Discover from "components/Discover";
import Host from "components/Host";

const Index = () => {
  return (
    <div
      className="vh-100 main-header"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Main Container */}
      <MainContainer />
      {/* Explore */}
      <Explore />
      {/* Get Inspired */}
      <GetInspired />
      {/* Discover */}
      <Discover />
      {/* Host */}
      <Host />
    </div>
  );
};

export default Index;
