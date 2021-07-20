import React from 'react';
import Loader from '../../Loader';
import Mainnav from '../../Navigationbar/Navigationbar-one-main';
import Banner from './Banner';
import Sidebar from "../../Sidebar";
import Aboutus from '../../Aboutus/Aboutus-one';
import Explore from '../../Explore/Explore-one';
import Recent from '../../Recent/Recent-one';
import Process from '../../Process/Process-two';
import Video from '../../Video/Video-one';
import Services from '../../Services/Service-one';
import Working from '../../Work/Work-one';
import Counter from '../../Counter/Counter-one';
import Team from '../../Team/Team-one';
import Testimonial from '../../Testimonial/Testimonial-one';
import Client from '../../Client/Client-one';
import Blog from '../../Blog';
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
const Home = () => {
  return (
    <>
      <Loader />
      <Sidebar />
      <Mainnav />
      <Banner />
    
      <Aboutus />
      <Explore />
      <Recent />
      <Process />
      <Video />
      <Services />
      <Working />
      <Counter />
      <Team />
      <Testimonial />
      <Client />
      <Blog />
      <Action />
      <Footer />
      <ScrollTop />
    </>
  );

}
export default Home;