import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner'
import Services from '../../Services/Service-one';
import Project from '../../Recent/Recent-one';
import Process from '../../Process/Process-two';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
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