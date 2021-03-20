import React, { Component } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

import DiaryRight from "./DiaryRight";
import DiaryRight2 from "./DiaryRight2";
import DiaryRight3 from "./DiaryRight3";

class DiaryR extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path="/diary" component={DiaryRight} exact />
        <Route path="/diary/r2" component={DiaryRight2} />
        <Route path="/diary/r3" component={DiaryRight3} />
      </div>
    );
  }
}

export default DiaryR;
