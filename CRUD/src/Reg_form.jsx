import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reg_form() {
  let [user, setUser] = useState({
    name: "",
    age: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  return (
    <>
      <h1>Registration Form</h1>
      <div>
        <Row>
          <FormGroup>
            <Label>Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter Your Name"
              type="text"
            />
          </FormGroup>
        </Row>
        <FormGroup>
          <Label>Age</Label>
          <Input
            id="age"
            name="age"
            placeholder="Enter Your Age"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label>Address 1</Label>
          <Input id="Address" name="address" placeholder="1234 Main St" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input
            id="exampleAddress2"
            name="address2"
            placeholder="Apartment, studio, or floor"
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>City</Label>
              <Input id="city" name="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>State</Label>
              <Input id="state" name="state" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Pincode</Label>
              <Input id="pincode" name="pincode" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            Check me out
          </Label>
        </FormGroup>
        <Button>Sign in</Button>
      </div>
    </>
  );
}
