import React, { Component } from "react";
import "./leftscreen.css";
import HomeLeft from "./home/HomeLeft.js";
class LeftScreen extends Component {
  render() {
    return (
      <div id="ifleft">
        <HomeLeft />
      </div>
    );
  }
}
export default LeftScreen;
