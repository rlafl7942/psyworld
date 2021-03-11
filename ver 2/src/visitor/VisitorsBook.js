import React, { useState } from "react";
import "./Visitor.css";
import Book from "./Book";
import Profile1 from "./images/Profile1.PNG";

const VisitorsBook = ({ photo }) => {
  const [visits, setVisits] = useState([
    {
      id: 1,
      name: "부정빈",
      text: "오 오 오 늘 늘 늘 도 도 도 어 어 어 김 김 김 없 없 없",
    },
    { id: 2, name: "김예리", text: "기능..기능 왜 안돼?" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    if (inputText === "") {
      return;
    }
    const nextVisits = visits.concat({
      name: "익명인",
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setVisits(nextVisits);
    setInputText("");
  };

  const visitList = visits.map((visit, index) => (
    <Book currentVisit={visits[index]} key={visit.id}>
      {/*{visit.name} : {visit.text}*/}
    </Book>
  ));

  visitList.reverse();

  console.log(visits.length);
  console.log(visits[visits.length - 1]);
  return (
    <div className="container">
      <div>
        <WritingZone
          inputText={inputText}
          onChange={onChange}
          onClick={onClick}
        />
      </div>
      {/*<input value={inputText} onChange={onChange} />*/}
      {/*<button onClick={onClick}>추가</button>*/}
      <div>{visitList}</div>
      {/*<Book currentVisit={visits[visits.length - 1]} />*/}
    </div>
  );
};

const WritingZone = ({ inputText, onChange, onClick }) => {
  return (
    <>
      {/* <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button> */}

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
            <img className="writingProfileImg" src={Profile1} alt="profile1" />
            <textarea
              id="innerGuest"
              className="inputText"
              name="guestText"
              rows="10"
              cols="33"
              onChange={onChange}
              value={inputText}
            ></textarea>
          </div>

          <button
            type="button"
            style={{
              position: "relative",
              float: "right",
              marginRight: "3%",
              marginTop: "2.5%",
              //height: "100px",
            }}
            onClick={onClick}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default VisitorsBook;