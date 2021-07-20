import React from 'react';
import Clientcard from './Clientcard';
const Client = () => {
    return(
    <>
       <section className="client pt-bg-dark">
         <div className="pt-bg-overley1" style={{backgroundImage: "url('images/bg/04.jpg')"}}></div>
         <div className="container">
            <div className="row">
               <div className="pt-section-big-title  text-center wow animate__fadeInUp" data-wow-duration="1s"
                  data-wow-delay="1s">
                  <h2 className="big-heading-title">CUSTOMER</h2>
               </div>
               <div className="col-lg-3"> </div>
               <div className="col-xl-6  text-center">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title text-white border-white">Best Service, Right Time, Right
                     People</span>
                     <h2 className="pt-section-title text-white">OUR CLIENTS</h2>
                     <p className="pt-section-description text-white">There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some form believable.
                     </p>
                  </div>
               </div>
               <div className="col-lg-3"> </div>
            </div>
            <div className="row text-center">
            <Clientcard 
                    img1="images/client/0001.png" 
                    img2="images/client/001.png"  />
                    <Clientcard 
                    img1="images/client/0002.png" 
                    img2="images/client/002.png"  />
                      <Clientcard 
                    img1="images/client/0003.png" 
                    img2="images/client/003.png"  />  
                    <Clientcard 
                    img1="images/client/0004.png" 
                    img2="images/client/004.png"  />  
                    <Clientcard 
                    img1="images/client/0005.png" 
                    img2="images/client/005.png"  />  
                    <Clientcard 
                    img1="images/client/0006.png" 
                    img2="images/client/006.png"  /> 
                     <Clientcard 
                    img1="images/client/0007.png" 
                    img2="images/client/007.png"  /> 
                     <Clientcard 
                    img1="images/client/0008.png" 
                    img2="images/client/008.png"  />
            </div>
         </div>
      </section>
      </>
    );

}
export default Client;