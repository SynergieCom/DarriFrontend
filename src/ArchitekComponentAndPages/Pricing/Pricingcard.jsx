import React from 'react';

const Pricingcard = (prop) => {
    return (
        <div className="col-xl-4 col-md-6 mb-4 mb-lg-0">
                  <div className={prop.cls}>
                     <div className="pt-price-detail">
                        <span className="pt-price-title">{prop.plan}</span>
                        <h2 className="price">{prop.price}</h2>
                        <p className="pt-price-duration">{prop.time}</p>
                        <div className="pt-bg-effect">
                           <img className="img-fluid" src="images/about/demo-7.png" alt="architek"/>
                        </div>
                     </div>
                     <ul className="pt-list-info">
                        <li>{prop.f1}</li>
                        <li>{prop.f2}</li>
                        <li>{prop.f3}</li>
                        <li>{prop.f4}</li>
                        <li>{prop.f5}</li>
                        <li>{prop.f6}</li>
                     </ul>
                     <a className="pt-button pt-btn-flat" href="/pricingplans">
                        <div className="pt-button-block">
                           <span className="pt-button-line-left"></span>
                           <span className="pt-button-text">Read More</span>
                           <span className="pt-button-line-right"></span>
                           <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                        </div>
                     </a>
                  </div>
               </div>

    );
}
export default Pricingcard;