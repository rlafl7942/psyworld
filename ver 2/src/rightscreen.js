import React, { Component } from "react";
import "./rightscreen.css";
import HomeRight from "./home/HomeRight.js";
import Visitor from "./visitor/VisitorsBook";

class RightScreen extends Component {
  render() {
    return (
      <div id="ifright">
        {/*<HomeRight />*/}
        <Visitor />
      </div>
    );
  }
}
export default RightScreen;
