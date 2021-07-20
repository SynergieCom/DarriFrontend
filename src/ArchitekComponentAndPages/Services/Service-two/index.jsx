import React from 'react';
import Servicecard from './Servicecard';


const Service = () => {
   return (
      <>
         <section className="service">
            <div className="pt-bg-overley1" style={{ backgroundImage: "url('images/bg/03.jpg')" }}></div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-xl-6 text-center">
                     <div className="pt-big-title mt-4">
                        <h2 className="pt-big-title1  wow animate__fadeInUp" data-wow-duration="1s"
                           data-wow-delay="1s">SERVICES</h2>
                     </div>
                     <div className="pt-section-title-box">
                        <span className="pt-section-sub-title">High Performance Services For</span>
                        <h2 className="pt-section-title">Construction Industries!</h2>
                        <p className="pt-section-description">There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form believable.
                     </p>
                     </div>
                  </div>
                  <div className="col-lg-3"></div>
               </div>
               <div className="row">
                  <Servicecard
                     img="flaticon-029-worker"
                     title="Cost Estimation"
                     des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod r ut labore et dolore magna aliqua." />

                  <Servicecard
                     img="flaticon-008-factory"
                     title="Project Scheduling"
                     des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod r ut labore et dolore magna aliqua." />

                  <Servicecard
                     img="flaticon-036-conveyor"
                     title="Design Decision-Making"
                     des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod r ut labore et dolore magna aliqua." />
                  <Servicecard
                     img="flaticon-034-search"
                     title="Building Permits"
                     des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod r ut labore et dolore magna aliqua." />
                  <Servicecard
                     img="flaticon-025-industrial-robot"
                     title="Traffic Studies"
                     des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod r ut labore et dolore magna aliqua." />
                  <Servicecard
                     img="flaticon-044-design-tools"
                     title="Land Purchase"
                     des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod r ut labore et dolore magna aliqua." />



               </div>
            </div>
         </section>
      </>
   );

}
export default Service;