import React from 'react';


const Accordian = (prop) => {
    return(
    <>
     <section className="accordian">
         <div className="container">
            <div className="row d-flex align-items-center">
               <div className="about-img-block text-center col-xl-6 mb-5 mb-xl-0">
                  <img className="img-fluid about-img" src={prop.img} alt="demo-img"/>
                  <img className="img-fluid about-img-5 d-xl-inline-block d-md-inline-block d-none"
                     src="images/about/demo-6.png" alt="background"/>
               </div>
               <div className="col-xl-6">
                  <div className="pt-section-title-box text-left">
                     <span className="pt-section-sub-title">Standard In Industrial Contracting.</span>
                     <h2 className="pt-section-title">We Building Everything That Needed You</h2>
                     <p className="pt-section-description">It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                     </p>
                  </div>
                  <div className="pt-accordion-block">
                     <div className="pt-accordion-box pt-active 1">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">
                              Automobile Manufacturing
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> There are many variations of passages of Lorem Ipsum available, but
                              the majority have suffered alteration in some form, by injected humour, or randomised words
                              which don’t look even slightly believable. 
                           </p>
                        </div>
                     </div>
                     <div className="pt-accordion-box 2">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">
                              Oil Gas &amp; Power Energy Plant
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> There are many variations of passages of Lorem Ipsum available, but
                              the majority have suffered alteration in some form, by injected humour, or randomised words
                              which don’t look even slightly believable. 
                           </p>
                        </div>
                     </div>
                     <div className="pt-accordion-box 3">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">Petroleum &amp; Refinery
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> There are many variations of passages of Lorem Ipsum available, but
                              the majority have suffered alteration in some form, by injected humour, or randomised words
                              which don’t look even slightly believable. 
                           </p>
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
export default Accordian;