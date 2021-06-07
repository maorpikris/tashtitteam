import React from "react";

class ReportProblemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: "",
      phoneNum: "",
      department: "0",
      content: ""
    };
  }

  formChanged = async event => {
    const field = event.target.name;
    const value = event.target.value;

    await this.setState({ [field]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1 className="mt-5">דיווח תקלה</h1>
        <div className="card mx-auto mt-5" style={{ width: 33 + "vw" }}>
          <div className="m-4">
            <form>
              <div className="mb-3">
                <input
                  onChange={this.formChanged}
                  type="email"
                  className="form-control"
                  name="senderName"
                  placeholder="שם הפונה"
                />
              </div>

              <div className="mb-3">
                <input
                  onChange={this.formChanged}
                  type="tel"
                  className="form-control"
                  name="phoneNum"
                  placeholder="מספר פלאפון"
                />
              </div>

              <select
                onChange={this.formChanged}
                name="department"
                defaultValue="0"
                className="form-select mb-3"
              >
                <option value="0">בחר ענף</option>
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
