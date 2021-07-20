import React from 'react';



const Nav = () => {
   const click = (e) => { 
      return e.preventDefault() }
   return (
      <>

         <header id="pt-header" className="pt-header-default ">
            <div className="pt-top-header">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-sm-6 ">
                        <div className="pt-header-social ">
                           <ul>
                              <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="/#"><i className="fab fa-github"></i></a></li>
                              <li><a href="/#"><i className="fab fa-google-plus-g"></i></a></li>
                              <li><a href="/#"><i className="fab fa-instagram"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-6 col-sm-6 d-none d-md-inline-block">
                        <div className="pt-header-contact text-right">
                           <ul>
                              <li>
                                 <a href="tel:+1800001658"><i className="fas fa-phone"></i>
                                    <span>+1800-001-658</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="mailto:info@peacefulthemes.com"><i className="fas fa-envelope"></i><span>info@peacefulthemes.com</span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="pt-bottom-header">
               <div className="container">
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
                                    <a className="nav-item" href="/" >Home</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item"><a href="/">Main Home</a></li>
                                          <li className="menu-item"><a href="/construction">construction</a></li>
                                          <li className="menu-item"><a href="/architecture">architecture</a></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item">
                                    <a className="menu-item"   href="/">Pages</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                       <li className="menu-item"><a className="menu-item"  href="/aboutus">About Us</a></li>
                                       <li ><a className="menu-item"  href="/aboutme">About me</a></li>
                                          <li ><a className="menu-item"  href="/ourservices">Our Services</a></li>
                                          <li ><a className="menu-item"  href="/ourteam">Our Team</a></li>
                                          <li><a className="menu-item"  href="/leadership">Leadership</a></li>
                                          <li ><a className="menu-item"  href="/error404">404</a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="/#">Portfolio</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                          <li>
                                             <a href="/#">Portfolio Grid</a>
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
                                       <a href="/">Contact Us</a><i className="ion-chevron-down"></i>
                                       <ul className="sub-menu">
                                       <li><a href="/Contactus">Contact Us</a></li>
                                          <li><a href="/Getintouch">Get In Touch</a></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="pt-menu-search-block">
                              <a href="/architecture" onClick={click} id="pt-seacrh-btn"><i className="fa fa-search"></i></a>
                              <div className="pt-search-form">
                                 <form role="search" method="get" className="search-form" action="/">
                                    <label>
                                       <span className="screen-reader-text">Search for:</span>
                                       <input type="search" className="search-field" placeholder="Search …"  name="s" />
                                    </label>
                                    <button type="submit" className="search-submit"><span className="screen-reader-text">Search</span></button>
                                 </form>
                              </div>
                           </div>

                        </nav>
                     </div>
                  </div>
               </div>
               <div>
               </div>
            </div>
         </header>
      </>
   );

}
export default Nav;