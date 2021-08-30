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
import {useParams} from "react-router";
import CustomerDetailsComp from "../../components/dashboard/CustomersManagement/CustomerDetailsComp";
import CustomerPaymentsTable from "../../components/dashboard/CustomersManagement/CustomerContractsTable";
import CustomerContractsTable from "../../components/dashboard/CustomersManagement/CustomerContractsTable";

export default function CustomerDetails() {
    const {id} = useParams();
    const [customer, err, reload] = useServerApi(`customers/${id}`);


    return (
        <>
            <div className="content">
                <Row>
                    <CustomerDetailsComp user={customer}/>
                    <CustomerContractsTable/>

                </Row>
            </div>
        </>
    );
}

