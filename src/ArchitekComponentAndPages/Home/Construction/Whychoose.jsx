import React from 'react';


const Whychoose = () => {
    return(
    <>
     <section className="choose-us pt-bg-dark">
         <div className="pt-bg-overley" style={{backgroundImage: "url('images/bg/01.jpg')"}}></div>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 mb-5">
                  <div className="bg-white p-4 p-md-5">
                     <div className="pt-section-title-box text-left">
                        <span className="pt-section-sub-title">Why Choose Us?</span>
                        <h2 className="pt-section-title">Our Special Services</h2>
                        <p className="pt-section-description">It is a long established fact that a reader will be distracted by
                           the readable content of a page when looking at its layout.
                        </p>
                     </div>
                     <div className="progress-outer">
                        <div className="progress">
                           <div className="progress-bar progress-bar-info active" style={{width: "90%"}}></div>
                           <div className="progress-value">Masonry Works and Plaster</div>
                        </div>
                        <div className="progress">
                           <div className="progress-bar progress-bar-info active" style={{width: "67%"}}></div>
                           <div className="progress-value">Pre Cast Work</div>
                        </div>
                        <div className="progress">
                           <div className="progress-bar progress-bar-info active" style={{width: "97%"}}></div>
                           <div className="progress-value">Pre Engineered Structures</div>
                        </div>
                        <div className="progress">
                           <div className="progress-bar progress-bar-info active" style={{width: "85%"}}></div>
                           <div className="progress-value">Engineered Structures</div>
                        </div>
                     </div>
                     <a className="pt-button pt-btn-flat" href="/aboutus">
                        <div className="pt-button-block">
                           <span className="pt-button-line-left"></span>
                           <span className="pt-button-text">Load More</span>
                           <span className="pt-button-line-right"></span>
                           <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="col-lg-6"></div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Whychoose;