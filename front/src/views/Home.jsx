import React from "react";
import "./Home.css";

import Table from "../components/Table";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  tempData = [
    {
      id: 123,
      name: "maor",
      phone: "045345234",
      department: "מודיעין",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "0"
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
    }
  ];

  render() {
    return (
      <div className="container">
        <div className="mt-5 mx-auto text-center">
          <h2 className="my-4">טבלת הפניות הטענות והמענות</h2>
          <Table requests={this.tempData} />
        </div>
        <div className="text-start">
          <button className="btn addButton">
            <h1>+</h1>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
