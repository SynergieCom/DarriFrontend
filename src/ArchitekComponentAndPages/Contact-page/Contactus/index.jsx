import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Contact from './Contact';
import Map from '../../Map/Map-one';
import Testimonial from '../../Testimonial/Testimonial-two';
import Sidebar from "../../../components/front/Sidebar";
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
const Construction = () => {
    return (
        <>
            <Loader />
            <Nav />
            <Sidebar />
            <Banner name="Contact us" />
            <Contact />
            <Map />
            <Testimonial/>
            <Action />
            <Footer />
        </>
    );

}
export default Construction;