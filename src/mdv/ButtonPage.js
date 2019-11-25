
import React, { Fragment } from "react";
import { MDBBtn ,MDBIcon } from "mdbreact";

const ButtonPage = () => {
  return (
    <Fragment>
    
      <MDBBtn color="secondary">Secondary</MDBBtn>
      <MDBBtn color="success">Success</MDBBtn>
      <MDBBtn gradient="aqua">Aqua</MDBBtn>
      <MDBBtn tag="a" size="lg" floating gradient="purple">
        <MDBIcon icon="bolt" />
      </MDBBtn>
     
    </Fragment>
  );
}

export default ButtonPage;