import React from 'react';
import Pricingcard from './Pricingcard';


const Pricing = () => {
    return(
    <>
      <section className="pricing">
         <div className="container">
            <div className="row">
               <div className=" col-xl-2">
               </div>
               <div className="col-xl-8 text-center">
                  <div className="pt-big-title mt-4">
                     <h2 className="pt-big-title1 ">challenger</h2>
                  </div>
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">It Includes A Key Benefit.</span>
                     <h2 className="pt-section-title">Our Best Price Plan</h2>
                     <p className="pt-section-description">It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                     </p>
                  </div>
               </div>
               <div className="col-xl-2">
               </div>
            </div>
            <div className="row">
              <Pricingcard 
               cls="pt-price-block text-center"
               plan=" BASIC "
               price="$ 29.00"
               time="Per Month"
               f1="Five brand monitors"
               f2={<del>12-month fixed price</del>}
               f3={<del>Transmission charge</del>}
               f4={<del>Marketing strategy</del>}
               f5={<del>Free Server Domain</del>}
               f6="Web Optimized"
               />
               <Pricingcard 
               cls="pt-price-block active text-center"
               plan=" STANDARD "
               price="$ 69.00"
               time="Per Month"
               f1="Five brand monitors"
               f2="12-month fixed price"
               f3={<del>Transmission charge</del>}
               f4="Marketing strategy"
               f5={<del>Free Server Domain</del>}
               f6="Web Optimized"
               />
                <Pricingcard 
               cls="pt-price-block text-center"
               plan=" BUSINESS "
               price="$ 99.00"
               time="Per Month"
               f1="Five brand monitors"
               f2="12-month fixed price"
               f3="Transmission charge"
               f4="Marketing strategy"
               f5="Free Server Domain"
               f6="Web Optimized"
               />
           
              
            </div>
         </div>
      </section>
      </>
    );

}
export default Pricing;