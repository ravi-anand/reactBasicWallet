import React, { Component } from "react";

import "../App.css";

const divMargin = {
  margin: '29px',
  background: 'transparent'
};
export default class CheckBalance extends Component {
  render() {
    return (
      <div>
        <h1>CheckBalance</h1>
        <div className="row" style={divMargin}>
          <div className=" offset-md-4 offset-xs-2 offset-sm-2 center in-background">
          <p>Click Button to check Balance</p>
          <div className="">
            <button type="submit" className="btn btn-custom btn-green">
              <span>Check Balance</span>
            </button>
          </div>
          </div>
          </div>
      </div>
    );
  }
}
