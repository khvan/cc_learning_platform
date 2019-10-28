import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


const FormPage = (props) => {
  const config = {
    width: "100px",
    height: "300px",
    floating: true,
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center py-4">Subscribe</p>
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormCardEmailEx"
              className="grey-text font-weight-light"
            >
              Your email
            </label>
            <input
              type="email"
              id="defaultFormCardEmailEx"
              className="form-control"
            />
            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;