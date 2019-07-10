import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import fetchFriend from '../../store/actions/friendsAction';
import FriendList from './frienList';
import AddFriend from './addFriend';

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
class Login extends Component {
  componentDidMount() {
    this.props.fetchFriend();
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <NavLink exact to="/">Friend</NavLink>
        <NavLink exact to="/addfriend"> Add Friend</NavLink>
        <Route exact path="/addfriend" render={()=><h1>Hello</h1>} />
        <Div>
          {friends.map(friend => (
            <FriendList friend={friend} key={friend.id} />
          ))}
        </Div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friend.friends,
  error: state.friend.error,
});

const mapDistatchToProps = { fetchFriend };
export default connect(mapStateToProps, mapDistatchToProps)(Login);
