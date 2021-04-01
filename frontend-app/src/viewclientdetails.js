import React from "react";
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const ViewUserDetails = _ => {
  const { state } = useLocation();

  return (
    <div class="userdetails">
      <div>
        <strong>Id:</strong> {state.users.id}{" "}
      </div>
      <div>
        <strong>Name:</strong> {state.users.name}{" "}
      </div>
      <div>
        <strong>Username:</strong> {state.users.username}{" "}
      </div>
      <div>
        <strong>Email:</strong> {state.users.email}{" "}
      </div>
      <div>
        <strong>Street:</strong> {state.users.address.street}{" "}
      </div>
      <div>
        <strong>Suite:</strong> {state.users.address.suite}{" "}
      </div>
      <div>
        <strong>City:</strong> {state.users.address.city}{" "}
      </div>
      <div>
        <strong>Zipcode:</strong> {state.users.address.zipcode}{" "}
      </div>
      <div>
        <strong>Lat:</strong> {state.users.address.geo.lat}{" "}
      </div>
      <div>
        <strong>Lng:</strong> {state.users.address.geo.lng}{" "}
      </div>
      <div>
        <strong>Phone:</strong> {state.users.phone}{" "}
      </div>
      <div>
        <strong>Website:</strong> {state.users.website}{" "}
      </div>
      <div>
        <strong>Company Name:</strong> {state.users.company.name}{" "}
      </div>
      <div>
        <strong>Company CatchPhrase:</strong> {state.users.company.catchPhrase}{" "}
      </div>
      <div>
        <strong>Company bs:</strong> {state.users.company.bs}{" "}
      </div>
      <div>
        <Button variant="contained" color="primary" href="#contained-buttons">
          <Link to={{ pathname: `/` }}>
            Voltar
        </Link>
        </Button>
      </div>
    </div>

  );

};


export default ViewUserDetails;