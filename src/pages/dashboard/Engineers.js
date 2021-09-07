import React from "react";
import {
    Row,
} from "reactstrap";
import {useServerApi} from "../../hooks/useServerApi";
import ArchitectsTable from "../../components/dashboard/ArchitectsManagement/ArchitectsTable";
import EngineersTable from "../../components/dashboard/EngineersManagement/EngineersTable";


function Engineers() {
    const [engineers] = useServerApi('engineers');

    return (
        <>
            <div className="content">
                <Row>
                    <EngineersTable Users={engineers}/>

                </Row>

            </div>
        </>
    );
}

export default Engineers;
