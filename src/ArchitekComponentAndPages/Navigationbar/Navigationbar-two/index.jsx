import React from 'react';


const Nav = () => {
   return (
      <>
         <header id="pt-header" className="pt-header-style-1 pt-has-sticky">
            <div className="pt-bottom-header">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                           <a className="navbar-brand" href="/">
                              <img className="img-fluid logo" src="images/logo.png" alt="architeck" />
                           </a>
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <i className="fas fa-bars"></i>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <div id="pt-menu-contain" className="pt-menu-contain">
                                 <ul id="pt-main-menu" className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                       <a href="/#" aria-current="page">Home</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item" ><a href="/" aria-current="page">Main Home</a></li>
                                          <li className="menu-item"><a href="/construction">construction</a></li>
                                          <li className="menu-item"><a href="/architecture">architecture</a></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item">
                                       <a href="/#">Pages</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item"><a href="/aboutus">About Us</a></li>
                                          <li className="menu-item"><a href="/aboutme">About me</a></li>
                                          <li className="menu-item"><a href="/ourservices">Our Services</a></li>
                                          <li className="menu-item"><a href="/ourteam">Our Team</a></li>
                                          <li className="menu-item"><a href="/leadership">Leadership</a></li>
                                          <li className="menu-item"><a href="/error404">404</a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="/#">Portfolio</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                          <li>
                                             <a href="/#">Portfolio Grid</a><i className="ion-chevron-down"></i>
                                             <ul className="sub-menu">
                                                <li className="menu-item"><a href="/TwoColumns">2 Columns</a></li>
                                                <li className="menu-item"><a href="/ThreeColumns">3 Columns</a></li>
                                                <li className="menu-item"><a href="/ThreeColumnswide">3 Columns Wide</a></li>
                                                <li className="menu-item"><a href="/FourColumnswide">4 Columns Wide</a></li>
                                             </ul>
                                          </li>
                                          <li><a href="/portfolioSlider">Portfolio Slider</a></li>
                                          <li><a href="/Portfoliogallery">Portfolio Gallery</a></li>
                                          <li><a href="/Portfoliosingle">Portfolio Single</a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="/#">Blog</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                          <li>
                                             <a href="/#">Blog Grid</a>
                                             <ul className="sub-menu">
                                                <li className="menu-item"><a href="/onecolumnblog">One Column Blog</a></li>
                                                <li className="menu-item"><a href="/Twocolumnblog">two column blog</a></li>
                                                <li className="menu-item"><a href="/Threecolumnblog">three column blog</a></li>
                                             </ul>
                                          </li>
                                          <li>
                                             <a href="/#">Blog With Sidebar</a>
                                             <ul className="sub-menu">
                                                <li className="menu-item"><a href="/blogrightsidebar">Blog right sidebar</a></li>
                                                <li className="menu-item"><a href="/blogleftsidebar">Blog left sidebar</a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="/#">Contact Us</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                          <li><a href="/Contactus">Contact Us</a></li>
                                          <li><a href="/Getintouch">Get In Touch</a></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="pt-header-info-box">
                              <div className="pt-header-call">
                                 <a href="!tel:+1800001658">
                                    <i className="ion-ios-telephone"></i>
                                    <div className="pt-call-info">
                                       <h5>+1800-001-658</h5>
                                       <span>Make A call </span>
                                    </div>
                                 </a>
                              </div>
                              <div className="pt-btn-container">
                                 <a href="!https://docs.reduxframework.com/core/the-basics/required/" className="pt-button">
                                    <div className="pt-button-block">
                                       <span className="pt-button-line-left"></span>
                                       <span className="pt-button-text">Get Quote</span>
                                       <span className="pt-button-line-right"></span>
                                       <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );

}
export default Nav;