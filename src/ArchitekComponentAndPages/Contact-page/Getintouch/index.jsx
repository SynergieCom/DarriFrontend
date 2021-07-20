import React from 'react';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Location from './Location';
import Map from './Map';
import Conatct from '../../Contact/Contact-one';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
import Loader from '../../Loader';

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