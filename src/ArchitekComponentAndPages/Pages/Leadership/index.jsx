import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Team from '../../Team/Team-one';
import Process from '../../Process/Process-three';
import Sidebar from "../../../components/front/Sidebar";
import Service from '../../Services/Service-two';
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import Scrolltop from '../../../components/front/ScrollTop';
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