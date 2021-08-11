import React from 'react';

const style7 = {
   zIndex: "9",
   backgroundColor: "#ff5e14",
   fontFamily: "Jost, sansserif"
}

const Explore = () => {
    return(
    <>
    <section className="explore-feature pt-bg-light">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 mb-4 mb-lg-0">
                  <div className="about-img-block">
                     <img className="img-fluid about-img-0" src="images/about/demo-3.png" alt="background_image"/>
                     <img className="img-fluid about-img-1" src="images/about/demo-4.png" alt="background_image"/>
                     <img className="img-fluid about-img-2" src="images/about/demo-5.png" alt="background_image"/>
                  </div>
               </div>
               <div className="col-xl-6  d-flex align-items-center">
                  <div className="pt-section-title-box text-xl-left text-md-center text-center mb-0">
                     <span className="pt-section-sub-title">Explore The Features</span>
                     <h2 className="pt-section-title">Customer Service</h2>
                     <p className="pt-section-description">There are many variations of passages of Lorem Ipsum
                        available,but
                        the majority have suffered alteration in some form,by injected humour,or randomised words
                        which
                        don’t look even slightly believable.
                     </p>
                     <div className="mt-4">
                        <a className="pt-button pt-btn-flat" href="/SignUpCustomer">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left"></span>
                              <span className="pt-button-text">Register As Customer</span>
                              <span className="pt-button-line-right"></span>
                              <i className="fas fa-user-plus"></i>
                           </div>
                        </a>
                     </div>
                     <div className="mt-4">
                        <div className="pt-button-block">
                           <input type="submit" value="Read More"
                                  className="wpcf7-form-control wpcf7-submit"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Explore;