import React from "react";
import AddUserForm from "../../components/dashboard/UsersManagement/AddUserForm";
import {Row} from "reactstrap";

function AddUser() {

    return (
        <>
            <div className="content">
                <Row>
                <AddUserForm/>
                </Row>
            </div>
        </>
    );
}

export default AddUser;
