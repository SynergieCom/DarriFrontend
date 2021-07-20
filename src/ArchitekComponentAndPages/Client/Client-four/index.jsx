import React from 'react';
import Clientcard from './Clientcard';


const Client = () => {
    return(
    <>
          <section className="client pt-bg-primary">
         <div className="pt-bg-overley pt-opacity2"
            style={{backgroundImage: "url('images/bg/01.png')"}}>
         </div>
         <div className="container-pt">
            <div className="row d-flex justify-content-center">
               <div className="col-xl-6 col-md-10 text-center">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title text-white border-white">Clients</span>
                     <h2 className="pt-section-title text-white">Our Best Clients</h2>
                     <p className="pt-section-description text-white">It is a long established fact that a reader will be
                        distracted by the readable
                        content of a page when looking at its layout.
                     </p>
                  </div>
               </div>
            </div>
            <div className="container-pt row">
               <div className="col-sm-12">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="6"
                     data-lap_num="4" data-tab_num="3" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                     data-loop="true" data-margin="30">
                    <Clientcard 
                      img1="images/client/0001.png"  />
                    <Clientcard 
                      img1="images/client/0002.png"  />
                      <Clientcard 
                      img1="images/client/0003.png"  />  
                    <Clientcard 
                      img1="images/client/0004.png"  />  
                    <Clientcard 
                      img1="images/client/0005.png"  />  
                    <Clientcard 
                      img1="images/client/0006.png"  /> 
                     <Clientcard 
                      img1="images/client/0007.png"  /> 
                     <Clientcard 
                      img1="images/client/0008.png"  />

                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Client;