import React, { Component } from 'react';
import api from './api'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Button from '@material-ui/core/Button';
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

      <tbody key={user.toString()}>
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <Link to={
                {
                  pathname: `/viewuserdetails/${user.id}`,
                  state: { users: user },
                }
              }><Button><Icon.Search />
            </Button>
            </Link>
            <Button><Icon.Pencil /></Button>
            <Button><Icon.Trash /></Button>
          </td>
        </tr>
      </tbody>
    );

    return (
      <div className='app'>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">ACTIONS</th>
              <th scope="col">CADASTRO</th>
            </tr>
          </thead>
          {listUsers}
        </table >
      </div>
    );

  };
}

export default UserList;
