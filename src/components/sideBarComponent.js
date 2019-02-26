import React, { Component } from "react";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.css";

class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile-div">
          <button
            className="btn btn-info"
            id="profile-btn"
            onClick={this.props.displayProfile}
          >
            Profile
          </button>
        </div>
        <div className="transfer-div">
          <button
            className=" btn btn-info"
            id="transfer-btn"
            onClick={this.props.displayTransaction}
          >
            Transaction
          </button>
        </div>
        <div className="statement-div">
          <button
            className="btn btn-info"
            id="statement-btn"
            onClick={this.props.displayStatement}
          >
            Statement
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
