import React from "react";
import {
    Row,
} from "reactstrap";
import {useServerApi} from "../../hooks/useServerApi";
import CustomersTable from "../../components/dashboard/CustomersManagement/CustomersTable";


function Users() {
    const [customers] = useServerApi('customers');

    return (
        <>
            <div className="content">
                <Row>
                    <CustomersTable Users={customers}/>
                </Row>

            </div>
        </>
    );
}

export default Users;
