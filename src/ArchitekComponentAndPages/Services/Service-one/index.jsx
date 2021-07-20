import React from 'react';
import Servcard from './Servcard';


const Service = () => {
    return(
    <>
       <section className="services wow animate__fadeIn" data-wow-delay="0.2s">
         <div className="container">
            <div className="row">
               <div className="col-lg-3"></div>
               <div className="col-xl-6 text-center">
                  <div className="pt-big-title mt-4">
                     <h2 className="pt-big-title1  wow animate__fadeInUp" data-wow-duration="1s"
                        data-wow-delay="1s">SERVICES</h2>
                  </div>
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">What We Offe</span>
                     <h2 className="pt-section-title">Architek Best Services</h2>
                     <p className="pt-section-description">There are many variations of passages of Lorem Ipsum
                        available,but
                        the majority have suffered alteration in some form believable.
                     </p>
                  </div>
               </div>
               <div className="col-lg-3"></div>
            </div>
            <div className="row">
               <Servcard 
               img="images/blog/blog-6.jpg"
               title="Construction Management"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
               <Servcard
               img="images/blog/blog-3.jpg" 
               title="Expert Mechanical"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard 
                img="images/blog/blog-2.jpg"
               title="Architecture & Building"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard 
                img="images/blog/blog-7.jpg"
               title="Tiling & Painiting"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard
                img="images/blog/blog-1.jpg" 
               title="Apartment Design"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard
                img="images/blog/blog-4.jpg" 
               title="Facade Engineering"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
               
             
                 
            </div>
         </div>
      </section>
      </>
    );

}
export default Service;