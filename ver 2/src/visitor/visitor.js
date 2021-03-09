import React, { Component } from "react";
import "./Visitor.css";
import Profile1 from "./images/Profile1.PNG";
import Home from "./images/Home.png";

let cnt = 3;

class Visitor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickOk = () => {
    console.log("진입");
    let cnt2 = cnt - 1;
    var obj = document.getElementById("innerGuest");
    var back = document.getElementById("body");
    var after = document.getElementById(`b${cnt2}`);
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", `b${cnt}`);

    newDiv.innerHTML = `
    <div class="writedInfo">
        <span class="marginLeft" > No.${cnt}</span>
        <span class="marginLeftAndColor1" >익명인</span>
        <img src="./images/home.png" style="width: 16px;height:16px; margin-left: 1px;">
        <span class="marginLeftAndColor2" >(2021.02.05 01:29)</span>
        <span style="float: right; margin-left: 5px; margin-right: 5px">신고</span>
        <span style="float: right; margin-left: 5px;">|</span>
        <span style="float: right; margin-left: 5px;">삭제</span>
        <span style="float: right; margin-left: 5px;">|</span>
        <span style="float: right;">비밀로 하기</span></div>
    </div>

    <div class="writedImgAndText"> 
        <img class="writingProfileImg" src="./images/Profile1.PNG">
        <textarea class="writedText" name="writedText" rows="10" cols="33" readonly>${obj.value}</textarea>
    </div>

	<div class="writeComment">
		<div id="parent${cnt}"> 

        </div>

        <div class="writeComment">
             <div id="parent${cnt}"> 
             </div>

        <div> 
             <textarea id="a${cnt}" class="commentText" name="guestText" rows="10" cols="33" ></textarea>
             <button 
                type="button" 
                style="position:relative; bottom: 28px; left: 20px;width:60px; height: 60px" 
                onclick="clickCommentOk(${cnt})">확인</button>
        </div>
    </div>`;
    back.insertBefore(newDiv, after);
    cnt++;
  };

  clickCommentOk = (num) => {
    const inputText = document.querySelector(`#a${num}`);
    const text = document.createElement("p");
    const parent = document.querySelector(`#parent${num}`);

    const spaceOf = document.querySelector(`#spaceOf`);
    const spaceDiv = document.createElement("div");

    text.textContent = "익명인 : " + inputText.value;
    parent.appendChild(text);

    spaceDiv.innerHTML = "<br><br>";

    if (num === 2) {
      spaceOf.appendChild(spaceDiv);
    }
  };

  render() {
    return (
      <div id="body">
        <div>
          {/* 방명록 작성하는 div -------*/}
          <div className="topBtn" style={{ marginBottom: "2%" }}>
            <button
              type="button"
              style={{ position: "relative", float: "right" }}
            >
              방명록관리
            </button>
            <button
              type="button"
              style={{
                position: "relative",
                float: "right",
                marginRight: "1%",
              }}
            >
              글꼴설정
            </button>
          </div>
          <div id="writing">
            <div id="writingImgAndText">
              <img
                className="writingProfileImg"
                src={Profile1}
                alt="profile1"
              />
              <textarea
                id="innerGuest"
                className="inputText"
                name="guestText"
                rows="10"
                cols="33"
              ></textarea>
            </div>

            <button
              type="button"
              style={{
                position: "relative",
                float: "right",
                marginRight: "3%",
                marginTop: "2.5%",
              }}
              onClick={this.clickOk}
            >
              확인
            </button>
          </div>
        </div>

        <div id="b2" class="writed">
          {/*작성된 방명록 -- 2 -------*/}
          <div class="writedInfo">
            <span style={{ marginLeft: "2%" }}> No.2</span>
            <span style={{ marginLeft: "2%", color: "#15336F" }}>김예리</span>
            {/*<img src="../../images/home.png" style={{width: '16px', height: '16px', marginLeft:'1px'}}>*/}
            <img
              style={{ width: "16px", height: "16px", marginLeft: "1px" }}
              src={Home}
              alt="Home"
            />
            <span style={{ marginLeft: "10px", color: "#AAABAD" }}>
              (2021.02.05 01:29)
            </span>

            <span
              style={{ float: "right", marginLeft: "5px", marginRight: "5px" }}
            >
              신고
            </span>
            <span style={{ float: "right", marginLeft: "5px" }}>|</span>
            <span style={{ float: "right", marginLeft: "5px" }}>삭제</span>
            <span style={{ float: "right", marginLeft: "5px" }}>|</span>
            <span style={{ float: "right" }}>비밀로 하기</span>
          </div>
          <div class="writedImgAndText">
            <img className="writingProfileImg" src={Profile1} alt="profile1" />
            <textarea
              class="writedText"
              name="writedText"
              rows="10"
              cols="33"
              readOnly
            >
              내가 들렸다네~~내가 들렸다네~~내가 들렸다네~~내가 들렸다네~~내가
              들렸다네~~내가 들렸다네~~내가 들렸다네~~내가 들렸다네~~내가
              들렸다네~~내가 들렸다네~~내가 들렸다네~~내가 들렸다네~~내가
              들렸다네~~내가 들렸다네~~내가 들렸다네~~내가 들렸다네~~내가
              들렸다네~~
            </textarea>
          </div>
          <div class="writeComment">
            <div id="parent2"></div>

            <div>
              <textarea
                id="a2"
                class="commentText"
                name="guestText"
                rows="10"
                cols="33"
              ></textarea>
              <button
                type="button"
                style={{
                  position: "relative",
                  bottom: "28px",
                  left: "20px",
                  width: "60px",
                  height: "60px",
                }}
                onClick={() => this.clickCommentOk(2)}
              >
                확인
              </button>
            </div>
          </div>
        </div>

        <div id="spaceOf"></div>

        <div id="b1" class="writed">
          {/*작성된 방명록 -- 1 -------*/}
          <div class="writedInfo">
            <span style={{ marginLeft: "2%" }}> No.1</span>
            <span style={{ marginLeft: "2%", color: "#15336F" }}>부정빈</span>
            {/*<img src="../../images/home.png" style={{width: '16px', height: '16px', marginLeft:'1px'}}>*/}
            <img
              style={{ width: "16px", height: "16px", marginLeft: "1px" }}
              src={Home}
              alt="Home"
            />
            <span style={{ marginLeft: "10px", color: "#AAABAD" }}>
              (2021.02.05 01:29)
            </span>

            <span
              style={{ float: "right", marginLeft: "5px", marginRight: "5px" }}
            >
              신고
            </span>
            <span style={{ float: "right", marginLeft: "5px" }}>|</span>
            <span style={{ float: "right", marginLeft: "5px" }}>삭제</span>
            <span style={{ float: "right", marginLeft: "5px" }}>|</span>
            <span style={{ float: "right" }}>비밀로 하기</span>
          </div>
          <div class="writedImgAndText">
            <img className="writingProfileImg" src={Profile1} alt="profile1" />
            <textarea
              class="writedText"
              name="writedText"
              rows="10"
              cols="33"
              readOnly
            >
              누나 ㅋ 도토리좀
            </textarea>
          </div>
          <div class="writeComment">
            <div id="parent1"></div>

            <div>
              <textarea
                id="a1"
                class="commentText"
                name="guestText"
                rows="10"
                cols="33"
              ></textarea>
              <button
                type="button"
                style={{
                  position: "relative",
                  bottom: "28px",
                  left: "20px",
                  width: "60px",
                  height: "60px",
                }}
                onClick={() => this.clickCommentOk(1)}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Visitor;
