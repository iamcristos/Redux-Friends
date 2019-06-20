import React, { Component } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    console.log('hello')
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <p>Hello</p>
        <Button color="danger" onClick={this.toggle} />
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        </Modal>
      </div>
    );
  }
}

export default AddFriend;
