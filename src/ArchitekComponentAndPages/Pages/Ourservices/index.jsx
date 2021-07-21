import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner'
import Services from '../../Services/Service-one';
import Project from '../../Recent/Recent-one';
import Process from '../../Process/Process-two';
import Sidebar from "../../../components/front/Sidebar";
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import ScrollTop from '../../../components/front/ScrollTop';
const Ourservices = () => {
    return (
        <>
            <Loader />
            <Nav/>
            <Sidebar />
            <Banner name ="Our Service"/>
            <Services />
            <Project />
            <Process />
            <Action />
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Ourservices;