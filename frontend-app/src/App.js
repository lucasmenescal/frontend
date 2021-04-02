import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Button, Modal, Form, ModalBody } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import ModalEditUser from './modalEdit';


/* Puxa os dados da API*/
class UserList extends Component {
  state = {
    users: [],
    show: false,
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
  /* Edita o cadastro do cliente localmente */
  handleEdit(id) {
    return () => {
      var newEditListUser = this.state.users[id - 1];
      this.setState({ newEditListUser });
    }
  };
  /* Deleta o cadastro do cliente localmente */
  handleDelete(id) {
    return () => {
      const newListUser = delete this.state.users[id - 1];
      this.setState({ newListUser })
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  
  handleModal() {

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
            <Link to={`/viewuserdetails/${user.id}`}>
              <Button><Icon.Search />
              </Button>
            </Link>
          </td>
          <td>
            <Button onClick={ }><Icon.Pencil /></Button>
            <Modal>
              <ModalBody>
                
                  <Form onSubmit={this.handleEdit(user.id)}>
                    <label>
                      Nome:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Enviar" />
                  </Form>
                
              </ModalBody>
            </Modal>
          </td>
          <td>
            <Button onClick={this.handleDelete(user.id)}><Icon.Trash /></Button>  
          </td>
        </tr>
      </tbody >
    );

    return (
      /* Cabeçalho da 1a Tela */
      <div className='app'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">DETAILS</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
              <th scope="col">
                <Button>Cadastro</Button>
              </th>
            </tr>
          </thead>
          {listUsers}
        </table >
      </div>
    );

  };
}

export default UserList;