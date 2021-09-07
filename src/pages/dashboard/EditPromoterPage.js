import React from 'react';
import {Row} from "reactstrap";
import {useParams} from "react-router";
import EditEngineerForm from "../../components/dashboard/EngineersManagement/EditEngineerForm";
import EditPromoterForm from "../../components/dashboard/PromotersManagement/EditPromoterForm";

export default function EditPromoterPage() {
    const {id} = useParams();
    return (
        <>
            <div className="content">
                <Row>
                    <EditPromoterForm id={id}/>
                </Row>
            </div>
        </>
    );
}

