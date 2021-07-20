import React from 'react';
import Aboutcard from './Aboutcard';

const Aboutus = () => {
   return (
      <>
         <section className="about-us">
            <img className="img-fluid pt-bg-img" src="images/about/demo-4.png" alt="background_image" />
            <div className="container">
               <div className="row ">
                  <div className="col-xl-6">
                     <div className="pt-big-title mt-4">
                        <h2 className="pt-big-title1 wow animate__fadeInRight" data-wow-duration="1s"
                           data-wow-delay="1s">ABOUT US</h2>
                     </div>
                     <div className="pt-section-title-box">
                        <span className="pt-section-sub-title">Where Can We Help You</span>
                        <h2 className="pt-section-title">Welcome To Construction Real Solutions.</h2>
                        <p className="pt-section-description">There are many variations of passages of Lorem Ipsum
                        available,but
                        the majority have suffered alteration in some form,by injected humour,or randomised words
                        which
                        don’t look even slightly believable.
                     </p>
                     </div>
                     <ul className="icon-list-items">
                        <Aboutcard
                           des="Lorem ipsum dolor sit amet,consectetur adipiscing elit."
                        />
                        <Aboutcard
                           des="Integer hgf egestas metus blandit sagittis vestibulum."
                        />
                        <Aboutcard
                           des="Nunc iaculis libero in ipsum molestie fermentum,a molestie nulla aliquet."
                        />
                        <Aboutcard
                           des="Integer eget massa malesuada,semper metus in,mattis
                           diam."
                        />
                     </ul>
                     <div className="mt-5 mb-xl-0 mb-5">
                        <a className="pt-button pt-btn-flat" href="/aboutme">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left"></span>
                              <span className="pt-button-text">Read More</span>
                              <span className="pt-button-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="row">

                        <div className="col-lg-6 col-md-6 col-12 d-inline-block">
                           <div id="44c55" className="content__image-wrap content__image-wrap--half" data-color="#FF631B"
                              data-direction="lr">
                              <img className="img-fluid" src="images/about/demo-1.jpg" alt="demo-img" />
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-md-4 mt-4">
                           <div id="44c56" className="content__image-wrap content__image-wrap--half" data-color="#FF631B"
                              data-direction="lr">
                              <img className="img-fluid" src="images/about/demo-2.jpg" alt="demo-img" />
                           </div>
                        </div>
                        <div className="counter single-counter">
                           <h5 className="timer" data-to="25" data-speed="5000">25</h5>
                           <span className="pt-counter-prefix">+</span>
                           <label>YEARS EXPERIENCE</label>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );

}
export default Aboutus;