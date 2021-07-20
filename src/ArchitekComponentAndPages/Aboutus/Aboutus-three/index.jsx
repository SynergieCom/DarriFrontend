import React from 'react';
import Aboutcard from './Aboutcard';


const Aboutus = () => {
    return(
    <>
    <section className="about-us">
<div className="container">
   <div className="row d-flex align-items-center">
      <div className="col-lg-7 mb-5 text-xl-left text-md-left text-center">
         <div className="pt-section-title-box">
            <span className="pt-section-sub-title">Where Can We Help You</span>
            <h2 className="pt-section-title">Welcome To Best Construction Real Solutions.</h2>
            <p className="pt-section-description">There are many variations of passages of Lorem Ipsum available, but
               the majority have suffered alteration in some form, by injected humour, or randomised words which
               don’t look even slightly believable.
            </p>
         </div>
         <ul className="icon-list-items  text-xl-left text-md-left text-center">
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
         <div className="pt-big-title text-left  wow animate__fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
            <h2 className="pt-big-title1">ABOUT ME</h2>
         </div>
      </div>
      <div className="col-lg-5">
          <div id="44c62" className="content__image-wrap content__image-wrap--half" data-color="#FF631B"
                  data-direction="rl">
              
         <img className="img-fluid pt-images-1 w-100" src="images/about/demo-8.jpg" alt="about-img"/>
         <div className="counter single-counter1 d-none d-sm-block">
            <h5 className="timer" data-to="25" data-speed="5000">25</h5>
            <span className="pt-counter-prefix" style={{marginTop: "-87px;"}}>+</span>
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