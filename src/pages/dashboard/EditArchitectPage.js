import React from 'react';
import {Row} from "reactstrap";
import {useParams} from "react-router";
import EditArchitectForm from "../../components/dashboard/ArchitectsManagement/EditArchitectrForm";

export default function EditArchitectPage() {
    const {id} = useParams();
    return (
        <>
            <div className="content">
                <Row>
                    <EditArchitectForm id={id}/>
                </Row>
            </div>
        </>
    );
}

