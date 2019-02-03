import React, { Component } from "react";

import "../App.css";
import "./css/input.css";
import "./css/button.css";

const divMargin = {
  margin: '29px',
  background: 'transparent'
};

export default class Pay extends Component {

  render() {
    if(this.props.status){
      console.log("i'm here. ");
    return (
      <div>
        <div className="row" style={divMargin}>
          <div className="col-md-12 in-background">
            <form>
              <div class="group">
                <input type="text" required />
                <span class="highlight" />
                <span class="bar" />
                <label>Enter Receiptent Address</label>
              </div>
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
  else{
    console.log("i'm here.2222222222222");

    return null;
  }
  }
}
