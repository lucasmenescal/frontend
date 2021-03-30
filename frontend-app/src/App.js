import React, { Component } from 'react';
import api from './api'

class UserList extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({ users: response.data })
  }

  render() {
    var { users } = this.state;
    const myObjStr = JSON.stringify(users);
    const obj = JSON.parse(myObjStr);
    console.log(myObjStr);
    console.log(JSON.parse(myObjStr));


    const listUsers = obj.map((user) =>
      <div key={user.toString()}>
        <li>{user.name}</li>
        <li>{user.username}</li>
      </div>
    );
    return (
      <ul>{listUsers}</ul>
    );

  };
}

export default UserList;
