import React from 'react';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Location from './Location';
import Map from './Map';
import Conatct from '../../Contact/Contact-one';
import Sidebar from "../../../components/front/Sidebar";
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import ScrollTop from '../../../components/front/ScrollTop';
import Loader from '../../../components/front/Loader';

const Getintouch = () => {
    return (
        <>
            <Loader />
            <Nav />
            <Sidebar />
            <Banner name="Get in Touch" />
            <Location />
            <Map />
            <Conatct />
            <Action />
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Getintouch;