import React, { Component } from 'react';
import api from './api'
import { Link } from "react-router-dom";


class UserList extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    try {
      const response = await api.get('');
      this.setState({ users: response.data })
    } catch (error) { console.log(error) }
  }

  
  render() {
    const { users } = this.state;
    const myObjStr = JSON.stringify(users);
    const obj = JSON.parse(myObjStr);
    console.log(myObjStr);
    console.log(JSON.parse(myObjStr));

    const listUsers = obj.map((user) =>
      <div key={user.toString()}>
        <Link
          to={
            {
              pathname: `/viewuserdetails/${user.id}`,
              state: { users: user },
            }
          }>
          {user.name}
        </Link>

      </div>
    );
    return (
      <div>
        <ul>
          {listUsers}
        </ul>
      </div>


    );

  };
}

export default UserList;
