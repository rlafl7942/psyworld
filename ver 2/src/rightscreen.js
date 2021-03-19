import React, { Component } from "react";
import "./rightscreen.css";
import HomeRight from "./home/HomeRight.js";
import VisitorsBook from "./visitor/VisitorsBook";
import DiaryRight from "./diary/DiaryRight";
import ProfileRight from "./profile/profileright.js";
import PhotoR1 from "./photo/PhotoR1";
import PhotoR2 from "./photo/PhotoR2";
import { BrowserRouter, Route } from "react-router-dom";

class RightScreen extends Component {
  render() {
    return (
      <div id="ifright">
        <Route path="/" component={HomeRight} exact />
        <Route path="/home" component={HomeRight} />
        <Route path="/profile" component={ProfileRight} />
        <Route path="/diary" component={DiaryRight} />
        <Route path="/photo" component={PhotoR1} />
        <Route path="/visitors" component={VisitorsBook} />
      </div>
    );
  }
}
export default RightScreen;
