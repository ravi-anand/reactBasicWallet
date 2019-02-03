import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dollar from "./dollar.png";

import Login from "./login";
import "../App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleDataLogIn1 = this.handleDataLogIn1.bind(this);
  }

  handleDataLogIn1(data) {
    this.props.loginStatus1(data);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-5 offset-md-1" style={{ color: "white" }}>
            <h1 style={{ fontFamily: "Lobster, cursive", paddingTop: "75px" }}>
              Simple Wallet
            </h1>
            <p>Basic Wallet UI using React bootstrap</p>
            <p>To login use User: admin Password: admin</p>
          </div>
          <div className="col-md-5 offset-md-1 ">
            {this.props.status ? (
              <div />
            ) : (
              <Login loginStatus={this.handleDataLogIn1} />
            )}
          </div>
        </div>
        <div className="row home serviceList">
          <div className="col-md-4">
            <Link to="/pay" status={this.props.status}>
              <div className="app-list">
                <img src={Dollar} alt="" />
                <h1>Pay</h1>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/addMoney">
              <div className="app-list">
                <img src={Dollar} alt="" />
                <h1>Add Balance</h1>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/checkBalance">
              <div className="app-list">
                <img src={Dollar} alt="" />
                <h1>Check Balance</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
