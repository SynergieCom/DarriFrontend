import React from 'react';
import Reactcard from './Recentcard';

const Recent = () => {
   return (
      <>
         <section className="recent-projects pt-bg-dark section-style wow animate__fadeIn" data-wow-delay="0.2s">
            <div className="pt-bg-overley1" style={{ backgroundImage: "url('images/bg/01.png')" }}></div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 z-index-1">
                     <div className="pt-section-title-box text-xl-left text-center  mb-md-0">
                        <span className="pt-section-sub-title text-white border-white">Our Work</span>
                        <h2 className="pt-section-title text-white">Explore Recent Projects</h2>
                        <p className="pt-section-description text-white">It is a long established fact that a reader will be
                        distracted by the readable content sof a page when looking at its layout.
                     </p>
                     </div>
                  </div>
                  <div className="col-xl-6 d-xl-flex justify-content-xl-end align-items-center text-center">
                     <div className="pt-btn-container">
                        <a className="pt-button pt-btn-flat pt-bg-primary " href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left"></span>
                              <span className="pt-button-text">View More</span>
                              <span className="pt-button-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-pt pt-4">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="owl-carousel" data-dots="false" data-nav="false" data-desk_num="4" data-lap_num="2"
                        data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="true" data-loop="true"
                        data-margin="30">
                        <Reactcard
                           img="images/project/01.jpg"
                           type={<span>Designer</span>}
                        />

                        <Reactcard
                           img="images/project/02.jpg"
                           type={<span>Commercial</span>}
                        />

                        <Reactcard
                           img="images/project/04.jpg"
                           type={<span>Designer</span>}
                        />

                        <Reactcard
                           img="images/project/05.jpg"
                           type={<span>Designer</span>}
                        />


                        <Reactcard
                           img="images/project/06.jpg"
                           type={<span>Designer</span>}
                        />
                        <Reactcard
                           img="images/project/07.jpg"
                           type={<span>Furniture</span>}
                        />

                        <Reactcard
                           img="images/project/08.jpg"
                           type={<span>Interior</span>}
                        />
                        <Reactcard
                           img="images/project/09.jpg"
                           type={<span>Designer</span>}
                        />
                        <Reactcard
                           img="images/project/10.jpg"
                           type={<span>Exteririon</span>}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="pt-section-big-title bottom text-center wow animate__fadeInUp " data-wow-duration="1s"
               data-wow-delay="1s">
               <h2 className="big-heading-title">Our Work</h2>
            </div>
         </section>
      </>
   );

}
export default Recent;