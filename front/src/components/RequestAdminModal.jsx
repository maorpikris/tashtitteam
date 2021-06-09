import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";


class RequestAdminModal extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.request) {
      console.log(this.props.request.status);
      this.originalStatus = this.props.request.status;
      this.state = { status: this.props.request.status };
    }
  }

  handleClose = () => {
    this.props.bottomCallback()
      event.preventDefault()
    this.props.closeModal()};

  statusChanged = async event => {
    await this.setState({ status: event.target.value });
    console.log({
      newState: event.target.value,
      requestId: this.props.request.id
        });

    axios({
      method: 'post',
      url: 'http://localhost:3001/requests/updatestate',
      data: {
      newState: event.target.value,
      requestId: this.props.request.id
        }
    })
  };
  
  render() {
    if (this.props.request) {
      return (
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>פנייה מספר {this.props.request.id}</Modal.Title>
            <p>{this.props.request.created_at}</p>
          </Modal.Header>
          <Modal.Body>
            <h5>שם המגיש: {this.props.request.name}</h5>
            <h5>פלאפון: {this.props.request.phone}</h5>
            <h5>מחלקה: {this.props.request.department}</h5>
            <h5>תוכן התקלה:</h5>
            <p>{this.props.request.body}</p>

            <select
              onChange={this.statusChanged}
              name="department"
              defaultValue={this.props.request.status}
              className="form-select mb-3"
              required
              aria-required="true"
            >
              <option value="0">בהמתנה</option>
              <option value="1">עובדים על זה</option>
              <option value="2">פתור</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              שמור
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return <></>;
    }
  }
}

export default RequestAdminModal;
