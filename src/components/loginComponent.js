import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoginVisible: true, isRegisterVisible: false };
  }
  showLoginBox = () => {
    this.setState({ isLoginVisible: true, isRegisterVisible: false });
  };
  showRegistrationBox = () => {
    this.setState({ isLoginVisible: false, isRegisterVisible: true });
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="parent-container">
            <div className="toggle-div">
              <button
                className="btn btn-primary"
                id="loginbutton"
                onClick={this.showLoginBox}
              >
                Login
              </button>
              <button
                className="btn btn-danger"
                id="registerButton"
                onClick={this.showRegistrationBox}
              >
                Register
              </button>
            </div>
            <div className="center-div">
              {this.state.isLoginVisible && (
                <React.Fragment>
                  <LoginBox />
                  <RaisedButton
                    label="Login"
                    primary={true}
                    onClick={this.props.nextStep}
                    fullWidth
                  />
                </React.Fragment>
              )}
              {this.state.isRegisterVisible && <RegistrationBox />}
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default LoginComponent;

class LoginBox extends Component {
  render() {
    return (
      <div className="inner-center">
        <h4>Sign-in</h4>
        <TextField
          hintText="Enter your username"
          floatingLabelText="Username"
          type="text"
          fullWidth
          id="usernameTxt"
        />
        <br />
        <br />
        <TextField
          hintText="Enter your password"
          floatingLabelText="Password"
          type="password"
          fullWidth
          id="passwordTxt"
        />
        <br />
        <br />
        <br />

        <br />
      </div>
    );
  }
}

class RegistrationBox extends Component {
  render() {
    return (
      <div className="inner-center">
        <h4>Create your account</h4>
        <TextField
          hintText="Enter your username"
          floatingLabelText="Username"
          type="text"
          fullWidth
        />
        <br />
        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          type="email"
          fullWidth
        />
        <br />
        <TextField
          hintText="Enter your password"
          floatingLabelText="Password"
          type="password"
          fullWidth
        />
        <br />
        <TextField
          hintText="Confirm your password"
          floatingLabelText="Confirm Password"
          type="password"
          fullWidth
        />
        <br />
        <RaisedButton
          label="Register"
          primary={true}
          onClick={this.props.nextStep}
          fullWidth
        />
        <br />
      </div>
    );
  }
}
