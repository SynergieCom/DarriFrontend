import React from "react";
import {
    Row,
} from "reactstrap";
import {useServerApi} from "../../hooks/useServerApi";
import ArchitectsTable from "../../components/dashboard/ArchitectsManagement/ArchitectsTable";
import EngineersTable from "../../components/dashboard/EngineersManagement/EngineersTable";
import PromotersTable from "../../components/dashboard/PromotersManagement/PromotersTable";


function Promoters() {
    const [promoters] = useServerApi('promoters');

    return (
        <>
            <div className="content">
                <Row>
                    <PromotersTable Users={promoters}/>

                </Row>

            </div>
        </>
    );
}

export default Promoters
