import React, { Component } from "react";

import "../App.css";

const h3Style = {
  marginBottom: "0px"
};

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h3 style={h3Style} style={{ fontFamily: "Lobster, cursive" }}>
          Simple Wallet Design
        </h3>
      </div>
    );
  }
}
