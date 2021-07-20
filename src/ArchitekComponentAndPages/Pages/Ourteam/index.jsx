import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Team from '../../Team/Team-one';
import Count from '../../Counter/Counter-three';
import Blog from '../../Blog';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import Scrolltop from '../../ScrollTop';
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