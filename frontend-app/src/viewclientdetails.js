import React from "react";
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';

const ViewUserDetails = _ => {
  const { state } = useLocation();

  return (
    <ListGroup>
      <ListGroup.Item>
        <strong>Id:</strong> {state.users.id}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Name:</strong> {state.users.name}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Username:</strong> {state.users.username}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Email:</strong> {state.users.email}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Street:</strong> {state.users.address.street}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Suite:</strong> {state.users.address.suite}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>City:</strong> {state.users.address.city}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Zipcode:</strong> {state.users.address.zipcode}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Lat:</strong> {state.users.address.geo.lat}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Lng:</strong> {state.users.address.geo.lng}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Phone:</strong> {state.users.phone}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Website:</strong> {state.users.website}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Company Name:</strong> {state.users.company.name}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Company CatchPhrase:</strong> {state.users.company.catchPhrase}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Company bs:</strong> {state.users.company.bs}{" "}
      </ListGroup.Item>
      <ListGroup.Item>
        <Button variant="contained" color="primary" href="#contained-buttons">
          <Link to={{ pathname: `/` }}>
            Voltar
        </Link>
        </Button>
      </ListGroup.Item>
    </ListGroup>

  );

};


export default ViewUserDetails;