import React from "react";
import axios from "axios";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

import PatternLock from "pattern-lock-js";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    const t = this;

    const lock = new PatternLock("#lock", {
      onPattern: function(pattern) {
        t.setState({ password: pattern });
        lock.success();
      }
    });
  }

  login = async () => {
    if (this.state.username && this.state.password) {
      axios.post("http://localhost:3001/admins/login", this.state).then(res => {
        if (res.status == 200 || res.status == 204) {
          window.localStorage.setItem("token", res.data);
          Swal.fire({
            title: "ברוך הבא אדמין יקר",
            icon: "success",
            confirmButtonText: `תודה`
          }).then(r => (window.location.href = "http://localhost:3000"));
        }
      }).catch(err => {
        Swal.fire({
          title: "טעות בפרטים",
          icon: "error",
          confirmButtonText: `באסה`
        });
      })
    }
  };

  render() {
    return (
      <>
        <div className="container mt-5 text-center">
          <h4>התחברות לאנשי תשתיות</h4>
          <div className="mx-auto mt-5" style={{ width: 20 + "vw" }}>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="שם משתמש"
              value={this.state.username}
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
          </div>
          <svg
            className="patternlock"
            id="lock"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 400 + "px", height: 400 + "px" }}
          >
            <g className="lock-actives"></g>
            <g className="lock-lines"></g>
            <g className="lock-dots">
              <circle cx="20" cy="20" r="4" />
              <circle cx="50" cy="20" r="4" />
              <circle cx="80" cy="20" r="4" />
              4 <circle cx="20" cy="50" r="4" />
              <circle cx="50" cy="50" r="4" />
              <circle cx="80" cy="50" r="4" />
              4 <circle cx="20" cy="80" r="4" />
              <circle cx="50" cy="80" r="4" />
              <circle cx="80" cy="80" r="4" />
            </g>
          </svg>
          <br />
          <button onClick={() => this.login()} className="btn btn-primary">
            התחבר
          </button>
          <script src="patternlock.js"></script>
        </div>
      </>
    );
  }
}

export default Login;
