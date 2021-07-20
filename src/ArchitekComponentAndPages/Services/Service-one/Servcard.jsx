import React from 'react';


const Servcard = (prop) => {
    return(
    <>
     <div className="col-xl-4 col-md-6 mb-5">
                  <div className="pt-service-box pt-service-box-1">
                     <div className="pt-service-banner">
                        <img className="img-fluid" src={prop.img} alt="servicebox"/>
                        <div className="pt-service-media">
                           <i className=" flaticon-008-factory"></i>
                        </div>
                     </div>
                     <div className="pt-service-box-info">
                        <h4 className="pt-service-title">{prop.title}</h4>
                        <p className="pt-service-description">{prop.des}
                        </p>
                        <a className="pt-button pt-btn-link" href="/ourservices">
                           <div className="pt-button-block ">
                              <span className="pt-button-line-left"></span>
                              <span className="pt-button-text">Read more</span>
                              <span className="pt-button-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
      </>
    );

}
export default Servcard;