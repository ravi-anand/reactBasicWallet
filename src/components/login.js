import React, { Component } from "react";
import "./css/button.css";
import "./css/input.css";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUId = this.onChangeUId.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      uId: '',
      pass: '',
    }
  }

  onChangeUId(e) {
    this.setState({
      uId: e.target.value
    });
  }

  onChangePass(e) {
    this.setState({
      pass: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.state.uId === "admin" &&  this.state.pass === "admin"){
        this.props.loginStatus(true);
    }
    else{
      alert("incorrect");
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 in-background">
              <form onSubmit={this.onSubmit}>
                <div className="group">
                  <input
                    type="text"
                    id="exampleInputEmail1"
                    value={this.state.uId}
                    onChange={this.onChangeUId}
                  />
                  <span class="highlight" />
                  <span class="bar" />
                  <label for="exampleInputEmail1">User Id</label>
                </div>
                <div className="group">
                  <input
                    type="password"
                    id="password"
                    value={this.state.pass}
                    onChange={this.onChangePass}
                  />
                  <span class="highlight" />
                  <span class="bar" />
                  <label for="exampleInputPassword1">Password</label>
                </div>
                <div className="form-check">
                  <button type="submit" className="btn btn-custom btn-green">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
