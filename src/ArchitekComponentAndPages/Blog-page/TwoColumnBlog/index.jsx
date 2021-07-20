import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Blog from './Blog';
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
import Sidebar from '../../Sidebar';

const ThreeColumns = () => {
    return (
        <>
         <Loader />
         <Nav/>
         <Sidebar/>
         <Banner name ="Two Column Blog" />
         <Blog />
         <Action/>
         <Footer />
         <ScrollTop />
        </>

    );
}
export default ThreeColumns;