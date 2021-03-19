import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 1,
    };
  }
  changetoggle = (num) => {
    this.setState({ toggle: num });
  };
  render() {
    return (
      <React.Fragment>
        <Link to="/home" onClick={() => this.changetoggle(1)}>
          <button
            style={{
              backgroundColor: this.state.toggle === 1 ? "white" : "#298fa6",
              color: this.state.toggle === 1 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(1)}
          >
            홈
          </button>
        </Link>
        <Link to="/profile" onClick={() => this.changetoggle(2)}>
          <button
            style={{
              backgroundColor: this.state.toggle === 2 ? "white" : "#298fa6",
              color: this.state.toggle === 2 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(2)}
          >
            프로필
          </button>
        </Link>
        <Link to="/diary" onClick={() => this.changetoggle(3)}>
          <button
            style={{
              backgroundColor: this.state.toggle === 3 ? "white" : "#298fa6",
              color: this.state.toggle === 3 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(3)}
          >
            다이어리
          </button>
        </Link>
        <Link to="/photo" onClick={() => this.changetoggle(4)}>
          <button
            style={{
              backgroundColor: this.state.toggle === 4 ? "white" : "#298fa6",
              color: this.state.toggle === 4 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(4)}
          >
            사진첩
          </button>
        </Link>
        <Link to="/visitors" onClick={() => this.changetoggle(5)}>
          <button
            style={{
              backgroundColor: this.state.toggle === 5 ? "white" : "#298fa6",
              color: this.state.toggle === 5 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(5)}
          >
            방명록
          </button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Btn;
