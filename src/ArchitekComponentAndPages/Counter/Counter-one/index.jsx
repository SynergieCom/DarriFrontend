import React from 'react';
import Countercard from './Countercard';

const Counter = () => {
    return(
    <>
     <section className=" 1 py-0">
         <div className="container pt-counter1 pt-bg-primary">
            <div className="row">
               <div className="col-sm-12">
                  <div className="pt-counter-top1 pt-counter">
                     <div className="pt-bg-overley1 pt-opacity5"
                        style={{backgroundImage: "url('images/bg/02.png')"}}>
                     </div>
                     <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center">
                           <div className="pt-counter-contain mb-md-4 mb-0">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-008-factory"></i>
                                 </div>
                              </div>
                             <Countercard 
                             todata="3200"
                             title="Project Complated"
                             />
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center">
                           <div className="pt-counter-contain mb-md-4 mb-0">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-009-crane"></i>
                                 </div>
                              </div>
                              <Countercard 
                             todata="2500"
                             title="Happy Customer"
                             />
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-md-0 text-center">
                           <div className="pt-counter-contain">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-024-graphic-tool"></i>
                                 </div>
                              </div>
                              <Countercard 
                             todata="2800"
                             title="Painting Services"
                             />
                           </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 text-center">
                           <div className="pt-counter-contain">
                              <div className="pt-counter-img">
                                 <div className="pt-counter-media">
                                    <i className=" flaticon-026-settings-2"></i>
                                 </div>
                              </div>
                              <Countercard 
                             todata="5000"
                             title="Work Employed"
                             />
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