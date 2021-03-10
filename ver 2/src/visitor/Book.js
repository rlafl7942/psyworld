import React, { useState } from "react";
import Home from "./images/Home.png";
import Profile1 from "./images/Profile1.PNG";
import "./Visitor.css";

const Book = ({ currentVisit }) => {
  const [comments, setComments] = useState([]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    if (inputText === "") {
      return;
    }
    const nextComments = comments.concat({
      name: "익명인",
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setComments(nextComments);
    setInputText("");

    const space = document.querySelector(`#space`);
    const spaceDiv = document.createElement("div");

    spaceDiv.innerHTML = "<br />";
    space.appendChild(spaceDiv);
  };

  const commentList = comments.map((comment, index) => (
    <div key={comment.id}>
      {comment.name} : {comment.text}
      <br />
      <br />
    </div>
  ));

  return (
    <>
      {/* <div>
        {currentVisit.name}: {currentVisit.text}
      </div> */}

      <div className="writed">
        {/*작성된 방명록 -- 2 -------*/}
        <div className="writedInfo">
          <span style={{ marginLeft: "2%" }}> No.{currentVisit.id}</span>
          <span style={{ marginLeft: "2%", color: "#15336F" }}>
            {currentVisit.name}
          </span>
          {/*<img src="../../images/home.png" style={{width: '16px', height: '16px', marginLeft:'1px'}}>*/}
          <img
            style={{
              width: "16px",
              height: "16px",
              marginLeft: "1px",
              display: "inline",
            }}
            src={Home}
            alt="Home"
          />
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
        <div className="writedImgAndText">
          <img className="writingProfileImg" src={Profile1} alt="profile1" />
          <textarea
            className="writedText"
            name="writedText"
            rows="10"
            cols="33"
            readOnly
          >
            {currentVisit.text}
          </textarea>
        </div>
        <div className="writeComment">
          <div id="parent2">{commentList}</div>

          <div>
            <textarea
              id="a2"
              className="commentText"
              name="guestText"
              rows="10"
              cols="33"
              value={inputText}
              onChange={(e) => onChange(e)}
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
              onClick={onClick}
            >
              확인
            </button>
          </div>
        </div>
      </div>
      <div id="space"></div>
    </>
  );
};

export default Book;
