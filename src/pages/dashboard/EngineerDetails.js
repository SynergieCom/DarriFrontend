import React, {useEffect} from "react";

import {
    Row,
} from "reactstrap";

import {useServerApi} from "../../hooks/useServerApi";
import {useParams} from "react-router";
import ArchitectDetailsComp from "../../components/dashboard/ArchitectsManagement/ArchitectDetailsComp";
import ArchitectPaymentsTable from "../../components/dashboard/ArchitectsManagement/ArchitectPaymentsTable";
import EngineerDetailsComp from "../../components/dashboard/EngineersManagement/EngineerDetailsComp";
import EngineerPaymentsTable from "../../components/dashboard/EngineersManagement/EngineerPaymentsTable";

export default function EngineerDetails() {
    const {id} = useParams();
    const [engineer, err, reload] = useServerApi(`engineers/${id}`);


    const payments = engineer?.Payments;
    return (
        <>
            <div className="content">
                <Row>
                    <EngineerDetailsComp user={engineer}/>
                    <EngineerPaymentsTable payments={payments}/>

                </Row>
            </div>
        </>
    );
}

