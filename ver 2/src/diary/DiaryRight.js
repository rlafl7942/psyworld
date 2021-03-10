import React, { Component } from "react";
import "./DiaryRight.css";

const AddCmt = (event) => {
  const num = event.target.getAttribute("num");
  const cmt = document.getElementById(`cmt${num}`);
  const cmtList = document.getElementById(`cmtList${num}`);
  const p = document.createElement("p");
  p.innerHTML = cmt.value;
  cmtList.appendChild(p);
  cmt.value = "";
};
let cnt = 2;
const AddDiary = () => {
  const title = document.getElementById("diaryTitle");
  const content = document.getElementById("diaryContent");
  const back = document.getElementById("container");
  const after = document.getElementById("diary");
  const newDiary = document.createElement("div");
  newDiary.setAttribute("id", "diary");
  newDiary.innerHTML = `
    <div id="content">
          <span class="bold">${title.value}</span>
          <br></br>
          ${content.value}
          <hr style={{ borderBottom: "1px dashed #A6A6A6" }} />
          <div id="setting">공개설정 : 전체공개</div>
          <hr style={{ borderBottom: "1px solid grey" }} />
        </div>
        <div id="comment${cnt}" class="comment">
          <div id="cmtWrite">
            댓글 입력 :
            <input id="cmt${cnt}" />
            <button onClick={AddCmt} num={${cnt}}>등록</button>
          </div>
          <div id="cmtList${cnt}" class="cmttList">
            
          </div>
        </div>
    `;
  back.insertBefore(newDiary, after);
  cnt++;
  title.value = "";
  content.value = "";
};

class Writing extends Component {
  render() {
    return (
      <div id="writeContainer">
        <div id="write">
          <div id="writeAbout">
            <span style={{ marginLeft: "8%", marginRight: "8%" }}>제목 :</span>
            <textarea id="diaryTitle" rows="1" cols="54" minlength="1" />
          </div>
          <div id="writeAbout">
            <span style={{ marginRight: "4%" }}>다이어리 내용 :</span>
            <textarea id="diaryContent" rows="5" cols="54" minlength="1" />
          </div>
        </div>
        <button onClick={AddDiary}>등록하기</button>
      </div>
    );
  }
}

class CreateDiary extends Component {
  render() {
    return (
      <div id="diary">
        <div id="content">
          <span class="bold">김수현의 일기</span>
          <br></br>
          <br></br>
          나때문에 슬퍼하고, 죽고싶어해야돼, 후회도 해야돼, <br></br>누굴봐도
          나만 생각해야되고, 무엇보다 날 절대 의심해선 안돼, <br></br>나한테
          참견해서도 안돼 귀찮으니까, 욕도 잘한다구. <br></br>하지만 내가 필요로
          할땐 항상 있어야돼, 애정결핍이니까, <br></br>눈치가 빨라야돼 난
          다혈질이니까, 가르치려들면 그땐 죽어, <br></br>아...... 약 좀 사다줘,
          난 잔병치레가 많거든.<br></br>
          부정맥도 있어 심실상성 빈맥이라구 수술도 받아야해. <br></br>
          <br></br>자, 이제 날 사랑해봐. <br></br>못할거면 매정하게 버려.{" "}
          <br></br>서럽게 울어라도보게.<br></br>
          <br></br>
          <hr style={{ borderBottom: "1px dashed #A6A6A6" }} />
          <div id="setting">공개설정 : 전체공개</div>
          <hr style={{ borderBottom: "1px solid grey" }} />
        </div>
        <div id="comment1" class="comment">
          <div id="cmtWrite">
            댓글 입력 :
            <input id="cmt1" />
            <button onClick={AddCmt} num={1}>
              등록
            </button>
          </div>
          <div id="cmtList1" class="cmtList">
            <p>퍼가염ㅋㅋ</p>
            <p>퍼가염ㅋㅋ</p>
            <p>퍼가염ㅋㅋ</p>
          </div>
        </div>
      </div>
    );
  }
}

class DiaryRight extends Component {
  render() {
    return (
      <div id="container">
        <Writing />
        <CreateDiary />
      </div>
    );
  }
}

export default DiaryRight;
