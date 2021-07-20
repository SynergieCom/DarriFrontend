import React from 'react';


const Conatctus  = () => {
    return(
    <>
      <section className="conatct-us pt-bg-dark section-style">
         <div className="pt-bg-overley1" style={{ backgroundImage: "url('images/bg/01.jpg')"}}></div>
         <div className="container ">
            <div className="row pb-5">
               <div className="col-xl-6 z-index-1">
                  <div className="pt-section-title-box text-xl-left text-center  text-xl-white mb-md-0">
                     <span className="pt-section-sub-title text-white border-white">Contact Us Today</span>
                     <h2 className="pt-section-title text-white">For All Your Construction Needs!</h2>
                     <p className="pt-section-description text-white">It is a long established fact that a reader will be
                        distracted by the readable content sof a page when looking at its layout.
                     </p>
                  </div>
               </div>
               <div className="col-xl-6 d-xl-flex justify-content-xl-end align-items-center ">
                  <div className="pt-btn-container align-items-center text-center">
                     <a className="pt-button pt-btn-flat pt-bg-primary " href="/ourservices">
                        <div className="pt-button-block">
                           <span className="pt-button-line-left"></span>
                           <span className="pt-button-text">contect us</span>
                           <span className="pt-button-line-right"></span>
                           <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Conatctus ;