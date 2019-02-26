import React, { Component } from "react";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.css";

class Transaction extends Component {
  state = {
    isTransferVisible: false
  };
  displayTransfer = () => {
    this.setState({
      isTransferVisible: true
    });
  };
  fromAccount(ac) {
    return ac.id === document.getElementById("fromAccountNo").value;
  }
  toAccount(ac) {
    return ac.id == document.getElementById("toAccountNo").value;
  }
  render() {
    return (
      <React.Fragment>
        <div className="tMenuBar-div">
          <button
            className="btn btn-light"
            id="Tbtn"
            onClick={this.displayTransfer}
          >
            Transfer
          </button>
        </div>
        <div className="Tcontent">
          {this.state.isTransferVisible && (
            <React.Fragment>
              <div className="Tcontent-inner">
                <text>From</text>
                <text>To</text>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Account number"
                  id="fromAccountNo"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Account number"
                  id="toAccountNo"
                />
                <text>Amount</text>
                <text>Security Pin</text>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Amount"
                  id="transferAmount"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Pin"
                  id="pin"
                />
              </div>
              <div className="proceedBtn">
                <button
                  className="btn btn-info"
                  onClick={() =>
                    this.props.onTransfer(
                      document.getElementById("transferAmount").value
                    )
                  }
                >
                  Proceed
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Transaction;
