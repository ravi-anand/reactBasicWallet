import React, { Component } from "react";

import "../App.css";

const divMargin = {
  margin: '29px',
  background: 'transparent'
};
export default class AddMoney extends Component {
  render() {
    return (
      <div>
        <div className="row" style={divMargin}>
          <div className=" offset-md-4 offset-xs-2 offset-sm-2 center in-background">
          <p>Enter Amount to Add</p>
          <form>
            <div class="group">
              <input type="text" required />
              <span class="highlight" />
              <span class="bar" />
              <label>Enter amount</label>
            </div>
            <div className="">
              <button type="submit" className="btn btn-custom btn-green">
                <span>Submit</span>
              </button>
            </div>
          </form>
          </div>
          </div>
      </div>
    );
  }
}
