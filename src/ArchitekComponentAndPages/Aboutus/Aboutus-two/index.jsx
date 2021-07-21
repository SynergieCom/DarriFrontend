import React from 'react';


const Aboutus2 = () => {
    return(
    <>
    <section className="about pt-bg-light section-style">
         <div className="pt-bg-overley pt-opacity3" style={{backgroundImage: "url('images/bg/05.jpg')"}}>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xl-8 z-index-1">
                  <div className="pt-section-title-box text-center text-xl-left">
                     <h2 className="pt-section-title">Profitable Solutions</h2>
                     <p className="pt-section-description">There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected humour, or randomised words which
                        don’t look even slightly believable.
                     </p>
                     <div className="mt-4">
                        <a className="pt-button pt-btn-flat pt-button-dark"
                           href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left"></span>
                              <span className="pt-button-text">Click Here</span>
                              <span className="pt-button-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4"></div>
            </div>
         </div>
      </section>
   {/*    <!--=================================
         about -->
      <!--=================================
         About us --> */}
      <section className="about-us">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 mb-4 mb-lg-0">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Working With Excellent</span>
                     <h2 className="pt-section-title">Construction & Engineering Real Solutions.</h2>
                     <p className="pt-section-description">It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                     </p>
                  </div>
                  <ul className="icon-list-items mt-4 mt-lg-5">
                     <li className="icon-list-item">
                        <span className="icon-list-icon">
                        <i aria-hidden="true" className="fas fa-check"></i>
                        </span>
                        <span className="icon-list-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                     </li>
                     <li className="icon-list-item">
                        <span className="icon-list-icon">
                        <i aria-hidden="true" className="fas fa-check"></i>
                        </span>
                        <span className="icon-list-text">Integer egestas metus blandit sagittis vestibulum.</span>
                     </li>
                     <li className="icon-list-item">
                        <span className="icon-list-icon">
                        <i aria-hidden="true" className="fas fa-check"></i>
                        </span>
                        <span className="icon-list-text">Nunc iaculis libero in ipsum molestie fermentum, a molestie nulla
                        aliquet.</span>
                     </li>
                     <li className="icon-list-item">
                        <span className="icon-list-icon">
                        <i aria-hidden="true" className="fas fa-check"></i>
                        </span>
                        <span className="icon-list-text">Integer eget massa malesuada, semper metus in, mattis diam.</span>
                     </li>
                  </ul>
                  <div className="mt-4 mt-lg-5">
                     <a className="pt-button pt-btn-flat pt-bg-primary" href="/aboutus">
                        <div className="pt-button-block">
                           <span className="pt-button-line-left"></span>
                           <span className="pt-button-text">View More</span>
                           <span className="pt-button-line-right"></span>
                           <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                        </div>
                     </a>
                  </div>
               </div>
               <div className=" col-xl-6 col-lg-12  pt-md-4 d-flex align-items-center">
             <div id="44c60" className="content__image-wrap content__image-wrap--half" data-color="#FF631B"
                           data-direction="rl">
                  <img className="img-fluid" src="images/about/demo-6.jpg" alt="demo-img"/>
               </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Aboutus2;