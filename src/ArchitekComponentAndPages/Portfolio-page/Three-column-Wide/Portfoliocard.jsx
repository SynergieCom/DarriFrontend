import React from 'react';

const Portfoliocard = (prop) => {
   return (
      <div className="pt-portfolio-block-one">
         <div className="pt-portfolio-img">
            <a href="/portfolioSlider"><img src={prop.img} alt="architek-portfolio" /></a>
         </div>
         <div className="pt-portfolio-info">
            <span className="pt-text-primary">{prop.name}</span>
            <h5>{prop.type}</h5>
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
         </div>
      </div>
   );
}
export default Portfoliocard;