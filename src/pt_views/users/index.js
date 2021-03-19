import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserFormAdd from "./components/TheAddForm";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";

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
            }
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
        this.setState({
            loading: true,
            errorPopup: true,
        });
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
        if (key === "logo_thumbnail") {
            this.convertBase64(value);
        } else {
            this.setState({
                addNewUserDetail: {
                    ...this.state.addNewUserDetail,
                    [key]: value,
                },
            });
        }
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
    	const {addNewUserModal, errors, addNewUserDetail, loading} = this.state;
        
        return (
            <div>
            	<div>List uers async moment</div>
            	<div className="button-add-new-user">
                  <button
                      onClick={() => this.openAddNewUserModal()}
                      color="primary"
                      className="caret btn-add-new"
                  >
                      <div className="gig-button text-white bg-black button-open-card-form add-new-seeker">
                          
                          AddUser
                          &nbsp;
                          <span className="plus">+</span>
                      </div>
                  </button>
              </div>
            	<div>
            		<Modal
                    isOpen={addNewUserModal}
                    toggle={() => this.onAddUpdateUserModalClose()}
                >
                    <ModalHeader
                        toggle={() => this.onAddUpdateUserModalClose()}
                    >
                        <span className="text-uppercase black thin user-font-size-header">AddUser</span>
                    </ModalHeader>
                    <ModalBody>
                      <UserFormAdd
                          errors={errors}
                          addNewUserDetails={addNewUserDetail}
                          onChangeAddNewUserDetails={this.onChangeAddNewUserDetails.bind(this)}
                      ></UserFormAdd>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                          className="text-white gig-button orange  line-height-1"
                          onClick={() => this.addNewUser()}
                      >Save</Button>
                      <Button
                          className="text-white gig-button black btn-cancel-user-color line-height-1"
                          onClick={() => this.onAddUpdateUserModalClose()}
                      >Cancel</Button>
                    </ModalFooter>
                    {loading && (
                      <div className="d-flex justify-content-center loader-overlay">
                          <CircularProgress />
                      </div>
                    )}
                </Modal>
            	</div>
            </div>
        );
    }
}

export default UserList;
