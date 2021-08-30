import React from 'react';
import {Row} from "reactstrap";
import {useParams} from "react-router";
import EditCustomerForm from "../../components/dashboard/CustomersManagement/EditCustomerForm";

function EditCustomer() {
    const {id} = useParams();
    return (
        <>
            <div className="content">
                <Row>
                    <EditCustomerForm id={id}/>
                </Row>
            </div>
        </>
);
}

export default EditCustomer;