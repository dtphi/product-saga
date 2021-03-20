import React from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';
const TheEditUserForm = ({
  editNewUserDetails, onChangeEditNewUserDetails
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
        value={editNewUserDetails.fullname}
        onChange={e => onChangeEditNewUserDetails('fullname', e.target.value)}
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
        value={editNewUserDetails.email}
        onChange={e => onChangeEditNewUserDetails('email', e.target.value)}
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
        value={editNewUserDetails.type}
        onChange={e => onChangeEditNewUserDetails('password', e.target.value)}
      />
    </FormGroup>
  </Form>
);

export default TheEditUserForm;
