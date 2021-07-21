import React from 'react';
import Sidebar from "../../components/front/Sidebar";
import Action from '../../components/front/Action';
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import Loader from '../../components/front/Loader';
import NavBarHome from "../../components/front/Home/NavBarHome";
import BannerPages from "../../components/front/BannerPages";
import LoginForm from "../../components/front/Login/LoginForm";

const Login = () => {
    return (
        <>
            <Loader />
            <NavBarHome />
            <Sidebar />
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>

            <LoginForm />
            <Action />
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Login;