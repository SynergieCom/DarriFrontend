import React from 'react';
import Testimonial from '../../Testimonial/Testimonial-three';
import Nav from '../../Navigationbar/Navigationbar-three';
import Banner from './Banner';
import Loader from '../../../components/front/Loader';
import Explore from '../../Explore/Explore-two';
import Portfolio from '../../Portfolio';
import Aboutus2 from '../../Aboutus/Aboutus-two';
import Video from '../../Video/Video-two';
import Counter from '../../Counter/Counter-two';
import Client from '../../Client/Client-two';
import Conatct from './Conatct';
import Service from '../../Services/Service-one';
import Sidebar from "../../../components/front/Sidebar";
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import ScrollTop from '../../../components/front/ScrollTop';

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
            <Aboutus2 />
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