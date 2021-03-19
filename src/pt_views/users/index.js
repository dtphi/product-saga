import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserFormAdd from "./components/TheAddForm";
import ListUsers from "./components/TheListUser";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import './style.css';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            errorPopup: false,
            loading: true,
            addNewUserModal: false,
            addNewUserDetail: {
                email: "",
                fullname: "",
                password: "",
                password_confirmation: "",
            },
            users: []
        };
    }

    /**
     * Open Add Modal
     */
    openAddNewUserModal() {
        this.initialUserForm();
        this.setState({ addNewUserModal: true, loading: false });
    }

    /**
     * Add New User
     */
    addNewUser() {
        const {users, addNewUserDetail} = this.state;
        users.push(addNewUserDetail);
        this.setState({
            loading: true,
            errorPopup: true,
            users: users
        });
        
        this.onAddUpdateUserModalClose();
    }

    /**
     * On Add & Update User Modal Close
     */
    onAddUpdateUserModalClose() {
        this.setState({ addNewUserModal: false });
    }

    /**
     * On Change Add New User Details
     */
    onChangeAddNewUserDetails(key, value) {
        this.setState({
            addNewUserDetail: {
                ...this.state.addNewUserDetail,
                [key]: value,
            },
        });
    }

    initialUserForm() {
        this.setState({ errorPopup: false });
        this.setState({ errors: {} });
        this.setState({
            addNewUserDetail: {
                ...this.state.addNewUserDetail,
                email: "",
                fullname: "",
                password: "",
                password_confirmation: "",
            },
        });
    }

    render() {
    	const {users, addNewUserModal, errors, addNewUserDetail, loading} = this.state;

        const lists = users.map((item) => 
            <ListUsers key={item.fullname} userRecord={item}></ListUsers>
        );
        
        return (
            <div className="page-content">
              <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
              />
            	<div>User Page Demo</div>
            	<div>
                  <Button
                    color='primary'
                    onClick={() => this.openAddNewUserModal()}
                  >Add User&nbsp;
                    <span className="plus">+</span>
                  </Button>
              </div>
            	
              <div className="user-list">
                  {lists}
              </div>
              <Modal aria-labelledby="simple-modal-title"
                    isOpen={addNewUserModal}
                    toggle={() => this.onAddUpdateUserModalClose()}
                >
                  <div className="modal-size">
                    <ModalHeader
                      className="pt-modal-header"
                        toggle={() => this.onAddUpdateUserModalClose()}
                    >
                        <span>AddUser</span>
                    </ModalHeader>
                    <ModalBody className="modal-body">
                      <UserFormAdd
                          errors={errors}
                          addNewUserDetails={addNewUserDetail}
                          onChangeAddNewUserDetails={this.onChangeAddNewUserDetails.bind(this)}
                      ></UserFormAdd>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                          color='primary'
                          onClick={() => this.addNewUser()}
                      >Save</Button>
                      <Button
                          color='secondary'
                          onClick={() => this.onAddUpdateUserModalClose()}
                      >Cancel</Button>
                    </ModalFooter>
                    {loading && (
                      <div className="d-flex justify-content-center loader-overlay">
                          <CircularProgress />
                      </div>
                    )}
                  </div>
                </Modal>
            </div>
        );
    }
}

export default connect(null)(UserList);
