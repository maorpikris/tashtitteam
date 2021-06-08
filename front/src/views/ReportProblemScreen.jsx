import React from "react";
import axios from "axios";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

class ReportProblemScreen extends React.Component {
  initialState = {
    senderName: "a",
    phoneNum: "",
    department: "",
    content: ""
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  formSubmitted = async event => {
    event.preventDefault();
    //const res = await axios.post("url/requests", this.state);
    this.setState(this.initialState);
    Swal.fire({
      title: "דיווח נוסף בהצלחה",
      text: "תודה על הדיווח נתפנה בהקדם לטפל בבעיה.",
      icon: "success",
      confirmButtonText: `אחלה`
    }).then(r => (window.location.href = "http://localhost:3000"));

    // if (res.status === 200) {
    //   Swal.fire({
    //     title: "דיווח נוסף בהצלחה",
    //     text: "תודה על הדיווח נתפנה בהקדם לטפל בבעיה.",
    //     icon: "success"
    //   });
    // }
  };

  formChanged = async event => {
    const field = event.target.name;
    const value = event.target.value;

    await this.setState({ [field]: value });
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="mt-5">דיווח תקלה</h1>
        <div className="card mx-auto mt-5" style={{ width: 33 + "vw" }}>
          <div className="m-4">
            <form onSubmit={this.formSubmitted}>
              <div className="mb-3">
                <input
                  onChange={this.formChanged}
                  type="text"
                  required
                  className="form-control"
                  name="senderName"
                  placeholder="שם הפונה"
                />
              </div>

              <div className="mb-3">
                <input
                  onChange={this.formChanged}
                  type="tel"
                  required
                  className="form-control"
                  name="phoneNum"
                  placeholder="מספר פלאפון"
                  pattern="[0-9]{10}"
                />
              </div>

              <select
                onChange={this.formChanged}
                name="department"
                defaultValue="0"
                className="form-select mb-3"
                required
                aria-required="true"
              >
                <option value="">בחר ענף</option>
                <option value="משוב ובקרה">משוב ובקרה</option>
                <option value="מודיעין">מודיעין</option>
                <option value="אבטחה">אבטחה</option>
              </select>

              <textarea
                onChange={this.formChanged}
                className="form-control mb-3"
                name="content"
                rows="3"
                placeholder="נושא הפנייה"
                required
              ></textarea>

              <button type="submit" className="btn btn-primary">
                שלח
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportProblemScreen;
