import React, {useEffect} from "react";

import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
import UserInformations from "../../components/dashboard/UserProfile/UserInformations";
import EditProfileUser from "../../components/dashboard/UserProfile/EditProfileUser";
import {useServerApi} from "../../hooks/useServerApi";

function UserProfile() {
    const id = localStorage.getItem('id');
    const  [user, err, reload] = useServerApi(`users/${id}`);
    const toRender = user;

    useEffect(() => {
        console.log("-> id", id);
        console.log("-> user", user);

    }, []);

    return (
        <>
            <div className="content">
                <Row>
                    <UserInformations user={toRender}/>
                    <EditProfileUser/>
                </Row>
            </div>
        </>
    );
}

export default UserProfile;
