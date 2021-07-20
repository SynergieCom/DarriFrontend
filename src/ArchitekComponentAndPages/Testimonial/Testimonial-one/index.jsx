import React from 'react';
import Testimonialcard from './Testimonialcard';


const Testimonial = () => {
   return (
      <>
         <section className="testimonial pt-bg-dark" style={{ backgroundImage: "url('images/bg/03.jpg')" }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="pt-section-title-box text-lg-left text-center">
                        <span className="pt-section-sub-title text-white border-white">Our Clients Say</span>
                        <h2 className="pt-section-title text-white">Clients Say About Us</h2>
                        <p className="pt-section-description text-white">It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout.
                     </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-12">
                     <div className="pt-testimonial pt-testimonial-1">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="2"
                           data-lap_num="2" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                           data-loop="true" data-margin="45">
                           <Testimonialcard
                              img="images/testimonial/01.jpg"
                              name="Willie Rchitek"
                              post="Manager Peaceful"
                              review="Contrary to popular belief,Lorem Ipsum is not simply random text. It has
                           roots in a
                           piece
                           of classNameical Latin literature from 45 BC,making it over 2000 years old."
                           />
                           <Testimonialcard
                              img="images/testimonial/02.jpg"
                              name="Maggie Architek"
                              post="Employee"
                              review="Contrary to popular belief,Lorem Ipsum is not simply random text. It has
                           roots in a
                           piece
                           of classNameical Latin literature from 45 BC,making it over 2000 years old."
                           />

                           <Testimonialcard
                              img="images/testimonial/03.jpg"
                              name="Cindy Wilkins"
                              post="MD Peacefule"
                              review="Contrary to popular belief,Lorem Ipsum is not simply random text. It has
                              roots in a
                              piece
                              of classNameical Latin literature from 45 BC,making it over 2000 years old."
                           />

                           <Testimonialcard
                              img="images/testimonial/04.jpg"
                              name="Emily Blunts"
                              post="CEO Peaceful"
                              review="Contrary to popular belief,Lorem Ipsum is not simply random text. It has
                              roots in a
                              piece
                              of classNameical Latin literature from 45 BC,making it over 2000 years old."
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );

}
export default Testimonial;