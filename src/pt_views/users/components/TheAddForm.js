import React from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';
const AddNewUserForm = ({
  addNewUserDetails, onChangeAddNewUserDetails, errors
}) => (
  <Form>
    <FormGroup>
      <Label for="userName">
        User name :
      </Label>
      <Input
        className="thin"
        type="text"
        name="fullname"
        id="userName"
        value={addNewUserDetails.fullname}
        onChange={e => onChangeAddNewUserDetails('fullname', e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <Label for="userEmail">
        Email :
      </Label>
      <Input
        className="thin"
        type="email"
        name="email"
        id="userEmail"
        onChange={e => onChangeAddNewUserDetails('email', e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <Label for="userPassword">
        Password :
      </Label>
      <Input
        className="thin"
        type="password"
        name="password"
        id="userPassword"
        value={addNewUserDetails.type}
        onChange={e => onChangeAddNewUserDetails('password', e.target.value)}
      />
    </FormGroup>
  </Form>
);

export default AddNewUserForm;
