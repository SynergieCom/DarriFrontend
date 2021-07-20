import React from 'react';


const Counter = () => {
    return(
    <>
    <section className="counter pt-bg-primary py-5">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className=" pt-counter">
                     <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center">
                           <div className="pt-counter-contain mb-md-4 mb-0">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-008-factory"></i>
                                 </div>
                              </div>
                              <div className="pt-counter-info">
                                 <div className="pt-counter-num-prefix">
                                    <h5 className="timer" data-to="3200" data-speed="5000">3200</h5>
                                    <span className="pt-counter-prefix"></span>
                                 </div>
                                 <p className="pt-counter-description mb-0 text-white">Project Complated</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center">
                           <div className="pt-counter-contain mb-md-4 mb-0">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-009-crane"></i>
                                 </div>
                              </div>
                              <div className="pt-counter-info">
                                 <div className="pt-counter-num-prefix">
                                    <h5 className="timer" data-to="5000" data-speed="5000">5000</h5>
                                    <span className="pt-counter-prefix"></span>
                                 </div>
                                 <p className="pt-counter-description mb-0 text-white">Work Employed</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-md-0 text-center">
                           <div className="pt-counter-contain">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-024-graphic-tool"></i>
                                 </div>
                              </div>
                              <div className="pt-counter-info">
                                 <div className="pt-counter-num-prefix">
                                    <h5 className="timer" data-to="2500" data-speed="5000">2500</h5>
                                    <span className="pt-counter-prefix"></span>
                                 </div>
                                 <p className="pt-counter-description mb-0 text-white">Happy Customers</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 text-center">
                           <div className="pt-counter-contain">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-026-settings-2"></i>
                                 </div>
                              </div>
                              <div className="pt-counter-info">
                                 <div className="pt-counter-num-prefix">
                                    <h5 className="timer" data-to="2800" data-speed="5000">2800</h5>
                                    <span className="pt-counter-prefix"></span>
                                 </div>
                                 <p className="pt-counter-description mb-0 text-white">Painting Services</p>
                              </div>
                           </div>
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
export default Counter;