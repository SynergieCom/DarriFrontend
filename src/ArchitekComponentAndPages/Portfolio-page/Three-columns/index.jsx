import React from 'react';
import Loader from '../../../components/front/Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Action from '../../../components/front/Action';
import Footer from '../../../components/front/Footer';
import ScrollTop from '../../../components/front/ScrollTop';
import Portfolio from './Portfolio';
import Sidebar from '../../../components/front/Sidebar';
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