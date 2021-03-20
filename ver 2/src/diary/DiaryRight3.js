import React, { Component } from "react";
import "./DiaryRight.css";

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      nextId: 1,
      DiaryInfo: [
        {
          id: 0,
          title: "오잉",
          content: "피자먹고싶당..",
        },
      ],
    };

    this.setNew = this.setNew.bind(this);
    this.addDiary = this.addDiary.bind(this);
  }
  setNew(e) {
    if (e.target.id === "diaryTitle") this.setState({ title: e.target.value });
    else this.setState({ content: e.target.value });
  }
  addDiary() {
    const newInfo = this.state.DiaryInfo.concat({
      id: this.state.nextId,
      title: this.state.title,
      content: this.state.content,
    });
    this.setState({ DiaryInfo: newInfo });
    this.setState({ title: "", content: "", nextId: this.state.nextId + 1 });
  }
  render() {
    const Diary = this.state.DiaryInfo.map((diary) => (
      <CreateDiary new={diary} key={diary.id} />
    ));
    Diary.reverse();
    return (
      <>
        <div id="writeContainer">
          <div id="write">
            <div id="writeAbout">
              <span style={{ marginLeft: "8%", marginRight: "8%" }}>
                제목 :
              </span>
              <textarea
                placeholder="제목을 입력하세요."
                id="diaryTitle"
                rows="1"
                cols="54"
                minlength="1"
                value={this.state.title}
                onChange={this.setNew}
              />
            </div>
            <div id="writeAbout">
              <span style={{ marginRight: "4%" }}>다이어리 내용 :</span>
              <textarea
                placeholder="내용을 입력하세요."
                id="diaryContent"
                rows="5"
                cols="54"
                minlength="1"
                value={this.state.content}
                onChange={this.setNew}
              />
            </div>
          </div>
          <button onClick={this.addDiary}>등록하기</button>
        </div>
        {Diary}
      </>
    );
  }
}

class CreateDiary extends Component {
  constructor(props) {
    super(props);
    this.state = { cmt: "" };

    this.setCmt = this.setCmt.bind(this);
    this.addCmt = this.addCmt.bind(this);
  }
  setCmt(e) {
    this.setState({ cmt: e.target.value });
  }
  addCmt(e) {
    const cmtList = e.target.parentNode;
    const p = document.createElement("p");
    p.innerHTML = `익명인 :  ${this.state.cmt}`;
    cmtList.appendChild(p);
    this.setState({ cmt: "" });
  }
  render() {
    return (
      <div id="diary">
        <div id="content">
          <span class="bold">{this.props.new.title}</span>
          <br />
          <br />
          <div>{this.props.new.content}</div>
          <br />
          <hr style={{ borderBottom: "1px dashed #A6A6A6", width: "100%" }} />
          <div id="setting">공개설정 : 전체공개</div>
          <hr style={{ borderBottom: "1px solid grey", width: "100%" }} />
        </div>
        <div id="comment" class="comment">
          <div id="cmtWrite">
            댓글 입력 :
            <input
              id="cmt"
              placeholder="댓글을 입력하세요."
              value={this.state.cmt}
              onChange={this.setCmt}
            />
            <button onClick={this.addCmt}>등록</button>
            {/*</div>
          <div id="cmtList" class="cmtList">*/}
          </div>
        </div>
      </div>
    );
  }
}

class DiaryRight3 extends Component {
  render() {
    return (
      <div id="diaryRightContainer">
        <Writing />
      </div>
    );
  }
}

export default DiaryRight3;
