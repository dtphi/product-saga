import React from 'react';
import Button from "@material-ui/core/Button";
import {
  Form, FormGroup, Label
} from 'reactstrap';
const TheUserList = ({
  userRecord, onOpenEditNewUserModal, onOpenDeleteNewUserModal
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
          <Button
              color='primary'
              onClick={() => onOpenEditNewUserModal(userRecord)}
              >Edit&nbsp;
          </Button>
          <Button
              color='secondary'
              onClick={() => onOpenDeleteNewUserModal(userRecord)}
              >Delete&nbsp;
          </Button>
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

export default TheUserList;
