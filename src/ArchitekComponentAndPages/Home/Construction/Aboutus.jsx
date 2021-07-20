import React from 'react';


const Aboutus = () => {
    return(
    <>
     <section className="about-us">
         <div className="container">
            <div className="row d-flex align-items-center">
               <div className="col-xl-6  col-lg-12 text-center">
                  <div id="44c58" className="content__image-wrap content__image-wrap--half" data-color="#FF631B"
                           data-direction="lr">
                  <img className="img-fluid" src="images/about/demo-3.jpg" alt="demo-img"/>
               </div>
               </div>
               <div className="col-xl-6 pt-lg-4 col-12 pt-md-4 mt-4">
                  <div className="pt-section-title-box text-left">
                     <span className="pt-section-sub-title">Construction Experience</span>
                     <h2 className="pt-section-title">We Building Everything Best That You Needed</h2>
                     <p className="pt-section-description">There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected words which If you are going to use
                        a passage of Lorem Ipsum.
                     </p>
                     <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book
                     </p>
                  </div>
                  <div className="row">
                     <div className="col-4 col-md-3">
                        <img className="img-fluid sign-img" src="images/sign.png" alt="demo-img"/>
                     </div>
                     <div className="col-8 col-md-9 mt-4 d-flex align-items-center">
                        <div className="image-box-content">
                           <h4 className="elementor-image-box-title">Martin Dummy</h4>
                           <p className="elementor-image-box-description">Chairman and founder</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="backgrount-image-right d-md-inline-block wow animate__fadeInRight">
            <img className="img-fluid" src="images/bg/bg-01.png" alt="bg-img"/>
         </div>
      </section>
      </>
    );

}
export default Aboutus;