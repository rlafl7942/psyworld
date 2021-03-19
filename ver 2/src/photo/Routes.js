import React, { Component } from "react";
//import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

import PhotoR from "./PhotoR";
import PhotoR1 from "./PhotoR1";
import PhotoL from "./PhotoL";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <PhotoL />
          <PhotoR />
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
