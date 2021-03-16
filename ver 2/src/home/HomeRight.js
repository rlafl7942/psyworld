import React, { Component } from "react";
import "./HomeRight.css";
import img from "./image/미니룸.jpg";

const CreateList = (props) => {
  return (
    <div id="list">
      <span class={props.catalog === "사진첩" ? "photo" : "diary"}>
        {props.catalog}
      </span>
      <span>{props.title}</span>
    </div>
  );
};

class HomeRight extends Component {
  constructor(props) {
    super(props);
    this.state = { onelineSay: "" };
    this.setOnelineSay = this.setOnelineSay.bind(this);
    this.addOneLineSay = this.addOneLineSay.bind(this);
  }
  setOnelineSay(e) {
    this.setState({ onelineSay: e.target.value });
  }
  addOneLineSay() {
    const creating = document.getElementById("sayList");
    const li = document.createElement("li");
    li.innerHTML = `익명인 : ${this.state.onelineSay}`;
    creating.appendChild(li);
    this.setState({ onelineSay: "" });
  }
  render() {
    return (
      <div id="rightcontainer">
        <div id="news">
          <span class="bold">Updated news</span>
          <div id="newsBox">
            <div id="newsBoard">
              <CreateList catalog="사진첩" title="[스크랩] 나라는 사람은 " />
              <CreateList catalog="다이어리" title="김예리가 올린 다이어리" />
              <CreateList catalog="다이어리" title="김예리가 올린 다이어리" />
              <CreateList catalog="사진첩" title="변영화가 올린 사진" />
            </div>
            <div id="newsBoard" class="right">
              <div id="list">
                <span>다이어리 2/64</span>
                <span>사진첩 2/234</span>
              </div>
              <div id="list">
                <span>방명록 0/126</span>
              </div>
            </div>
          </div>
        </div>
        <div id="miniroom">
          <span class="bold">Miniroom</span>
          <img src={img} alt="miniroom" />
        </div>
        <div id="friendSay">
          <span class="bold">What Friends Say</span>
          <div id="inputSay">
            <span class="bold">Friends Say</span>
            <input
              placeholder="내용을 입력하세요."
              value={this.state.onelineSay}
              onChange={this.setOnelineSay}
            />
            <button onClick={this.addOneLineSay}>확인</button>
          </div>
          <div id="sayList">
            <li>김예리 : 들렸다갑니다용~ </li>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeRight;
