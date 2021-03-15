import React, { Component } from "react";
import "./rightscreen.css";
import HomeRight from "./home/HomeRight.js";
import VisitorsBook from "./visitor/VisitorsBook";
import DiaryRight from "./diary/DiaryRight";
import PhotoR1 from "./photo/PhotoR1";
import Profile from "./profile/profile";
import PhotoR2 from "./photo/PhotoR2";

class RightScreen extends Component {
  render() {
    //console.log(this.props.rightScreenState);
    let screenState = this.props.rightScreenState;
    return (
      <div id="ifright">
        {screenState === 1 ? (
          <HomeRight />
        ) : screenState === 2 ? (
          <Profile />
        ) : screenState === 3 ? (
          <DiaryRight />
        ) : screenState === 4 ? (
          <PhotoR1 />
        ) : screenState === 5 ? (
          <VisitorsBook />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default RightScreen;
