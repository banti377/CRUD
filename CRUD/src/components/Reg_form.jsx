import React, { useState } from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Form,
  Table,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reg_form() {
  let [user, setUser] = useState({
    name: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    check: "",
  });

  let [userData, setUserData] = useState([]);
  let [isUpdate, setIsUpdate] = useState(false);
  let [index, setIndex] = useState(null);

  // to get data from input
  function getData(e) {
    setUser({ ...user, [e?.target?.name]: e?.target?.value });
  }

  // Reset Form
  function resetForm() {
    setUser({
      name: "",
      age: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      check: "",
    });
  }

  // add object(user state) into array(userData)
  function submitHandler() {
    // Check if any required fields are empty
    if (
      !user.name ||
      !user.age ||
      !user.address ||
      !user.city ||
      !user.state ||
      !user.pincode ||
      !user.check
    ) {
      // Display an error message or handle the situation as needed
      alert("Please fill in all required fields");
      return;
    }
    if (isUpdate) {
      userData.splice(index, 1, user);
      setUserData([...userData]);
      resetForm();
      setIsUpdate(false);
    } else {
      setUserData([...userData, user]);
      resetForm();
    }
  }

  // to update data
  function updateHandler(ele, index) {
    setUser(ele);
    setIsUpdate(true);
    setIndex(index);
  }

  // to remove data from array (delete)
  function deleteHandler(index) {
    // by splice
    userData.splice(index, 1);
    setUserData([...userData]);
  }

  // Function to delete all data
  function deleteAllHandler() {
    setUserData([]);
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <Form className="d-flex justify-content-center flex-column w-50 gap-2 p-4 bordered rounded-3 m-4">
          <h1>Registration Form</h1>
          <Row>
            <FormGroup>
              <Label>Name</Label>
              <Input
                value={user.name}
                id="name"
                name="name"
                placeholder="Enter Your Name"
                type="text"
                onChange={getData}
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label>Age</Label>
            <Input
              value={user.age}
              id="age"
              name="age"
              placeholder="Enter Your Age"
              type="number"
              onChange={getData}
            />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input
              value={user.address}
              id="address"
              name="address"
              placeholder="Enter Your Add"
              onChange={getData}
            />
          </FormGroup>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>City</Label>
                <Input
                  value={user.city}
                  id="city"
                  name="city"
                  onChange={getData}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>State</Label>
                <Input
                  value={user.state}
                  id="state"
                  name="state"
                  onChange={getData}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Pincode</Label>
                <Input
                  value={user.pincode}
                  id="pincode"
                  name="pincode"
                  onChange={getData}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
              checked={user.check}
              onChange={getData}
            />
            <Label check for="exampleCheck">
              Check me out
            </Label>
          </FormGroup>
          <Button onClick={submitHandler}>
            {isUpdate ? "Update" : "Submit"}
          </Button>
        </Form>
      </div>

      {userData.length > 0 && (
        <Table className="mt-5" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>age</th>
              <th>address</th>
              <th>city</th>
              <th>state</th>
              <th>pincode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e?.name}</td>
                <td>{e?.age}</td>
                <td>{e?.address}</td>
                <td>{e?.city}</td>
                <td>{e?.state}</td>
                <td>{e?.pincode}</td>
                <th key={`action-${i}`}>
                  <Button color="danger" onClick={() => deleteHandler(i)}>
                    Delete
                  </Button>
                  <Button
                    className="ms-2"
                    color="info"
                    onClick={() => updateHandler(e, i)}
                  >
                    Update
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="8" className="text-center">
                <Button color="danger" onClick={deleteAllHandler}>
                  Delete All
                </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
      {userData.length === 0 && <h1>Data Not Found....!</h1>}
    </>
  );
}

// // by filter
// //   let arr = userData.filter((e, i) => {
// //     return i !== index;
// //   });
// //   setUserData(arr);
