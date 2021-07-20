import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-two';
import Banner from './Banner';
import Aboutus from './Aboutus';
import Procces from '../../Process/Process-one';
import Portfolio from '../../Portfolio';
import Whychoose from './Whychoose';
import Progressbar from './Progressbar';
import Service from '../../Services/Service-two';
import Client from '../../Client/Client-three';
import Iconbox from './Iconbox';
import Accordian from '../../Accordian';
import Team from '../../Team/Team-two';
import Pricing from '../../Pricing';
import Conatctus from './Conatctus';
import Conatct2 from '../../Contact/Contact-one';
import Testimonial from '../../Testimonial/Testimonial-two'
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
const Construction = () => {
    return (
        <>
            <Loader />
            <Sidebar />
            <Nav />
            <Banner />
            <Aboutus />
            <Procces />
            <Portfolio />
            <Whychoose />
            <Progressbar />
            <Service />
            <Client />
            <Iconbox />
            <Accordian  img="images/about/demo-4.jpg" alt="prop"/>
            <Team />
            <Pricing />
            <Conatctus />
            <Conatct2 />
            <Testimonial />
            <Action />
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Construction;