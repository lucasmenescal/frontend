import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from './App';
import ViewUserDetails from './viewclientdetails';



export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={UserList} />
      <Route path="/viewuserdetails/:id" component={ViewUserDetails} />
      
    </Router>
  );
}