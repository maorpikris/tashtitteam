import React from "react";
import "./Home.css";
import adminIcon from "../assets/admin.svg";

import Table from "../components/Table";
import ReactTooltip from "react-tooltip";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  onCreation() {
    fetch("/requests");
  }

  getRequests() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/requests/all").then(res =>
        res.json().then(data => setData(data))
      );
    });
  }
  tempData = [
    {
      id: 123,
      name: "maor",
      phone: "045345234",
      department: "מודיעין",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "0",
      created_at: "10/21/2002"
    },
    {
      name: "eitan",
      phone: "24352345",
      body: "asdfccvf",
      status: "1"
    },
    {
      name: "asd",
      phone: "24352345",
      body: "asdfccvf",
      status: "2"
    },
    {
      id: 123,
      name: "maor",
      phone: "045345234",
      department: "מודיעין",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "0",
      created_at: "10/21/2002"
    },
    {
      name: "eitan",
      phone: "24352345",
      body: "asdfccvf",
      status: "1"
    },
    {
      name: "asd",
      phone: "24352345",
      body: "asdfccvf",
      status: "2"
    },
    {
      id: 123,
      name: "maor",
      phone: "045345234",
      department: "מודיעין",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "0",
      created_at: "10/21/2002"
    },
    {
      name: "eitan",
      phone: "24352345",
      body: "asdfccvf",
      status: "1"
    },
    {
      name: "asd",
      phone: "24352345",
      body: "asdfccvf",
      status: "2"
    },
    {
      id: 123,
      name: "maor",
      phone: "045345234",
      department: "מודיעין",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "0",
      created_at: "10/21/2002"
    },
    {
      name: "eitan",
      phone: "24352345",
      body: "asdfccvf",
      status: "1"
    },
    {
      name: "asd",
      phone: "24352345",
      body: "asdfccvf",
      status: "2"
    },
    {
      id: 123,
      name: "maor",
      phone: "045345234",
      department: "מודיעין",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "0",
      created_at: "10/21/2002"
    }
  ];

  render() {
    return (
      <>
        <div className="text-start position-absolute top-0 start-0">
          <Link to="/report">
            <button className="btn addButton" data-tip data-for="registerTip">
              <h1>+</h1>
            </button>
          </Link>

          <ReactTooltip id="registerTip" place="bottom" effect="solid">
            הוסף פנייה
          </ReactTooltip>
        </div>
        <div className="container">
          <div className="mt-5 mx-auto text-center">
            <h2 className="my-4">טבלת הפניות הטענות והמענות</h2>

            <Table className="mb-5" requests={this.tempData} />
          </div>

          <div className="position-absolute bottom-0 end-0 mb-4 mx-4">
            {" "}
            <Link to="/login">
              <img
                src={adminIcon}
                alt=""
                style={{ height: 50 + "px", width: 50 + "px" }}
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
