import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Aboutus from '../../Aboutus/Aboutus-three';
import Recent from '../../Recent/Recent-one';
import Accordian from '../../Accordian';
import Counter from '../../Counter/Counter-three';
import Pricing from './Pricing';
import Client from '../../Client/Client-four';
import Blog from '../../Blog';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import Scrolltop from '../../ScrollTop';
const Construction = () => {
    return (
        <>
            <Loader />
            <Nav />
            <Sidebar />
            <Banner name="About me"/>
            <Aboutus />
            <Recent />
            <Accordian img="images/about/demo-10.png" />
            <Counter />
            <Pricing />
            <Client />
            <Blog />
            <Action />
            <Footer />
            <Scrolltop />
        </>
    );

}
export default Construction;