import React, { Component } from "react";
import "./App.css";
import musicimg from "./images/music.png";
import ReactAudioPlayer from "react-audio-player";
import music from "../src/비가오는날엔.mp3";
import LeftScreen from "./leftscreen.js";
import RightScreen from "./rightscreen.js";
import Btn from "./btn.js";

import { Link, BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    let chk = localStorage.getItem("check");
    let ttl = localStorage.getItem("total");
    if (chk == null) {
      localStorage.setItem("check", 1);
    } else {
      chk++;
      localStorage.setItem("check", chk);
    }
    if (ttl == null) {
      localStorage.setItem("total", 72398);
    } else {
      ttl++;
      localStorage.setItem("total", ttl);
    }
    return (
      <div id="mainContainer">
        <BrowserRouter>
          <div id="page">
            <div id="outerleft">
              <div id="dotleft">
                <p style={{ fontSize: "15px" }}>
                  <span>Today&nbsp;&nbsp;</span>
                  <span id="check" style={{ color: "red" }}>
                    {chk}
                  </span>
                  <span>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;TOTAL {ttl}
                    <span id="ttlchk"></span>
                  </span>
                </p>
                <LeftScreen />
              </div>
            </div>
            <div id="outerright">
              <div id="dotright">
                <h1>학교라는 감ok... 벗어난 ㄷr...</h1>
                <span>www.psyworld.com/project</span>
                <div id="button">
                  <Btn />
                </div>
                <RightScreen />
              </div>
            </div>
          </div>
          <div id="psyworldhome">
            <p id="homebar">
              <span>싸이월드홈</span>
            </p>
            <div id="underhb">
              <br></br>
              <span>
                액티브
                <meter
                  value="0.3"
                  max="1.0"
                  style={{ marginLeft: "30px" }}
                ></meter>
              </span>
              <br></br>
              <span>
                페이머스
                <meter
                  value="0.8"
                  max="1.0"
                  style={{ marginLeft: "12px" }}
                ></meter>
              </span>
              <br></br>
              <span>
                프렌들리
                <meter
                  value="0.5"
                  max="1.0"
                  style={{ marginLeft: "12px" }}
                ></meter>
              </span>
              <br></br>
              <hr style={{ width: "95%" }}></hr>
              <p style={{ textAlign: "center" }}>자랑 중인 심볼이 없습니다.</p>
              <hr style={{ width: "95%" }}></hr>
              <span>스크랩 게시물</span>
              <span>즐겨찾기</span>
              <hr style={{ width: "95%" }}></hr>
              <span style={{ color: "#298FA6" }}>사용중아이템</span>
              <br></br>
              <span style={{ fontSize: "18px" }}>소망상자</span>
            </div>
            <div id="musicouter">
              <div id="musicinner">
                <span style={{ fontSize: "15px" }}>
                  <img src={musicimg} alt="music" width="20px" height="20px" />
                  &nbsp;&nbsp;비스트-비가 오는 날엔(On Rainy Days)
                </span>
              </div>
              <ReactAudioPlayer id="music" src={music} autoPlay controls />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
