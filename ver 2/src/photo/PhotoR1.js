import React, { Component } from "react";
import "./Photo.css";
import Pic1 from "./images/Pic1.jpg";

class PhotoR1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickBtnComment = (num) => {
    const inputText = document.querySelector(`#commentText${num}`);
    const text = document.createElement("p");
    const parent = document.querySelector(`#comment${num}`);

    const addSpace = document.querySelector("#picToPicSpace");
    const space = document.createElement("div");

    if (inputText.value === "") {
      return;
    }

    text.textContent = "익명인 : " + inputText.value;
    space.innerHTML = "<br><br>";

    parent.appendChild(text);
    addSpace.appendChild(space);
  };

  render() {
    return (
      <div id="container">
        <div id="picDiv1" class="pic">
          <div class="picInfo">
            <p
              class="inToblock"
              style={{ position: "relative", left: "40%", top: "1%" }}
            >
              {" "}
              [스크랩] 나라는 사람은
            </p>

            <button
              type="button"
              style={{ position: "relative", left: "67%", top: "1%" }}
            >
              주소복사
            </button>
          </div>

          <div class="picWho">
            <span>변영화</span>
            <span style={{ position: "relative", left: "69%" }}>
              2021.02.02 01:27 스크랩: 0
            </span>
          </div>

          <div>
            {/*<img src="../../images/1.jpg">*/}
            <img src={Pic1} alt="Pic2" />
          </div>

          <div>
            <hr
              style={{
                borderStyle: "dotted",
                borderColor: "#EAEAEA",
                margin: "2%",
              }}
            />
            <p style={{ marginLeft: "2%", color: "#A3A3A3" }}>
              공개 설정 : 비공개
            </p>
            <hr
              style={{
                borderStyle: "dotted",
                borderColor: "#EAEAEA",
                margin: "2%",
              }}
            />
          </div>

          <div class="everyBtn" style={{ marginLeft: "2%" }}>
            <span>메인등록</span>
            <span>|</span>
            <span>😊인물태그</span>
            <span>|</span>
            <span>스티커</span>

            <span style={{ marginLeft: "45%" }}>
              <span>수정</span>
              <span>|</span>
              <span>이동</span>
              <span>|</span>
              <span>삭제</span>
              <span>|</span>
              <span>보내기</span>
            </span>
          </div>

          <div id="comment1" class="comment" style={{ padding: "1%" }}>
            <p>김예리 : ㅎㅇ</p>
            <p>부정빈 : 퍼가요~❤</p>
            <p>강지한 : 들렸다 갑니당~</p>
          </div>

          <div>
            <form
              style={{
                textAlign: "center",
              }}
            >
              댓글{" "}
              <input id="commentText1" type="text" size="30" /* value="" */ />
              {/* <textarea id="commentText1" rows="0" cols="30"></textarea> */}
              <button type="button" onClick={() => this.clickBtnComment(1)}>
                저장
              </button>
            </form>
          </div>
        </div>

        <div id="picToPicSpace"></div>
      </div>
    );
  }
}

export default PhotoR1;
