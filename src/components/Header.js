import React, { Component } from "react";
import CounterButton from "./CounterButton";

export class Header extends Component {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return false;
  //   }
  render() {
    console.log("Header");

    return (
      <div>
        <h1 className="f1">RoboFriend</h1>;
        <CounterButton />
      </div>
    );
  }
}

export default Header;
