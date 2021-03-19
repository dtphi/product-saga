import React from 'react';
import Button from "@material-ui/core/Button";
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';
const TheUserList = ({
  userRecord
}) => (
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
            onClick={() => {console.log(userRecord)}}
            >Edit&nbsp;
        </Button>
        <Button
            color='secondary'
            onClick={() => {console.log(userRecord)}}
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
);

export default TheUserList;
