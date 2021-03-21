import React, { Component } from "react";
import Boo from "./images/boo.jpg";
class ProfileRight extends Component {
  render() {
    return (
      <div id="pfright" style={{ width: "840px", display: "flex" }}>
        <img src={Boo} style={{ width: "40%", height: "70%" }}></img>
        <div style={{ width: "50%", marginTop: "30px" }}>
          <span
            style={{ color: "#298FA6", fontSize: "45px", fontWeight: "bolder" }}
          >
            부정빈
          </span>
          <br />
          <br />
          1999년 4월 어느날 도곡동,
          <br />
          화목한 가정에서 이남매 중 막내로 태어남
          <br />
          분포초등학교를 졸업하고 용문중학교 입학
          <br />
          졸업 후 동천고등학교 입학
          <br />
          졸업 후 양지 메가스터디 기숙학원 입소
          <br />
          퇴소 후 세종대학교 컴퓨터공학과 재학
        </div>
      </div>
    );
  }
}
export default ProfileRight;
