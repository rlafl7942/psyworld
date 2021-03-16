import React, { Component } from "react";
import "./HomeLeft.css";
import img_1 from "./image/1.jpg";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "기쁨" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div id="today">
        TODAY IS...
        <select
          id="feelings"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="happy">기쁨</option>
          <option value="angry">화남</option>
          <option value="excited">신남</option>
          <option value="hungry">배고픔</option>
          <option value="sleepy">졸림</option>
          <option value="annoying">짜증남</option>
        </select>
      </div>
    );
  }
}

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoValue: "어떻할거ㄴF구.... OTL",
      editValue: "",
    };
    this.ClickedEdit = this.ClickedEdit.bind(this);
  }
  ClickedEdit() {
    const input = document.createElement("input");
    const button = document.createElement("button");
    const edit = document.getElementById("editView");
    button.style.width = "40px";
    button.style.height = "20px";
    button.innerHTML = "등록";
    input.placeholder = "내용을 입력하세요.";
    edit.appendChild(input);
    edit.appendChild(button);
    button.addEventListener("click", () => {
      this.setState({ infoValue: input.value });
      edit.removeChild(input);
      edit.removeChild(button);
    });
  }
  render() {
    return (
      <>
        <div id="info">
          {this.state.infoValue}
          <div id="editView"></div>
        </div>

        <div id="edit">
          <span style={{ color: "#298FA6" }}>▶</span>
          <span style={{ fontWeight: "bold" }} onClick={this.ClickedEdit}>
            EDIT
          </span>
          <span style={{ color: "#298FA6" }}>▶</span>
          <span style={{ fontWeight: "bold" }}>HISTORY</span>
          <span style={{ marginLeft: "40%", color: "#A6A6A6" }}>▲ ▼</span>
        </div>
      </>
    );
  }
}

class PsyInfo extends Component {
  render() {
    return (
      <div id="psyInfo">
        <span style={{ fontSize: "14px", color: "#298FA6" }}>싸이월드</span>
        <span style={{ fontSize: "8px", color: "#E66E28" }}>
          frontend@psyworld.com
        </span>
      </div>
    );
  }
}

class HomeLeft extends Component {
  render() {
    return (
      <div id="leftcontainer">
        <Today />
        <img src={img_1} width="50%" height="50%" />
        <Info />
        <PsyInfo />
      </div>
    );
  }
}
export default HomeLeft;
