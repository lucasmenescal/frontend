import React, { Component } from 'react';
import api from './api'

class App extends Component{
  state={
    users: [],
  }

  async componentDidMount(){
    const response = await api.get('');
    
    this.setState({ users: response.data })
  }

  render(){
    const { users } = this.state;
    console.log(users);

    {users.map( user => (
      <li key={user.name.id}>
        <h2>
          <strong>Nome: </strong>
          {user.name.id}
        </h2>
      </li>
    ))}
    return(
      <div>
        <h1>Listagem</h1>
      </div>
    );
  };
};

export default App;
