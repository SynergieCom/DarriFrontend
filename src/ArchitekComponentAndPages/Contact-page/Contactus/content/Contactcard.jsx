import React from 'react';


const Contactcard = (prop) => {
    return(
    <>
      <div className="pt-contact-box pt-contact-box-1">
                     <div className="pt-contact-box-media">
                        <img className="img-fluid" src={prop.img} alt="#"/>
                     </div>
                     <div className="pt-contact-box-info">
                        <h4 className="pt-contact-box-title">{prop.name}</h4>
                        <ul className="pt-contact-info">
                           <li>
                              <span>
                              <i className="fa fa-map-marker"></i>
                              <span>{prop.des}</span>
                              </span>
                           </li>
                           <li>
                              <span>
                              <i className="fa fa-phone"></i>
                              <span>
                              <a href="tel:+56712345678900">{prop.ph1}</a>
                              <a href="tel:+56712345678901">{prop.ph2}</a>
                              </span>
                              </span>
                           </li>
                           <li>
                              <span>
                              <i className="fa fa-envelope"></i>
                              <span>
                              <a href="mailto:info@peacefulthemes.com">{prop.email1}</a>
                              <a href="mailto:info2@peacefulthemes.com">{prop.email2}</a>
                              </span>
                              </span>
                           </li>
                        </ul>
                     </div>
                  </div>
      </>
    );

}
export default Contactcard;