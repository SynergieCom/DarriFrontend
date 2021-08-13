import React from 'react';
import Sidebar from "../../components/front/Sidebar";
import Action from '../../components/front/Action';
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import Loader from '../../components/front/Loader';
import NavBarHome from "../../components/front/Home/NavBarHome";
import LoginForm from "../../components/front/Login/LoginForm";
import SignUpCustomerFrom from "../../components/front/SignUpCustomer/SignUpCustomerFrom";
import SignUpArchitectFrom from "../../components/front/SingUpArchitectForm/SignUpArchitectrFrom";

const SigUpArchitect = () => {
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

            <SignUpArchitectFrom />

            <Action/>
            <Footer/>
            <ScrollTop/>
        </>
    );

}
export default SigUpArchitect;