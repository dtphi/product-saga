import React from 'react';
import {
  Form, FormGroup, Label
} from 'reactstrap';
const TheUserDeleteConfirm = ({
  userRecord
}) => (
  <div>
    <Form>
      <FormGroup>
        <Label for="userName">
          User name : {userRecord.fullname}
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="userEmail">
          Email : {userRecord.email}
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="userPassword">
          Password : {userRecord.password}
        </Label>
      </FormGroup>
    </Form>
  </div>
);

export default TheUserDeleteConfirm;
