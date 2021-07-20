import React from 'react';
import { NavLink } from 'react-router-dom';


const Video = () => {
    return(
    <>
       <section className=" video pt-bg-dark  section-style">
         <div className="pt-bg-overley pt-opacity1"
            style={{backgroundImage: "url('images/bg/02.jpg')"}}>
         </div>
         <div className="container">
            <div className="row d-flex justify-content-center">
               <div className="col-12 pb-5"></div>
               <div className="col-lg-4 text-center py-5">
                  <div className="pt-popup-video-block">
                     <div className="pt-video-icon">
                        <NavLink to="https://www.youtube.com/watch?v=XHOmBV4js_E" className="pt-video popup-youtube">
                        <i aria-hidden="true" className="ion ion-play"></i></NavLink>
                     </div>
                  </div>
               </div>
               <div className="col-12 pt-5"></div>
            </div>
         </div>
         <div className="pt-section-big-title bottom text-center wow animate__fadeInUp" data-wow-duration="1s"
            data-wow-delay="1s">
            <h2 className="big-heading-title">Watch Our Video</h2>
         </div>
      </section>
      </>
    );

}
export default Video;