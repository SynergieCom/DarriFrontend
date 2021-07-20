import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import About from './About';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import Scrolltop from '../../ScrollTop';

const Error404 = () => {
    return (
        <>
            <Loader />
            <Nav/>
            <Sidebar />
            <Banner name="Error404" />
            <About />
            <Action />
            <Footer />
            <Scrolltop />
        </>
    );

}
export default Error404;