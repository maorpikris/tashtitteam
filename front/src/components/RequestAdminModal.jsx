import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class RequestAdminModal extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.request) {
      this.originalStatus = this.props.request.status;
      this.state = { status: this.props.request.status };
    }
  }

  handleClose = () => this.props.closeModal();

  render() {
    if (this.props.request) {
      return (
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>פנייה מספר {this.props.request.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>שם המגיש: {this.props.request.name}</h5>
            <h5>פלאפון: {this.props.request.phone}</h5>
            <h5>מחלקה: {this.props.request.department}</h5>
            <h5>תוכן התקלה:</h5>
            <p>{this.props.request.body}</p>
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
