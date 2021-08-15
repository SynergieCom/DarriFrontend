import React, {useEffect} from 'react';
import Sidebar from "../../components/front/Sidebar";
import Action from '../../components/front/Action';
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import Loader from '../../components/front/Loader';
import NavBarHome from "../../components/front/Home/NavBarHome";
import LoginForm from "../../components/front/Login/LoginForm";
import PricingComponent from "../../components/front/Pricing/PricingComponent";
import {useLocation, useParams} from "react-router";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Login = () => {
    const query = useQuery();
    const id = query.get('id');

    return (
        <>
            <Loader/>
            <NavBarHome/>
            <Sidebar/>
            <PricingComponent id={id}/>
            <Action/>
            <Footer/>
            <ScrollTop/>
        </>
    );

}
export default Login;