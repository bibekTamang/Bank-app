import React, { Component } from "react";
import SideBar from "./sideBarComponent";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.css";
import Profile from "./profile";
import Transaction from "./transaction";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransactionVisible: false,
      isStatementVisible: false,
      isProfileVisible: false,
      bankAccount: [
        { id: "109908", type: "savings", name: "SBI", balance: 2000 },
        { id: "278765", type: "savings", name: "ICICI", balance: 3000 }
      ]
    };
  }
  fetchId = () => {
    const id = this.state.bankAccount.map(c => c.id);
    return id;
  };
  addAccount = () => {
    const bankName = this.refs.profile.state.bankName;
    const accountType = this.refs.profile.state.accountType;
    const accountNo = this.refs.profile.state.accountNo;
    if (bankName === "" || accountType === "" || accountNo === "") {
      console.log("Fields cannot be empty");
    } else {
      this.setState({
        bankAccount: [
          ...this.state.bankAccount,
          { id: accountNo, type: accountType, name: bankName, balance: 4000 }
        ]
      });
    }
  };
  handelsDelete = id => {
    const bankAccount = this.state.bankAccount.filter(e => e.id !== id);
    this.setState({ bankAccount });
    console.log(id);
  };
  handelTransfer = amount => {
    const formAccountno = this.state.bankAccount.findIndex(
      this.refs.transaction.fromAccount
    );
    const toAccountno = this.state.bankAccount.findIndex(
      this.refs.transaction.toAccount
    );
    if (formAccountno !== -1 || toAccountno !== -1) {
      const fromBalance = this.state.bankAccount[formAccountno].balance;
      const toBalance = this.state.bankAccount[toAccountno].balance;
      if (parseInt(fromBalance) < parseInt(amount)) {
        alert("Insufficient funds!");
      } else {
        const fromDeduct = fromBalance - amount;
        const toAdd = parseInt(toBalance) + parseInt(amount);
        alert(
          "Transfered  Rs" +
            amount +
            "/-  from Account No  " +
            this.state.bankAccount[formAccountno].id +
            "  to Account No  " +
            this.state.bankAccount[toAccountno].id
        );
        const bankAccount = { ...this.state.bankAccount };
        bankAccount[formAccountno].balance = fromDeduct;
        bankAccount[toAccountno].balance = toAdd;
        //this.setState({ bankAccount });
      }
    } else {
      alert("Valid Accounts Required");
    }
  };
  fetchInfo = () => {
    {
      return (
        <React.Fragment>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Account No</th>
                <th scope="col">Type</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            {this.state.bankAccount.map(c => (
              <tbody>
                <tr>
                  <th scope="row">{c.id}</th>
                  <td>{c.type}</td>
                  <td>{c.name}</td>
                  <td>{c.balance}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </React.Fragment>
      );
    }
  };
  displayTransaction = () => {
    this.setState({
      isTransactionVisible: true,
      isProfileVisible: false,
      isStatementVisible: false
    });
  };
  displayStatement = () => {
    this.setState({
      isTransactionVisible: false,
      isProfileVisible: false,
      isStatementVisible: true
    });
  };
  displayProfile = () => {
    this.setState({
      isTransactionVisible: false,
      isProfileVisible: true,
      isStatementVisible: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="title-div">
          <text id="logout-text">Logout</text>
        </div>
        <div className="Center-parent-div">
          <div className="content">
            <SideBar
              displayTransaction={this.displayTransaction}
              displayStatement={this.displayStatement}
              displayProfile={this.displayProfile}
            />
          </div>
          <div className="sidebar">
            {this.state.isTransactionVisible && (
              <Transaction onTransfer={this.handelTransfer} ref="transaction" />
            )}
            {this.state.isStatementVisible && (
              <Statement ref="statement" fetchid={this.fetchId()} />
            )}
            {this.state.isProfileVisible && (
              <Profile
                fetchinfo={this.fetchInfo()}
                onAddAccount={this.addAccount}
                ref="profile"
                fetchID={this.fetchId()}
                onDelete={this.handelsDelete}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;

class Statement extends Component {
  state = {
    id: "12"
  };
  // updateList = () => {};
  componentDidMount() {
    const ids = this.props.fetchid;
    var selectText = document.getElementById("statementAccountNo");
    for (var i = 0; i < ids.length; i++) {
      selectText.options.add(new Option(ids[i]));
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="Stminner-div">
          <text>Select an Account</text>
          <br />
          <select className="custom-select" id="statementAccountNo">
            <option defaultValue="Select Account No">Account No</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}
