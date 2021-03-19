import React, { useEffect, useState } from "react";
import "./PhotoL.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

let OBJECT_BOLD = null;

const PhotoL = ({ screenState }) => {
  const changeToBold = (obj) => {
    let objPic = document.getElementById(obj);

    objPic.style.fontWeight = "bold";

    if (OBJECT_BOLD !== null && OBJECT_BOLD !== objPic) {
      OBJECT_BOLD.style.fontWeight = "";
    }
    OBJECT_BOLD = objPic;
  };

  useEffect(() => {
    //changeToBold(1);
  });

  const [boldFont, setBoldFont] = useState(1);

  return (
    <div id="mainDiv">
      <div>
        <h3>PHOTO ALBUM</h3>
        <hr />
      </div>

      <div>
        <ul>
          <Link to="/photo/r1" onClick={() => setBoldFont(1)}>
            <li
              id="1"
              style={
                boldFont === 1 ? { fontWeight: "bold" } : { fontWeight: "" }
              }
            >
              좋은 시간
            </li>
          </Link>
          <Link to="/photo/r2" onClick={() => setBoldFont(2)}>
            <li
              id="2"
              style={
                boldFont === 2 ? { fontWeight: "bold" } : { fontWeight: "" }
              }
            >
              좋은 사람들
            </li>
          </Link>
          <Link to="/photo/r3" onClick={() => setBoldFont(3)}>
            <li
              id="3"
              style={
                boldFont === 3 ? { fontWeight: "bold" } : { fontWeight: "" }
              }
            >
              좋은 추억
            </li>
          </Link>
          <Link to="/photo/r4" onClick={() => setBoldFont(4)}>
            <li
              id="4"
              style={
                boldFont === 4 ? { fontWeight: "bold" } : { fontWeight: "" }
              }
            >
              또 하나 알아간다..
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default PhotoL;
