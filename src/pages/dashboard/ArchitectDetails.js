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

import {useServerApi} from "../../hooks/useServerApi";
import {useParams} from "react-router";
import CustomerContractsTable from "../../components/dashboard/CustomersManagement/CustomerContractsTable";
import ArchitectDetailsComp from "../../components/dashboard/ArchitectsManagement/ArchitectDetailsComp";
import ArchitectPaymentsTable from "../../components/dashboard/ArchitectsManagement/ArchitectPaymentsTable";

export default function ArchitectDetails() {
    const {id} = useParams();
    const [architect, err, reload] = useServerApi(`architects/${id}`);


    const payments = architect?.Payments;
    return (
        <>
            <div className="content">
                <Row>
                    <ArchitectDetailsComp user={architect}/>
                    <ArchitectPaymentsTable payments={payments}/>

                </Row>
            </div>
        </>
    );
}

