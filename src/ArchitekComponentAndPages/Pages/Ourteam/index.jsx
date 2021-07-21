import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Team from '../../Team/Team-one';
import Count from '../../Counter/Counter-three';
import Blog from '../../Blog';
import Sidebar from "../../../components/front/Sidebar";
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import Scrolltop from '../../../components/front/ScrollTop';
const Ourteam = () => {
    return (
        <>
            <Loader />
            <Nav/>
            <Sidebar />
            <Banner name="Our Team" />
            <Team />
            <Count />
            <Blog />
            <Action />
            <Footer />
            <Scrolltop />
        </>
    );

}
export default Ourteam;