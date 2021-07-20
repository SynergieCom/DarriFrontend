import React from 'react';
import Teamcard from './Teamcard';


const Team = () => {
    return(
    <>
     <section className="team pt-bg-primary ">
         <div className="pt-bg-overley1" style={{ backgroundImage: "url('images/bg/01.jpg')"}}></div>
         <div className="container">
            <div className="row">
               <div className="pt-section-big-title  text-center wow animate__fadeInUp" data-wow-duration="1s"
                  data-wow-delay="1s">
                  <h2 className="big-heading-title">CHALLANGER</h2>
               </div>
               <div className="col-lg-3"></div>
               <div className="col-xl-6 text-center">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title text-white border-left ">Would Like To Hear From You!</span>
                     <h2 className="pt-section-title text-white">Our Expert Team</h2>
                     <p className="pt-section-description text-white">It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout.
                     </p>
                  </div>
               </div>
               <div className="col-lg-3"></div>
            </div>
            <div className="row mt-4 mt-lg-5">
               <div className="col-sm-12">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="3"
                     data-lap_num="2" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                     data-loop="true" data-margin="30">
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