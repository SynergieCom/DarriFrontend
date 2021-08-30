import React from 'react';



const Footer = () => {
    return(
    <>
    <footer id="pt-footer">
         <div className="pt-footer-style-1">
            <div className="pt-footer-top">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-md-6">
                        <div className="footer-logo">
                           <div className="row">
                              <div className="col-sm-12">
                                 <img className="img-fluid" src="images/LOGO1.png" alt="logo-white"/>
                                 <p className="text-white">Lorem Ipsum is simply dummied text of the printing and typesetting
                                    industry.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <div className="pt-footer1">
                           <h4 className="footer-title text-white">Useful links</h4>
                           <div className="menu-footer-menu-container">
                              <ul id="menu-footer-menu" className="menu">
                                 <li>
                                    <a href="/ourprocess">Our Process</a>
                                 </li>
                                 <li>
                                    <a href="/ourteam">Our Team</a>
                                 </li>
                                 <li>
                                    <a href="/contactus">Contact Us</a>
                                 </li>
                                 <li>
                                    <a href="/ourclients">Our Clients</a>
                                 </li>
                                 <li>
                                    <a href="/aboutus">About Us</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3  col-md-6 ">
                        <div className="pt-footer1-menu pt-footer1">
                           <h4 className="footer-title">Our serive</h4>
                           <div className="list-inline pt-footer1-menu">
                              <ul className="pt-service">
                                 <li>
                                    <a href="!#">
                                    Visualizing Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Daily Dose of Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Architizer Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Daily Dose of Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Visualizing Architecture </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3  col-md-6">
                        <div className="pt-footer2">
                           <h4 className="footer-title text-white">Our Contact</h4>
                           <div className="row">
                              <div className="col-sm-12">
                                 <ul className="pt-contact pt-2">
                                    <li>
                                       <i className="fas fa-map-marker-alt"></i>
                                       <span className="text-white">
                                       Themeforest, Envato HQ 24 Fifth st.,Los Angeles, USA </span>
                                     
                                    </li>
                                    <li className="pt-3">
                                       <a href="tel:+1800001658"><i className="fa fa-phone"></i>
                                       <span className="text-white">+1800-001-658</span>
                                       </a>
                                    </li>
                                    <li className="pt-3">
                                       <a href="mailto:info@peacefulthemes.com"><i className="fa fa-envelope"></i><span
                                          className="text-white">info@peacefulthemes.com</span></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="pt-copyright-footer">
               <div className="container">
                  <div className="row flex-row-reverse">
                     <div className="col-md-6 text-right align-self-center">
                        <span className="pt-copyright"><a target="_blank" href="/ourservices"> Copyright 2020 architeck All Rights
                        Reserved.</a></span>
                     </div>
                     <div className="col-md-6">
                        <div className="pt-footer-social">
                           <ul>
                              <li><a href="!#"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="!#"><i className="fab fa-github"></i></a></li>
                              <li><a href="!#"><i className="fab fa-google-plus-g"></i></a></li>
                              <li><a href="!#"><i className="fab fa-instagram"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      </>
    );

}
export default Footer;