import React from 'react';


const Pricing = () => {
    return(
    <>
    <section className="pricing">
         <div className="container">
            <div className="row">
               <div className=" col-xl-2">
               </div>
               <div className="col-xl-8 text-center">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Construction Experience</span>
                     <h2 className="pt-section-title">The Best Construction Experience</h2>
                     <p className="pt-section-description">It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                     </p>
                  </div>
               </div>
               <div className="col-xl-2">
               </div>
            </div>
            <div className="row">
               <div className="col-xl-4 col-md-12 mb-4 mb-lg-0">
                  <div className="pt-price-block text-center">
                     <div className="pt-price-detail">
                        <span className="pt-price-title"> BASIC </span>
                        <h2 className="price">$ 29.00</h2>
                        <p className="pt-price-duration">Per Month</p>
                        <div className="pt-bg-effect">
                           <img className="img-fluid" src="images/about/demo-7.png" alt="architek"/>
                        </div>
                     </div>
                     <ul className="pt-list-info">
                        <li>Five brand monitors</li>
                        <li><del>12-month fixed price</del></li>
                        <li><del>Transmission charge</del></li>
                        <li><del>Marketing strategy</del></li>
                        <li><del>Free Server Domain</del></li>
                        <li>Web Optimized</li>
                     </ul>
                     <a className="pt-button pt-btn-flat" href="/">
                        <div className="pt-button-block">
                           <span className="pt-button-line-left"></span>
                           <span className="pt-button-text">Read More</span>
                           <span className="pt-button-line-right"></span>
                           <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="col-xl-4 col-md-12 mb-4 mb-lg-0">
                  <div className="pt-price-block active text-center">
                     <div className="pt-price-detail">
                        <span className="pt-price-title"> STANDARD </span>
                        <h2 className="price">$ 69.00</h2>
                        <p className="pt-price-duration">Per Month</p>
                        <div className="pt-bg-effect">
                           <img className="img-fluid" src="images/about/demo-7.png" alt="architek"/>
                        </div>
                     </div>
                     <ul className="pt-list-info">
                        <li>Five brand monitors</li>
                        <li>12-month fixed price</li>
                        <li><del>Transmission charge</del></li>
                        <li>Marketing strategy</li>
                        <li><del>Free Server Domain</del></li>
                        <li>Web Optimized</li>
                     </ul>
                     <a className="pt-button pt-btn-flat pt-bg-primary" href="/">
                        <div className="pt-button-block">
                           <span className="pt-button-line-left"></span>
                           <span className="pt-button-text">Read More</span>
                           <span className="pt-button-line-right"></span>
                           <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="col-xl-4 col-md-12 mt-xl-0 mt-4 ">
                  <div className="pt-price-block text-center">
                     <div className="pt-price-detail">
                        <span className="pt-price-title"> BUSINESS </span>
                        <h2 className="price">$ 99.00</h2>
                        <p className="pt-price-duration">Per Month</p>
                        <div className="pt-bg-effect">
                           <img className="img-fluid" src="images/about/demo-7.png" alt="architek"/>
                        </div>
                     </div>
                     <ul className="pt-list-info">
                        <li>Five brand monitors</li>
                        <li>12-month fixed price</li>
                        <li>Transmission charge</li>
                        <li>Marketing strategy</li>
                        <li>Free Server Domain</li>
                        <li>Web Optimized</li>
                     </ul>
                     <a className="pt-button pt-btn-flat" href="/">
                        <div className="pt-button-block">
                           <span className="pt-button-line-left"></span>
                           <span className="pt-button-text">Read More</span>
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
export default Pricing;