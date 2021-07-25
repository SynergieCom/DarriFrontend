import React from 'react';
import Loader from "../../components/front/Loader";
import NavBarHome from "../../components/front/Home/NavBarHome";
import Sidebar from "../../components/front/Sidebar";
import BannerHome from "../../components/front/Home/BannerHome";
import NotFound404 from "../../components/front/NotFound404";
import Action from "../../components/front/Action";
import Footer from "../../components/front/Footer";
import ScrollTop from "../../components/front/ScrollTop";
import BannerPages from "../../components/front/BannerPages";


const NotFound = () => {
    return (
        <>
            <Loader />
            <NavBarHome/>
            <Sidebar />
            <NotFound404 />
            <Action />
            <Footer />
            <ScrollTop />
        </>
    );

}
export default NotFound;