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
        <button
          style={{
            backgroundColor: this.state.toggle === 1 ? "white" : "#298fa6",
          }}
          onClick={() => this.changetoggle(1)}
        >
          <Link
            to="/home"
            style={{
              color: this.state.toggle === 1 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(1)}
          >
            홈
          </Link>
        </button>
        <button
          style={{
            backgroundColor: this.state.toggle === 2 ? "white" : "#298fa6",
          }}
          onClick={() => this.changetoggle(2)}
        >
          <Link
            to="/profile"
            style={{
              color: this.state.toggle === 2 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(2)}
          >
            프로필
          </Link>
        </button>
        <button
          style={{
            backgroundColor: this.state.toggle === 3 ? "white" : "#298fa6",
          }}
          onClick={() => this.changetoggle(3)}
        >
          <Link
            to="/diary"
            style={{
              color: this.state.toggle === 3 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(3)}
          >
            다이어리
          </Link>
        </button>
        <button
          style={{
            backgroundColor: this.state.toggle === 4 ? "white" : "#298fa6",
          }}
          onClick={() => this.changetoggle(4)}
        >
          <Link
            to="/photo"
            style={{
              color: this.state.toggle === 4 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(4)}
          >
            사진첩
          </Link>
        </button>
        <button
          style={{
            backgroundColor: this.state.toggle === 5 ? "white" : "#298fa6",
          }}
          onClick={() => this.changetoggle(5)}
        >
          <Link
            to="/visitor"
            style={{
              color: this.state.toggle === 5 ? "#298fa6" : "white",
            }}
            onClick={() => this.changetoggle(5)}
          >
            방명록
          </Link>
        </button>
      </React.Fragment>
    );
  }
}

export default Btn;
