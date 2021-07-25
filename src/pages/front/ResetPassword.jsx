import React from 'react';
import Sidebar from "../../components/front/Sidebar";
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import Loader from '../../components/front/Loader';
import NavBarHome from "../../components/front/Home/NavBarHome";
import SendResetCode from "../../components/front/ResetPassword/SendResetCode";

const ResetPassword = () => {
    return (
        <>
            <Loader/>
            <NavBarHome/>
            <Sidebar/>
            <br/><br/>
            <br/><br/>


            <SendResetCode/>

            <br/><br/>
            <br/><br/>
            <Footer/>
            <ScrollTop/>
        </>
    );

}
export default ResetPassword;