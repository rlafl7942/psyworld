import React, { Component } from "react";
import "./leftscreen.css";
import HomeLeft from "./home/HomeLeft.js";
import PhotoL from "./photo/PhotoL";
import DiaryLeft from "./diary/DiaryLeft.js";
import ProfileLeft from "./profile/profileleft.js";
import { Route } from "react-router-dom";
class LeftScreen extends Component {
  render() {
    return (
      <div id="ifleft">
        <Route path="/" component={HomeLeft} exact />
        <Route path="/home" component={HomeLeft} />
        <Route path="/diary" component={DiaryLeft} />
        <Route path="/profile" component={ProfileLeft} />
        <Route path="/photo" component={PhotoL} />
        <Route path="/visitors" component={HomeLeft} />
      </div>
    );
  }
}
export default LeftScreen;
