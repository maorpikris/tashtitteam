import React from "react";
import axios from "axios";

import RequestAdminModal from "../components/RequestAdminModal";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, currentRequest: undefined };
  }

  statusToString = status => {
    if (status == 0) {
      return "בהמתנה";
    } else if (status == 1) {
      return "עובדים על זה";
    } else {
      return "פתור";
    }
  };

  openAdminModal = async request => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const fullRequest = await axios.get(`base/requests/${request.id}`, {
        headers: {
          Authorization: token
        }
      });
    }

    await this.setState({ currentRequest: request });
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">שם</th>
              <th scope="col">פלאפון</th>
              <th scope="col">מחלקה</th>
              <th scope="col">סטטוס</th>
            </tr>
          </thead>
          <tbody>
            {this.props.requests.map((request, i) => {
              return (
                <tr onClick={() => this.openAdminModal(request)} key={i}>
                  <td>{request.id || i}</td>
                  <td>{request.name}</td>
                  <td>{request.phone}</td>
                  <td>{request.department}</td>
                  <td
                    className={`${request.status == 1 ? "table-warning" : ""} ${
                      request.status == 2 ? "table-success" : ""
                    }`}
                  >
                    {this.statusToString(request.status)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <RequestAdminModal
          show={this.state.show}
          closeModal={() => this.setState({ show: false })}
          request={this.state.currentRequest}
        />
      </>
    );
  }
}

export default Table;
