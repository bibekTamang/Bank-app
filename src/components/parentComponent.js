import React, { Component } from "react";
import LoginPage from "./loginComponent";
import HomePage from "./homeComponent";
class ParentComponent extends Component {
  state = {
    step: 1,
    username: "Bibek",
    password: "123"
  };

  //go to next page
  nextStep = () => {
    const { step } = this.state;
    var uname = document.getElementById("usernameTxt").value;
    var pass = document.getElementById("passwordTxt").value;
    if (uname !== this.state.username || pass !== this.state.password) {
      alert("Invalid UserName or Password!");
    } else {
      this.setState({ step: step + 1 });
    }
  };

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <LoginPage nextStep={this.nextStep} />;
      case 2:
        return <HomePage />;
    }
  }
}

export default ParentComponent;
