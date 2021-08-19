import React, {useEffect} from 'react';
import Loader from "../../components/front/Loader";
import NavBarHome from "../../components/front/Home/NavBarHome";
import Sidebar from "../../components/front/Sidebar";
import Action from "../../components/front/Action";
import Footer from "../../components/front/Footer";
import ScrollTop from "../../components/front/ScrollTop";
import PaymentComponent from "../../components/front/Payment/PaymentComponent";
import {useLocation} from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Payment(props) {
    const stripePromise = loadStripe('pk_test_51IfWBLCVTWqP53093lS3P8XJ4gppAmuKTgt30ePPHobWOjLEJKTNK3IaQnC53IxebPdWVJ6zsHWU1DC2yz4geLym00O9SvcieR');
    const query = useQuery();
    const id = query.get('id');
    const amount = query.get('amount');
    const userType = query.get('userType');

    return (

        <>
            <Loader/>
            <NavBarHome/>
            <Sidebar/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <Elements stripe={stripePromise}>
                <PaymentComponent amount={amount} id={id} userType={userType}/>
            </Elements>

            <Action/>
            <Footer/>
            <ScrollTop/>
        </>
);
}

export default Payment;