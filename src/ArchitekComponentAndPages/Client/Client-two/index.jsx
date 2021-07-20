import React from 'react';
import Clientcard from './Clientcard'


const Client = () => {
    return(
    <>
   <section className="client border-bottom">
         <div className="container">
            <div className="row">
               <div className="col-lg-3"></div>
               <div className="col-xl-6 text-center">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Best Service, Right Time, Right People</span>
                     <h2 className="pt-section-title">OUR CLIENTS</h2>
                     <p className="pt-section-description">There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form believable.
                     </p>
                  </div>
               </div>
               <div className="col-lg-3"></div>
            </div>
            <div className="row">
            <Clientcard 
                    img1="images/client/01.png" 
                    img2="images/client/001.png"  />
                    <Clientcard 
                    img1="images/client/02.png" 
                    img2="images/client/002.png"  />
                      <Clientcard 
                    img1="images/client/03.png" 
                    img2="images/client/003.png"  />  
                    <Clientcard 
                    img1="images/client/04.png" 
                    img2="images/client/004.png"  />  
                    <Clientcard 
                    img1="images/client/05.png" 
                    img2="images/client/005.png"  />  
                    <Clientcard 
                    img1="images/client/06.png" 
                    img2="images/client/006.png"  /> 
                     <Clientcard 
                    img1="images/client/07.png" 
                    img2="images/client/007.png"  /> 
                     <Clientcard 
                    img1="images/client/08.png" 
                    img2="images/client/008.png"  />
            </div>
         </div>
      </section>
      </>
    );

}
export default Client;