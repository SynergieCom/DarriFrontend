import React from 'react';
import {Row} from "reactstrap";
import {useParams} from "react-router";
import EditUserForm from "../../components/dashboard/UsersManagement/EditUserForm";

function EditUser() {
    const {id} = useParams();
    return (
        <>
            <div className="content">
                <Row>
                    <EditUserForm id={id}/>
                </Row>
            </div>
        </>
);
}

export default EditUser;