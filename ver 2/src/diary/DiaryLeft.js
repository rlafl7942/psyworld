import React, { Component } from "react";
import "./DiaryLeft.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

class DiaryLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boldFont: 1,
    };
  }
  setBold(n) {
    this.setState({ boldFont: n });
  }
  toggleList() {
    const inList = document.getElementById("inList");
    if (inList.style.display === "none") {
      inList.style.display = "flex";
    } else {
      inList.style.display = "none";
    }
  }
  render() {
    return (
      <div id="diaryLeftContainer">
        <div id="smallContainer">
          <span class="bold">DIARY</span>
          <div id="diaryList">
            <Link
              to="/diary"
              onClick={(() => this.setBold(1), this.toggleList)}
            >
              <li
                class="list"
                style={
                  this.state.boldFont === 1
                    ? { fontWeight: "bold" }
                    : { fontWeight: "" }
                }
              >
                내 다이어리
              </li>
            </Link>
            <ul class="toggleList" style={{ display: "block" }}>
              <Link to="/diary/r2" onClick={() => this.setBold(2)}>
                <li
                  class="list"
                  id="inList"
                  style={
                    this.state.boldFont === 2
                      ? { fontWeight: "bold" }
                      : { fontWeight: "" }
                  }
                >
                  내 일기장
                </li>
              </Link>
            </ul>
            <Link to="/diary/r3" onClick={() => this.setBold(3)}>
              <li
                class="list"
                style={
                  this.state.boldFont === 3
                    ? { fontWeight: "bold" }
                    : { fontWeight: "" }
                }
              >
                오잉
              </li>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DiaryLeft;
