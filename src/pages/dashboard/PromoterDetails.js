import React, {useEffect} from "react";

import {
    Row,
} from "reactstrap";

import {useServerApi} from "../../hooks/useServerApi";
import {useParams} from "react-router";
import PromoterDetailsComp from "../../components/dashboard/PromotersManagement/PromoterDetailsComp";
import PromoterPaymentsTable from "../../components/dashboard/PromotersManagement/PromorterPaymentsTable";

export default function PromoterDetails() {
    const {id} = useParams();
    const [promoter, err, reload] = useServerApi(`promoters/${id}`);


    const payments = promoter?.Payments;
    return (
        <>
            <div className="content">
                <Row>
                    <PromoterDetailsComp user={promoter}/>
                    <PromoterPaymentsTable payments={payments}/>

                </Row>
            </div>
        </>
    );
}

