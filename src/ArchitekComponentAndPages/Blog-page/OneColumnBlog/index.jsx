import React from 'react';
import Loader from '../../Loader';
import Sidebar from "../../Sidebar";
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Blog from './Blog';
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
const ThreeColumns = () => {
    return (
        <>
         <Loader />
         <Nav/>
         <Sidebar />
         <Banner name ="One Columns Blog" />
         <Blog />
         <Action/>
         <Footer />
         <ScrollTop />
        </>

    );
}
export default ThreeColumns;