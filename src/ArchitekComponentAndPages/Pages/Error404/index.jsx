import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import About from './About';
import Sidebar from "../../../components/front/Sidebar";
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import Scrolltop from '../../../components/front/ScrollTop';

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