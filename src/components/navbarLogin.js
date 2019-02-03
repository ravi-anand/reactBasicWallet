import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class NavbarLogin extends Component {

  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this);
  }

  Logout(e) {
    this.props.logout(false);
  }

  render() {
    return (
      <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top" style={{fontFamily: 'Lobster, cursive'}}>
            Simple Wallet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link to="/pay" className="nav-link js-scroll-trigger">
                  Pay
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/addMoney" className="nav-link js-scroll-trigger">
                  Add Balance
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/checkbalance" className="nav-link js-scroll-trigger">
                Check Balance
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#contact"
                  onClick={this.Logout}
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
      </div>
    );
  }
}
