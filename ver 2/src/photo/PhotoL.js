import React, { Component, useEffect } from "react";
import "./PhotoL.css";

let OBJECT_BOLD = null;

const PhotoL = () => {
  const changeToBold = (obj) => {
    let objPic = document.getElementById(obj);

    objPic.style.fontWeight = "bold";

    if (OBJECT_BOLD !== null && OBJECT_BOLD !== objPic) {
      OBJECT_BOLD.style.fontWeight = "";
    }
    OBJECT_BOLD = objPic;
  };

  useEffect(() => {
    changeToBold(1);
  });

  return (
    <div onLoad={() => changeToBold(1)}>
      <div>
        <h3>PHOTO ALBUM</h3>
        <hr />
      </div>

      <div>
        <ul>
          <li>
            <a href="#" id="1" onClick={() => changeToBold(1)}>
              좋은 시간
            </a>
          </li>
          <li>
            <a href="#" id="2" onClick={() => changeToBold(2)}>
              좋은 사람들
            </a>
          </li>
          <li>
            <a href="#" id="3" onClick={() => changeToBold(3)}>
              좋은 추억
            </a>
          </li>
          <li>
            <a href="#" id="4" onClick={() => changeToBold(4)}>
              또 하나 알아간다..
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhotoL;
