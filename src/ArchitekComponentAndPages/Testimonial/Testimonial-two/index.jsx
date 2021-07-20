import React from 'react';
import Testimonialcard from './Testimonialcard';


const Testimonial = () => {
    return (
        <section className="testimonial  pt-bg-light">
            <div className="pt-bg-overley1" style={{ backgroundImage: "url('images/bg/05.png')" }}></div>
            <div className="container-pt">
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6 text-center">
                        <div className="pt-section-title-box ">
                            <span className="pt-section-sub-title">Best Service, Right Time, Right People</span>
                            <h2 className="pt-section-title">OUR CLIENTS</h2>
                            <p className="pt-section-description">It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
            </p>
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-12 container">
                        <div className="owl-carousel owl-loaded owl-drag " data-dots="true" data-nav="false" data-desk_num="2"
                            data-lap_num="2" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                            data-loop="true" data-margin="30">
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
        </section>


    );
}
export default Testimonial;