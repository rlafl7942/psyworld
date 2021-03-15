import React, { Component } from "react";
import "./DiaryLeft.css";

class DiaryLeft extends Component {
  render() {
    return (
      <div id="diaryLeftContainer">
        <div id="smallContainer">
          <span class="bold">DIARY</span>
          <div id="diaryList">
            <li>내 다이어리</li>
            <ul class="toggleList" style={{ display: "block" }}>
              <li>내 일기장</li>
            </ul>
            <li>오잉</li>
          </div>
        </div>
      </div>
    );
  }
}

export default DiaryLeft;
