import React from 'react';
import Sidebar from "../../components/front/Sidebar";
import Action from '../../components/front/Action';
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import Loader from '../../components/front/Loader';
import NavBarHome from "../../components/front/Home/NavBarHome";
import LoginForm from "../../components/front/Login/LoginForm";
import NewPasswordForm from "../../components/front/ResetPassword/NewPasswordForm";

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

                    <NewPasswordForm />
                    <Footer />
                    <ScrollTop />
            </>
        );

}
export default Login;