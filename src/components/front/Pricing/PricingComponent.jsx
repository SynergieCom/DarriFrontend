import React from 'react';
import PricingCard from "./PricingCard";
import {queryServerApi} from "../../../utils/queryServerApi";
import {useHistory} from "react-router";


const PricingComponent = (props) => {
    const id = props.id;


    return (
        <>
            <section className="pricing" >
                <div className="pt-bg-overley pt-opacity2 "
                     style={{backgroundImage: "url('images/Archi5.jpg')",backgroundColor: "red"}}>
                </div>
                <div className="container" >
                    <div className="row">
                        <div className=" col-xl-2">
                        </div>
                        <div className="col-xl-8 text-center">
                            <div className="pt-big-title mt-4">
                                <h2 className="pt-big-title1 ">Darri</h2>
                            </div>
                            <div className="pt-section-title-box">
                                <span className="pt-section-sub-title">Subscription</span>
                                <h2 className="pt-section-title">Our Best Price Plan</h2>
                                <p className="pt-section-description">
                                    Choose your subscription according to your needs
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2">
                        </div>
                    </div>
                    <div className="row">
                        <PricingCard
                            cls="pt-price-block text-center"
                            plan=" Architect "
                            price=" 29.00 DT"
                            id={id}
                            amount={29}
                            userType={"Architect"}
                            time="Per Month"
                            f1="Five brand monitors"
                            f2={<del>12-month fixed price</del>}
                            f3={<del>Transmission charge</del>}
                            f4={<del>Marketing strategy</del>}
                            f5={<del>Free Server Domain</del>}
                            f6="Web Optimized"
                        />
                        <PricingCard
                            cls="pt-price-block active text-center"
                            plan=" Engineer "
                            price="69.00 DT"
                            amount={69}
                            id={id}
                            userType={"Engineer"}
                            time="Per Month"
                            f1="Five brand monitors"
                            f2="12-month fixed price"
                            f3={<del>Transmission charge</del>}
                            f4="Marketing strategy"
                            f5={<del>Free Server Domain</del>}
                            f6="Web Optimized"
                        />
                        <PricingCard
                            cls="pt-price-block text-center"
                            plan=" Promoter "
                            price="99.00 DT"
                            amount={99}
                            id={id}
                            userType={"Promoter"}
                            time="Per Month"
                            f1="Five brand monitors"
                            f2="12-month fixed price"
                            f3="Transmission charge"
                            f4="Marketing strategy"
                            f5="Free Server Domain"
                            f6="Web Optimized"
                        />


                    </div>
                </div>
            </section>
        </>
    );

}
export default PricingComponent;