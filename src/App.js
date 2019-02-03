import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./components/navbar";
import NavbarLogin from "./components/navbarLogin";
import Footer from "./components/footer";
import Home from "./components/home";
import AddMoney from "./components/addMoney";
import Login from "./components/login";
import Pay from "./components/pay";
import CheckBalance from "./components/checkbalance";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };

    this.handleDataLogIn = this.handleDataLogIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const lin = sessionStorage.getItem("isLoggedIn");
    console.log("login status :: ", typeof lin);
    if (lin === "true") {
      this.setState({
        status: true
      });
    } else if (lin === "false") {
      sessionStorage.setItem("isLoggedIn", false);
      console.log("login status 2:: ", sessionStorage.getItem("isLoggedIn"));

      this.setState({
        status: false
      });
    } else {
      sessionStorage.setItem("isLoggedIn", false);
      console.log("login status 2:: ", sessionStorage.getItem("isLoggedIn"));

      this.setState({
        status: false
      });
    }
  }

  handleDataLogIn(data) {
    this.setState(
      {
        status: data
      },
      () => {
        if (this.state.status) {
          sessionStorage.setItem("isLoggedIn", true);
          console.log(sessionStorage.getItem("isLoggedIn"));
        }
      }
    );
  }

  logout(data) {
    this.setState(
      {
        status: false
      },
      () => {
        if (this.state.status === false) {
          sessionStorage.setItem("isLoggedIn", false);
          console.log(sessionStorage.getItem("isLoggedIn"));
        }
      }
    );
  }

  render() {
    return (
      <Router>
        <div>
          <div className="container app ">
            {this.state.status ? (
              <NavbarLogin logout={this.logout} />
            ) : (
              <Navbar />
            )}
          </div>
          <div className="app-margin">
            <div className="app-list-background">
              <div className="row baner-padding">
                <Switch>
                  <Route
                    exact path="/"
                    render={props => <Home status={this.state.status} loginStatus1={this.handleDataLogIn} />}                    />}
                  />
                  <Route exact path="/login" component={Login} />
                  <Route path="/pay" render={props => <Pay status={this.state.status} />} />
                  <Route path="/checkBalance" render={props => <CheckBalance status={this.state.status} />} />
                  <Route path="/addMoney" render={props => <AddMoney status={this.state.status} />}/>
                </Switch>
              </div>
              </div>
              </div>
              <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
