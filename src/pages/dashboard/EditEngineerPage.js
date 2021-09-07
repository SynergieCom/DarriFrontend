import React from 'react';
import {Row} from "reactstrap";
import {useParams} from "react-router";
import EditEngineerForm from "../../components/dashboard/EngineersManagement/EditEngineerForm";

export default function EditEngineerPage() {
    const {id} = useParams();
    return (
        <>
            <div className="content">
                <Row>
                    <EditEngineerForm id={id}/>
                </Row>
            </div>
        </>
    );
}

