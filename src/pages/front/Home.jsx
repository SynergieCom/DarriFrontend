import React from 'react';
import Loader from '../../components/front/Loader';
import Sidebar from "../../components/front/Sidebar";
import Aboutus from '../../ArchitekComponentAndPages/Aboutus/Aboutus-one';
import Process from '../../ArchitekComponentAndPages/Process/Process-two';
import Video from '../../ArchitekComponentAndPages/Video/Video-one';
import Working from '../../ArchitekComponentAndPages/Work/Work-one';
import Counter from '../../ArchitekComponentAndPages/Counter/Counter-one';
import Team from '../../ArchitekComponentAndPages/Team/Team-one';
import Action from '../../components/front/Action';
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import BannerHome from "../../components/front/Home/BannerHome";
import Whychoose from "../../ArchitekComponentAndPages/Home/Construction/Whychoose";
import NavBarHome from "../../components/front/Home/NavBarHome";

const Home = () => {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    return (
        <>
            <Loader/>
            <Sidebar/>
            <NavBarHome/>
            <BannerHome/>

            {/*Default Feed*/}
            <Process/>
            <Video/>
            <Whychoose />
            <Aboutus/>
            <Working/>
            <Counter/>



            <Team/>
            <Action/>
            <Footer/>
            <ScrollTop/>
        </>
    );

}
export default Home;