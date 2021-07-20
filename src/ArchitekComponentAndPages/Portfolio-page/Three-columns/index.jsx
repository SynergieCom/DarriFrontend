import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
import Portfolio from './Portfolio';
import Sidebar from '../../Sidebar';
const TwoColumns = () => {
    return (
        <>
          <Loader />
         <Nav/>
         <Sidebar />
         <Banner name ="Three columns" />
         <Portfolio />
         <Action/>
         <Footer />
         <ScrollTop />
        </>

    );
}
export default TwoColumns;