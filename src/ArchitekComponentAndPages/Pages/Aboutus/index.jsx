import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner'
import Aboutus from '../../Home/Construction/Aboutus';
import Services from './content/Services';
import About2 from '../../Work/Work-one';
import Team from '../../Team/Team-one';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import Video from '../../Video/Video-one';
import ScrollTop from '../../ScrollTop';
const Construction = () => {
    return (
        <>
            <Loader />
             <Nav />
            <Sidebar />
            <Banner name="About us" />
            <Aboutus />
            <Video />
            <Services />
            <About2 />
            <Team />
            <Action />
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Construction;