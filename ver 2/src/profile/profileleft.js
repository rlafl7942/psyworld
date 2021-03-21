import React, { Component } from "react";
import "./profileleft.css";
import { IoIosPerson } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
const toggle = () => {
  let show = document.getElementById("content");
  if (show.style.display === "block") {
    show.style.display = "none";
  } else {
    show.style.display = "block";
  }
};
class ProfileLeft extends Component {
  render() {
    return (
      <div id="pfbody">
        <h3>Profile</h3>
        <hr
          style={{ backgroundColor: "#298FA6", height: "1px", width: "100%" }}
        ></hr>
        <ul style={{ width: "100%" }}>
          <li style={{ listStyle: "none" }} onClick={toggle}>
            <IoIosPerson style={{ marginLeft: "10" }} />내 소개
          </li>
          <ul id="content" style={{ display: "none" }}>
            <li style={{ paddingTop: "10px", color: "#298FA6" }}>소개</li>
            <li>키워드</li>
            <li>히스토리</li>
          </ul>
          <hr style={{ width: "100%" }}></hr>
          <li style={{ listStyle: "none" }}>
            <IoIosPeople style={{ marginLeft: "10" }} />내 인맥
          </li>
          <hr style={{ width: "100%" }}></hr>
          <li style={{ listStyle: "none" }}>
            <AiFillStar style={{ marginLeft: "10" }} />내 즐겨찾기
          </li>
          <hr style={{ width: "100%" }}></hr>
        </ul>
      </div>
    );
  }
}
export default ProfileLeft;
