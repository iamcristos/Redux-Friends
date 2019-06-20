import React from 'react';

const authenticate = Component => Login => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ login: true });
    }
  }

  render() {
    const { login } = this.state;
    return (
      <div>
        {login ? <Component {...this.props} />
          : <Login {...this.props} />}
      </div>
    );
  }
};

export default authenticate;
