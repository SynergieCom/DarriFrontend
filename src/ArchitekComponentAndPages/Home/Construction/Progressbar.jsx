import React from 'react';


const Progressbar = () => {
    return(
    <>
     <section className="circle-progressbar pb-0">
         <div className="container circle-progress pt-bg-primary">
            <div className="row">
               <div className="col-xl-3 col-md-6">
                  <div className="pt-circle-progress">
                     <div className="pt-circle-progress-bar circle" data-size="175" data-thickness="5" data-skill-level="95"
                        data-empty-color="rgba(255, 255, 255, 0.19)" data-fill-color="#FFFFFF">
                        <canvas width="175" height="175"></canvas>
                        <span className="pt-progress-count">95%</span>
                        <h6>Powerfull Strategy</h6>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6 ">
                  <div className="pt-circle-progress">
                     <div className="pt-circle-progress-bar circle" data-size="175" data-thickness="5" data-skill-level="80"
                        data-empty-color="rgba(255, 255, 255, 0.19)" data-fill-color="#FFFFFF">
                        <canvas width="175" height="175"></canvas>
                        <span className="pt-progress-count">80%</span>
                        <h6>Award Winning</h6>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6 ">
                  <div className="pt-circle-progress">
                     <div className="pt-circle-progress-bar circle" data-size="175" data-thickness="5" data-skill-level="90"
                        data-empty-color="rgba(255, 255, 255, 0.19)" data-fill-color="#FFFFFF">
                        <canvas width="175" height="175"></canvas>
                        <span className="pt-progress-count">90%</span>
                        <h6>Accurate Testing</h6>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6 ">
                  <div className="pt-circle-progress">
                     <div className="pt-circle-progress-bar circle" data-size="175" data-thickness="5" data-skill-level="85"
                        data-empty-color="rgba(255, 255, 255, 0.19)" data-fill-color="#FFFFFF">
                        <canvas width="175" height="175"></canvas>
                        <span className="pt-progress-count">85%</span>
                        <h6>High Performance</h6>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Progressbar;