import React, { Component } from "react";
import "./leftscreen.css";
import HomeLeft from "./home/HomeLeft.js";
import PhotoL from "./photo/PhotoL";

class LeftScreen extends Component {
  render() {
    let screenState = this.props.rightScreenState;
    return (
      <div id="ifleft">
        {screenState === 1 ? (
          <HomeLeft />
        ) : screenState === 2 ? (
          <></>
        ) : screenState === 3 ? (
          <></>
        ) : screenState === 4 ? (
          <PhotoL screenState={screenState} />
        ) : screenState === 5 ? (
          <HomeLeft />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default LeftScreen;
