import React, { Component } from "react";
//import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

import PhotoR1 from "./PhotoR1";
import PhotoR2 from "./PhotoR2";
import PhotoR3 from "./PhotoR3";
import PhotoR4 from "./PhotoR4";

class PhotoR extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path="/photo" component={PhotoR1} exact />
        <Route path="/photo/r1" component={PhotoR1} />
        <Route path="/photo/r2" component={PhotoR2} />
        <Route path="/photo/r3" component={PhotoR3} />
        <Route path="/photo/r4" component={PhotoR4} />
      </div>
    );
  }
}

export default PhotoR;
