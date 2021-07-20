import React from 'react';
import Reactcard from './Recentcard';



const Recent = () => {
    return (
        <>
            <section className="recent-projects wow animate__fadeIn" data-wow-delay="0.2s">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3"></div>
                        <div className="col-xl-6">
                            <div className="pt-section-title-box  text-center  mb-md-0">
                                <span className="pt-section-sub-title  border-left">Our Work</span>
                                <h2 className="pt-section-title">Explore Recent Projects</h2>
                                <p className="pt-section-description ">It is a long established fact that a reader will be
                                distracted by the readable content sof a page when looking at its layout.
                     </p>
                            </div>
                        </div>
                        <div className="col-xl-3"></div>
                    </div>
                </div>
                <div className="container-pt pt-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="owl-carousel" data-dots="true" data-nav="false" data-desk_num="4" data-lap_num="2"
                                data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="true" data-loop="true"
                                data-margin="30">
                                <Reactcard
                                    img="images/project/01.jpg"
                                    type={<span>Designer</span>}
                                />

                                <Reactcard
                                    img="images/project/02.jpg"
                                    type={<span>Interior</span>}
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
                                    type={<span>Exteririon</span>}
                                />
                                <Reactcard
                                    img="images/project/10.jpg"
                                    type={<span>Exteririon</span>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Recent;