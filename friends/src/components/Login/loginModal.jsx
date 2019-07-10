import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody,
  ModalFooter, Form, FormGroup, Label, Input,
} from 'reactstrap';
import loginRequest from '../../store/actions';


class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
    this.textInput = React.createRef();
    this.textPassword = React.createRef();
    this.toggle = this.toggle.bind(this);
    this.loginPost = this.loginPost.bind(this);
  }

  componentDidUpdate() {
    const { login } = this.props;
    if (login) {
      this.props.history.push('/');
    }
  }

  loginPost(e) {
    e.preventDefault();
    const username = this.textInput.current.value;
    const password = this.textPassword.current.value;
    this.props.loginRequest(username, password);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const { modal } = this.state;
    const { error } = this.props;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Proceed To Login</Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Kindly Login</ModalHeader>
          <ModalBody>
            {error ? <p>{error}</p> : null}
            <Form onSubmit={e => this.loginPost(e)}>
              <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input
                  type="email"
                  name="email"
                  innerRef={this.textInput}
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  innerRef={this.textPassword}
                />
              </FormGroup>
              {/* <Button onClick={e => this.loginPost(e)}>Submit</Button> */}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => this.loginPost(e)}>Login</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login.login,
  error: state.login.error,
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
