import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dollar from "./dollar.png";

import Login from "./login";
import CheckBalance from "./checkbalance";
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
          <div className="col-md-5 offset-md-1">
            <h1>Cypher Wallet</h1>
            <p>Basic Wallet UI using React bootstrap123</p>
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
            <div className="app-list">
              <Link to="/pay" status={this.props.status}>
                <img src={Dollar} alt="" />
                <h1>Pay</h1>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app-list">
              <Link to="/addMoney">
                <img src={Dollar} alt="" />
                <h1>Add Balance</h1>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app-list">
            <Link to="/checkBalance">
              <img src={Dollar} alt="" />
              <h1>Check Balance</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
