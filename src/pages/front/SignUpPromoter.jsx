import React from 'react';
import Sidebar from "../../components/front/Sidebar";
import Action from '../../components/front/Action';
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import Loader from '../../components/front/Loader';
import NavBarHome from "../../components/front/Home/NavBarHome";
import LoginForm from "../../components/front/Login/LoginForm";
import SignUpCustomerFrom from "../../components/front/SignUpCustomer/SignUpCustomerFrom";
import SignUpEngineerForm from "../../components/front/SingUpEngineerForm/SignUpEngineerFrom";

const SingUpPromoter = () => {
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
            <br/><br/>

            <SignUpEngineerForm/>

            <Action/>
            <Footer/>
            <ScrollTop/>
        </>
    );

}
export default SingUpPromoter;