import React, { Component } from "react";
//import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

import DiaryLeft from "./DiaryLeft";
import DiaryR from "./DiaryR";

class DiaryRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <DiaryLeft />
          <DiaryR />
        </BrowserRouter>
      </div>
    );
  }
}

export default DiaryRoutes;
