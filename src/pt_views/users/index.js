import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserFormAdd from "./components/TheAddForm";
import UserEditForm from "./components/TheEditForm";
import UserDeleteForm from "./components/TheDeleteConfirm";
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
            count: 1,
            addNewUserModal: false,
            editNewUserModal: false,
            deleteNewUserModal: false,
            addNewUserDetail: {
                id: 0,
                email: "",
                fullname: "",
                password: "",
                password_confirmation: "",
            },
            editNewUserDetail: {
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
     * Open Edit Modal
     */
     openEditNewUserModal(userRecord) {
        this.initialUserForm('edit');
        this.setState({ 
            editNewUserDetail: userRecord,
            editNewUserModal: true, 
            loading: false 
        });
    }

    openDeleteNewUserModal(userRecord) {
        this.initialUserForm('edit');
        this.setState({ 
            editNewUserDetail: userRecord,
            deleteNewUserModal: true, 
            loading: false 
        });
    }


    /**
     * Add New User
     */
    addNewUser() {
        const {users, addNewUserDetail, count} = this.state;
        addNewUserDetail.id = count;
        users.push(addNewUserDetail);
        this.setState({
            loading: true,
            count: count + 1,
            errorPopup: true,
            users: users
        });
        
        this.onAddUpdateUserModalClose();
    }

    /**
     * Edit User
     */
     editNewUser(action) {
        const {users, editNewUserDetail} = this.state;
        console.log(editNewUserDetail);

        function isUserEdit(userRecord) {
            return userRecord.id === editNewUserDetail.id;
        }

        if (typeof action !== "undefined") {
            let isUserDeleted = delete users[users.findIndex(isUserEdit)];
            let userAfterDeleteds =  users.filter(function(item) {
                return item;
            });
            
            if (isUserDeleted) {
                this.setState({
                    loading: true,
                    errorPopup: true,
                    users: userAfterDeleteds
                });
            }
            
            this.onEditUpdateUserModalClose('delete');
        } else {
            console.log('edit', editNewUserDetail)
            users[users.findIndex(isUserEdit)] = {...editNewUserDetail};

            this.setState({
                loading: true,
                errorPopup: true,
                users: users
            });
            this.onEditUpdateUserModalClose();   
        }
    }

    /**
     * On Add & Update User Modal Close
     */
    onAddUpdateUserModalClose() {
        this.setState({ addNewUserModal: false });
    }

    /**
     * On Edit & Update User Modal Close
     */
     onEditUpdateUserModalClose() {
        this.setState({ 
            editNewUserModal: false,
            deleteNewUserModal: false 
        });
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

    /**
     * On Change Edit New User Details
     */
     onChangeEditNewUserDetails(key, value) {
        this.setState({
            editNewUserDetail: {
                ...this.state.editNewUserDetail,
                [key]: value,
            },
        });
    }

    initialUserForm(action) {
        this.setState({ errorPopup: false });
        this.setState({ errors: {} });
        if (typeof action !== "undefined") {
            this.setState({
                editNewUserDetail: {
                    ...this.state.editNewUserDetail,
                    email: "",
                    fullname: "",
                    password: "",
                    password_confirmation: "",
                }
            });
        } else {
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
    }

    render() {
    	const {users, addNewUserModal, editNewUserModal,deleteNewUserModal, editNewUserDetail, errors, addNewUserDetail, loading} = this.state;

        const lists = users.map((item) => 
            <ListUsers 
                key={item.fullname} 
                userRecord={item}
                onOpenDeleteNewUserModal={this.openDeleteNewUserModal.bind(this)}
                onOpenEditNewUserModal={this.openEditNewUserModal.bind(this)}></ListUsers>
        );
        
        return (
            <div className="page-content" style={{ backgroundColor: '#c7bbbb' }}> 
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
                />
                    <div style={{color:'red', textAlign: 'center'}}>User Page Demo</div>
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
                        variant="contained"
                          color='primary'
                          onClick={() => this.addNewUser()}
                      >Save</Button>
                      <Button
                        variant="contained"
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

                <Modal aria-labelledby="simple-modal-title"
                    isOpen={editNewUserModal}
                    toggle={() => this.onEditUpdateUserModalClose()}
                >
                    <div className="modal-size">
                    <ModalHeader
                        className="pt-modal-header"
                        toggle={() => this.onEditUpdateUserModalClose()}
                    >
                        <span>EditUser</span>
                    </ModalHeader>
                    <ModalBody className="modal-body">
                        <UserEditForm
                            errors={errors}
                            editNewUserDetails={editNewUserDetail}
                            onChangeEditNewUserDetails={this.onChangeEditNewUserDetails.bind(this)}
                        ></UserEditForm>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="contained"
                            color='primary'
                            onClick={() => this.editNewUser()}
                        >Update</Button>
                        <Button
                            variant="contained"
                            color='secondary'
                            onClick={() => this.onEditUpdateUserModalClose()}
                        >Cancel</Button>
                    </ModalFooter>
                    {loading && (
                        <div className="d-flex justify-content-center loader-overlay">
                            <CircularProgress />
                        </div>
                    )}
                    </div>
                </Modal>

                <Modal aria-labelledby="simple-modal-title"
                    isOpen={deleteNewUserModal}
                    toggle={() => this.onEditUpdateUserModalClose('delete')}
                >
                    <div className="modal-size">
                    <ModalHeader
                        className="pt-modal-header"
                        toggle={() => this.onEditUpdateUserModalClose('delete')}
                    >
                    <span>Are you sure delete this user ?</span>
                    </ModalHeader>
                    <ModalBody className="modal-body">
                        <UserDeleteForm
                            userRecord={editNewUserDetail}
                        ></UserDeleteForm>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="contained"
                            color='primary'
                            onClick={() => this.editNewUser('delete')}
                        >Delete</Button>
                        <Button
                            variant="contained"
                            color='secondary'
                            onClick={() => this.onEditUpdateUserModalClose('delete')}
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
