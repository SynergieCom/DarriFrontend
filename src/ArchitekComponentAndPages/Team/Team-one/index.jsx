import React from 'react';
import Teamcard from './Teamcard';



const Team = () => {
    return(
    <>
     <section className="team md-pt-0">
         <div className="container">
            <div className="row">
               <div className="col-lg-2"></div>
               <div className="col-lg-8 text-center">
                  <div className="pt-big-title mt-4">
                     <h2 className="pt-big-title1  wow animate__fadeInUp" data-wow-duration="1s"
                        data-wow-delay="1s">challenger</h2>
                  </div>
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title  border-left ">Would Like To Hear From You!</span>
                     <h2 className="pt-section-title">Our Expert Team</h2>
                     <p className="pt-section-description">It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout.
                     </p>
                  </div>
               </div>
               <div className="col-lg-2"></div>
            </div>
         </div>
         <div className="container-pt">
            <div className="row mt-4 mt-lg-5">
               <div className="col-sm-12">
                  <div className="owl-carousel" data-dots="false" data-nav="false" data-desk_num="4" data-lap_num="2"
                     data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="true" data-loop="true"
                     data-margin="30">
                    <Teamcard 
                    img="images/team/01.jpg"
                    pos="Stock Analist"
                    name="Naidan Smith"
                    />
                    <Teamcard 
                    img="images/team/02.jpg"
                    pos="Project Head"
                    name="Robert Anderso"
                    /> 
                    <Teamcard 
                    img="images/team/03.jpg"
                    pos="Creative Head"
                    name="Iliena Brown"
                    />
                     <Teamcard 
                    img="images/team/04.jpg"
                    pos="Creative Direction"
                    name="Michal Smart"
                    />
                     <Teamcard 
                    img="images/team/05.jpg"
                    pos="Stock Market"
                    name="Danial Frankie"
                    />
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Team;