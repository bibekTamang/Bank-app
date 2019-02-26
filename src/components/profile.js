import React, { Component } from "react";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.css";

class Profile extends Component {
  state = {
    isAddVisible: false,
    isDeleteVisible: false,
    isEditVisible: false,
    bankName: "",
    accountType: "",
    accountNo: ""
  };
  displayAdd = () => {
    this.setState({
      isAddVisible: true,
      isDeleteVisible: false,
      isEditVisible: false
    });
  };
  displayDelete = () => {
    this.setState({
      isAddVisible: false,
      isDeleteVisible: true,
      isEditVisible: false
    });
  };
  populateList = () => {
    const ids = this.props.fetchID;
    var selectText = document.getElementById("deleteAccountNO");
    for (var i = 0; i < selectText.options.length; i++) {
      selectText.remove(i);
    }

    for (var i = 0; i < ids.length; i++) {
      selectText.options.add(new Option(ids[i]));
    }
  };

  displayEdit = () => {
    this.setState({
      isAddVisible: false,
      isDeleteVisible: false,
      isEditVisible: true
    });
  };

  handelBankName = event => {
    const bankName = event.target.value;
    this.setState({ bankName });
  };
  handelAccountType = event => {
    const accountType = event.target.value;
    this.setState({ accountType });
  };
  handelAccountNo = event => {
    const accountNo = event.target.value;
    this.setState({ accountNo });
  };

  render() {
    return (
      <React.Fragment>
        <div className="pContent-div">
          <div className="leftContent">
            <div>{this.props.fetchinfo}</div>
          </div>
          <div className="rightContent">
            <div className="rightContentMenu">
              <button
                className="btn btn-light"
                id="addAccountbtn"
                onClick={this.displayAdd}
              >
                Add Account
              </button>
              <button
                className="btn btn-light"
                id="removeAccountbtn"
                onClick={this.displayDelete}
              >
                Remove Account
              </button>
              <button
                className="btn btn-light"
                id="editProfilebtn"
                onClick={this.displayEdit}
              >
                Edit Profile
              </button>
            </div>
            <div className="right-body">
              {this.state.isAddVisible && (
                <div>
                  <label>Bank Name</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bank Name"
                    id="bankName"
                    onChange={this.handelBankName}
                  />
                  <label>Account Type</label>
                  <br />
                  <select
                    className="custom-select"
                    id="selectAccountType"
                    onChange={this.handelAccountType}
                  >
                    <option defaultValue>Select Type</option>
                    <option value="Savings">Savings</option>
                    <option value="Current">Current</option>
                    <option value="FixDeposit">FixDeposit</option>
                  </select>
                  <br />
                  <label>Account Number</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Account number"
                    id="newAccountNumber"
                    onChange={this.handelAccountNo}
                  />
                  <br />
                  <button
                    className="btn btn-info"
                    onClick={this.props.onAddAccount}
                  >
                    Add
                  </button>
                </div>
              )}
              {this.state.isDeleteVisible && (
                <React.Fragment>
                  <label>Account Number</label>
                  <br />
                  <select
                    className="custom-select"
                    id="deleteAccountNO"
                    onClick={this.populateList}
                  />
                  <br />
                  <br />
                  <button
                    className="btn btn-info"
                    onClick={() =>
                      this.props.onDelete(
                        document.getElementById("deleteAccountNO").value
                      )
                    }
                  >
                    Delete
                  </button>
                </React.Fragment>
              )}
              {this.state.isEditVisible && <div>Hello from Edit</div>}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
