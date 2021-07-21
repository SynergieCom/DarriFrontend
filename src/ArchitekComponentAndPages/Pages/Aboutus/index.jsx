import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner'
import Aboutus from '../../Home/Construction/Aboutus';
import Services from './content/Services';
import About2 from '../../Work/Work-one';
import Team from '../../Team/Team-one';
import Sidebar from "../../../components/front/Sidebar";
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import Video from '../../Video/Video-one';
import ScrollTop from '../../../components/front/ScrollTop';
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