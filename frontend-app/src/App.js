import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import axios from 'axios';

class UserList extends Component {
  state = {
    users: [],
  }
  listUser
  user;
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  handleEdit(id) {
    return () => {
      var newEditListUser = this.state.users[id-1];
      console.log(newEditListUser.name);
      this.setState({ newEditListUser });
    }
  };

  handleDelete(id) {
    return () => {
      const newListUser = delete this.state.users[id - 1];
      console.log(this.state.users);
      this.setState({ newListUser })
    }
  }



  render() {
    const listUsers = this.state.users.map((user) =>

      <tbody key={user.id}>
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
            }>
              <Button><Icon.Search />
              </Button>
            </Link>
            <Button onClick={this.handleEdit(user.id)}><Icon.Pencil /></Button>
            <Button onClick={this.handleDelete(user.id)}><Icon.Trash /></Button>
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