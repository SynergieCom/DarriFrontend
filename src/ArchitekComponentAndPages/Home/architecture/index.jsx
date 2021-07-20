import React from 'react';
import Testimonial from '../../Testimonial/Testimonial-three';
import Nav from '../../Navigationbar/Navigationbar-three';
import Banner from './Banner';
import Loader from '../../Loader';
import Explore from '../../Explore/Explore-two';
import Portfolio from '../../Portfolio';
import Aboutus from '../../Aboutus/Aboutus-two';
import Video from '../../Video/Video-two';
import Counter from '../../Counter/Counter-two';
import Client from '../../Client/Client-two';
import Conatct from './Conatct';
import Service from '../../Services/Service-one';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';

const Architeck = () => {
    return (
        <>
            <Loader />
            <Nav />
            <Banner />
            <Sidebar />
            <Service />
            <Explore />
            <Portfolio />
            <Aboutus />
            <Video />
            <Testimonial />
            <Counter />
            <Client />
            <Conatct />
            <Action />
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Architeck;