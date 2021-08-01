import React from 'react';
import {Row} from "reactstrap";
import ChangesPassword from "../../components/dashboard/Setings/ChangesPassword";
import DisableUserAccount from "../../components/dashboard/Setings/DisableUserAccount";
import {useParams} from "react-router";

function Settings() {
    const id = localStorage.getItem('id');
    return (
        <>
            <div className="content">
                <Row>
                    <ChangesPassword id={id}/>
                    <DisableUserAccount id={id}/>
                </Row>
            </div>
        </>);
}

export default Settings;