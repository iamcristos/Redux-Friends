import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
    width: 25%;
    border: 1px solid #1B998B;
    h2{

    }
`;

const Buttons = styled(Button)`
    margin: .2rem;
    margin-left: 20%;
    width: 60%;
    &:hover {
        background-color: #F9C80E
    }
`;

const FriendList = ({ friend }) => (
  <Div>
    <h2>{friend.name}</h2>
    <p>{friend.age}</p>
    <p>{friend.email}</p>
    <Buttons color="success" size="sm">Update</Buttons>
    {' '}

    <Buttons color="danger" size="sm">Delete</Buttons>
  </Div>
);

export default FriendList;
