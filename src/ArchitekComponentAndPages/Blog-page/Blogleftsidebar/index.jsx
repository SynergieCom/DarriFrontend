import React from 'react';
import Loader from '../../../components/front/Loader';
import Sidebar from '../../../components/front/Sidebar';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Blog from './Blog';
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import ScrollTop from '../../../components/front/ScrollTop';
const ThreeColumns = () => {
    return (
        <>
         <Loader/>
         <Nav/>
         <Sidebar />
         <Banner name ="Blog Left Side Bar" />
         <Blog />
         <Action/>
         <Footer />
         <ScrollTop />
        </>

    );
}
export default ThreeColumns;