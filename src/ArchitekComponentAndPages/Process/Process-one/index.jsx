import React from 'react';


const Procces = () => {
    return(
    <>
    <section className="procces py-0">
         <div className="container-fluid px-0">
            <div className="row no-gutters">
               <div className="col-xl-4 col-md-12">
                  <div className="pt-process-step pt-process-1 pt-bg-dark">
                     <div className="pt-process-info">
                        <h3 className="pt-process-title text-white">Research &amp; Analysis</h3>
                        <p className="pt-process-description text-white">It is a long established fact that a reader will be
                           distracted by the readable content of a page when looking at its layout. 
                        </p>
                     </div>
                     <div className="pt-btn-container">
                        <a className="pt-button pt-btn-link" href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left pt-btn-line-left"></span>
                              <span className="pt-button-text text-white">Read more</span>
                              <span className="pt-button-line-right pt-btn-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon  text-white"></i>
                           </div>
                        </a>
                     </div>
                     <span className="pt-process-number">01</span>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="pt-bg-overley1 pt-opacity4" style={{backgroundImage: "url('images/process/01.jpg')"}}></div>
               </div>
               <div className="col-xl-4 col-md-12">
                  <div className="pt-process-step pt-process-1 pt-bg-dark">
                     <div className="pt-process-info">
                        <h3 className="pt-process-title text-white">Production Launch</h3>
                        <p className="pt-process-description text-white">It is a long established fact that a reader will be
                           distracted by the readable content of a page when looking at its layout. 
                        </p>
                     </div>
                     <div className="pt-btn-container">
                        <a className="pt-button pt-btn-link" href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left pt-btn-line-left"></span>
                              <span className="pt-button-text text-white">Read more</span>
                              <span className="pt-button-line-right pt-btn-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon  text-white"></i>
                           </div>
                        </a>
                     </div>
                     <span className="pt-process-number">02</span>
                  </div>
               </div>
            </div>
            <div className="row no-gutters">
               <div className="col-xl-4">
                  <div className="pt-bg-overley1 pt-opacity4" style={{backgroundImage: "url('images/process/02.jpg')"}}></div>
               </div>
               <div className="col-xl-4 col-md-12">
                  <div className="pt-process-step pt-process-1 pt-bg-dark">
                     <div className="pt-process-info">
                        <h3 className="pt-process-title text-white">Industry Development</h3>
                        <p className="pt-process-description text-white">It is a long established fact that a reader will be
                           distracted by the readable content of a page when looking at its layout. 
                        </p>
                     </div>
                     <div className="pt-btn-container">
                        <a className="pt-button pt-btn-link" href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left pt-btn-line-left"></span>
                              <span className="pt-button-text text-white">Read more</span>
                              <span className="pt-button-line-right pt-btn-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon  text-white"></i>
                           </div>
                        </a>
                     </div>
                     <span className="pt-process-number">03</span>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="pt-bg-overley1 pt-opacity4"  style={{backgroundImage: "url('images/process/03.jpg')"}}></div>
                  
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Procces;