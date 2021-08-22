import React from 'react';
import {queryServerApi} from "../../../utils/queryServerApi";
import {useHistory} from "react-router";

const PricingCard = (prop) => {
    const history = useHistory();
    const userRole = () => {
        if (prop.userType === "Architect") {
            return "architects";
        } else if (prop.userType === "Engineer") {
            return "engineers";
        } else {
            return "promoters"
        }

    }

    const updateSubscription = async (amount) => {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var newSubscriptionExpirationDate = new Date(year, month + 1, day);
        const [res, err] = await queryServerApi(userRole() + "/UpdateSubscription/" + prop.id, {
            SubscriptionExpirationDate: newSubscriptionExpirationDate,
        }, "PUT", false);
        if (err) {
            console.log(err);
        } else {
            history.push(`/Payment?amount=${amount}&id=${prop.id}&userType=${prop.userType}`);
            history.go(0);
        }
    }

    return (
        <div className="col-xl-4 col-md-6 mb-4 mb-lg-0">
            <div className={prop.cls}>
                <div className="pt-price-detail">
                    <span className="pt-price-title">{prop.plan}</span>
                    <h2 className="price">{prop.price}</h2>
                    <p className="pt-price-duration">{prop.time}</p>
                    <div className="pt-bg-effect">
                        <img className="img-fluid" src="images/Archi4.jpg" alt="architek"/>
                    </div>
                </div>
                <ul className="pt-list-info">
                    <li>{prop.f1}</li>
                    <li>{prop.f2}</li>
                    <li>{prop.f3}</li>
                    <li>{prop.f4}</li>
                    <li>{prop.f5}</li>
                    <li>{prop.f6}</li>
                </ul>
                <div className="pt-button pt-btn-flat">
                    <div className="pt-button-block" onClick={() => updateSubscription(prop.amount)}>
                        <span className="pt-button-line-left"></span>
                        <span className="pt-button-text">Subscribe</span>
                        <span className="pt-button-line-right"></span>
                        <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default PricingCard;