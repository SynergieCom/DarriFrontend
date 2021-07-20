import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Team from '../../Team/Team-one';
import Process from '../../Process/Process-three';
import Sidebar from "../../Sidebar";
import Service from '../../Services/Service-two';
import Action from '../../Action';
import Footer from '../../Footer';
import Scrolltop from '../../ScrollTop';
const Leadership = () => {
    return (
        <>
            <Loader />
            <Nav />
            <Sidebar />
            <Banner name="Leadership" />
            <Team />
            <Process />
            <Service />
            <Action />
            <Footer />
            <Scrolltop />
        </>
    );

}
export default Leadership;