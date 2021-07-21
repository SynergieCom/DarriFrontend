import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Recent from '../../Recent/Recent-two';
import Explore from '../../Explore/Explore-one';
import Blog from '../../Blog';
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import ScrollTop from '../../../components/front/ScrollTop';
import Sidebar from '../../../components/front/Sidebar';
const ThreeColumns = () => {
    return (
        <>
         <Loader />
         <Nav/>
         <Sidebar />
         <Banner name ="Portfolio Slider" />
         <Recent />  
         <Explore />
         <Blog />
         <Action/>
         <Footer />
         <ScrollTop />
        </>

    );
}
export default ThreeColumns;