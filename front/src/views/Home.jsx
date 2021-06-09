import React, {useEffect} from "react";
import "./Home.css";
import adminIcon from "../assets/admin.svg";
import axios from "axios";

import Table from "../components/Table";
import ReactTooltip from "react-tooltip";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    }
  }

  topCallback = () => {
    axios.get(`http://localhost:3001/requests/all`)
    .then(res => {
      const requests = res.data;
      console.log(res.data)
      this.setState({requests: requests})
    })
  }

  componentWillMount(){
    axios.get(`http://localhost:3001/requests/all`)
    .then(res => {
      const requests = res.data;
      console.log(res.data)
      this.setState({requests: requests})
    })
  }


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

            <Table className="mb-5" 
            middleCallback = {this.topCallback}
            requests={this.state.requests} />
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
