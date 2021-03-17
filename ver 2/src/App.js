import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import DiaryScreen from "./screens/diaryscreen";
import HomeScreen from "./screens/homescreen";
import HomeScreen2 from "./screens/homescreen2.js";
class App extends Component {
  render() {
    let chk = localStorage.getItem("check");
    let ttl = localStorage.getItem("total");
    if (chk == null) {
      localStorage.setItem("check", 1);
    } else {
      chk++;
      localStorage.setItem("check", chk);
    }
    if (ttl == null) {
      localStorage.setItem("total", 72398);
    } else {
      ttl++;
      localStorage.setItem("total", ttl);
    }
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/diary" component={DiaryScreen} />
          <Route path="/home" component={HomeScreen2}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
