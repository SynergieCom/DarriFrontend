import React from "react";
import {
    Row,
} from "reactstrap";
import {useServerApi} from "../../hooks/useServerApi";
import ArchitectsTable from "../../components/dashboard/ArchitectsManagement/ArchitectsTable";


function Users() {
    const [architects] = useServerApi('architects');

    return (
        <>
            <div className="content">
                <Row>
                    <ArchitectsTable Users={architects}/>

                </Row>

            </div>
        </>
    );
}

export default Users;
