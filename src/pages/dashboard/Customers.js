import React, {useEffect} from "react";
import {
    Row,
} from "reactstrap";
import {useServerApi} from "../../hooks/useServerApi";
import NotificationAlert from "react-notification-alert";
import CustomersTable from "../../components/dashboard/CustomersManagement/CustomersTable";


function Users() {
    const [customers] = useServerApi('customers');

    return (
        <>
            <NotificationAlert/>
            <div className="content">
                <Row>
                    <CustomersTable Users={customers}/>
                </Row>

            </div>
        </>
    );
}

export default Users;
