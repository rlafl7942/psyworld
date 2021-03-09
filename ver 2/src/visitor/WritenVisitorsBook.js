import React, { Component } from "react";
import "./Visitor.css";
import Profile1 from "./images/Profile1.PNG";

const WritenVisitorsBook = () => {
  return (
    <>
      <div id="b2" class="writed">
        {/*작성된 방명록 -- 1 -------*/}
        <div class="writedInfo">
          <span style={{ marginLeft: "2%" }}> No.2</span>
          <span style={{ marginLeft: "2%", color: "#15336F" }}>김예리</span>
          {/*<img src="../../images/home.png" style={{width: '16px', height: '16px', marginLeft:'1px'}}>*/}
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
            readonly
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
              onclick="clickCommentOk(2)"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritenVisitorsBook;
