import React from "react";
import "../App.css";
import musicimg from "../images/music.png";
import ReactAudioPlayer from "react-audio-player";
import music from "../비가오는날엔.mp3";
import DiaryLeft from "../diary/DiaryLeft.js";
import DiaryRight from "../diary/DiaryRight.js";

const DiaryScreen = ({ history }) => {
  let chk = localStorage.getItem("check");
  let ttl = localStorage.getItem("total");
  return (
    <div>
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
            <div id="ifleft">
              <DiaryLeft />
            </div>
          </div>
        </div>
        <div id="outerright">
          <div id="dotright">
            <h1>학교라는 감ok... 벗어난 ㄷr...</h1>
            <span>www.psyworld.com/project</span>
            <React.Fragment>
              <div id="button">
                <button
                  onClick={() => {
                    history.push("/home");
                  }}
                >
                  홈
                </button>
                <button>프로필</button>
                <button style={{ color: "black", backgroundColor: "white" }}>
                  다이어리
                </button>
                <button>사진첩</button>
                <button>방명록</button>
              </div>
              <div id="ifright">
                <DiaryRight />
              </div>
            </React.Fragment>
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
            <meter value="0.3" max="1.0" style={{ marginLeft: "30px" }}></meter>
          </span>
          <br></br>
          <span>
            페이머스
            <meter value="0.8" max="1.0" style={{ marginLeft: "12px" }}></meter>
          </span>
          <br></br>
          <span>
            프렌들리
            <meter value="0.5" max="1.0" style={{ marginLeft: "12px" }}></meter>
          </span>
          <br></br>
          <hr></hr>
          <p style={{ textAlign: "center" }}>자랑 중인 심볼이 없습니다.</p>
          <hr></hr>
          <span>스크랩 게시물</span>
          <span>즐겨찾기</span>
          <hr></hr>
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
    </div>
  );
};

export default DiaryScreen;
