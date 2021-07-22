import React from 'react';
import {useHistory} from "react-router-dom";
import {Button} from "reactstrap";


const NavBarHome = () => {
    const username = localStorage.getItem("username");
    const history = useHistory();

    const click = (e) => {
        return e.preventDefault()
    }

    const Logout = () => {
        localStorage.clear();
        history.push('/');
        history.go(0);
    }

    return (
        <>

            <header id="pt-header" className="pt-header-style-2 pt-has-sticky">
                <div className="row no-gutters">
                    <div className="col-lg-2 col-md-4">
                        <a className="navbar-brand" href="/#">
                            <h2>Darri</h2>
                            {/*<img className="img-fluid logo" src="images/logo-white.png" alt="architeck"/> */}
                        </a>
                    </div>
                    <div className="col-lg-10 col-md-8">
                        <div className="pt-top-header">
                            <div className="row no-gutters">
                                <div className="col-lg-3 col-xl-4">
                                    <div className="pt-header-social ">
                                        <ul>
                                            <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="/#"><i className="fab fa-github"></i></a></li>
                                            <li><a href="/#"><i className="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="/#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-xl-8">
                                    <div className="pt-header-contact text-right">
                                        <ul>
                                            <li>
                                                <a href="tel:+1800001658"><i className="fas fa-phone"></i>
                                                    <span>+1800-001-658</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:info@peacefulthemes.com"><i
                                                    className="fas fa-envelope"></i><span>info@peacefulthemes.com</span></a>
                                            </li>
                                            <li>
                                                <i className="far fa-clock"></i>
                                                <a href="/#">Mon - Sat 8:00 - 7:30, Sunday - CLOSED</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-bottom-header">
                            <div className="row no-gutters">
                                <div className="col-lg-12">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <i className="fas fa-bars"></i>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <div id="pt-menu-contain" className="pt-menu-contain">
                                                <ul id="pt-main-menu" className="navbar-nav ml-auto">
                                                    <li>
                                                        <a className="nav-item" href="/#">Home</a><i
                                                        className="ion-chevron-down"></i>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a href="/#">Main Home</a></li>
                                                            <li className="menu-item"><a
                                                                href="/construction">construction</a></li>
                                                            <li className="menu-item"><a
                                                                href="/architecture">architecture</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="menu-item" href="/#">Pages</a><i
                                                        className="ion-chevron-down"></i>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a className="menu-item"
                                                                                         href="/aboutus">About Us</a>
                                                            </li>
                                                            <li><a className="menu-item" href="/aboutme">About me</a>
                                                            </li>
                                                            <li><a className="menu-item" href="/ourservices">Our
                                                                Services</a></li>
                                                            <li><a className="menu-item" href="/ourteam">Our Team</a>
                                                            </li>
                                                            <li><a className="menu-item"
                                                                   href="/leadership">Leadership</a></li>
                                                            <li><a className="menu-item" href="/error404">404</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="/#">Portfolio</a><i className="ion-chevron-down"></i>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="/#">Portfolio Grid</a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item"><a href="/TwoColumns">2
                                                                        Columns</a></li>
                                                                    <li className="menu-item"><a href="/ThreeColumns">3
                                                                        Columns</a></li>
                                                                    <li className="menu-item"><a
                                                                        href="/ThreeColumnswide">3 Columns Wide</a></li>
                                                                    <li className="menu-item"><a
                                                                        href="/FourColumnswide">4 Columns Wide</a></li>
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
                                                                    <li className="menu-item"><a href="/onecolumnblog">One
                                                                        Column Blog</a></li>
                                                                    <li className="menu-item"><a href="/Twocolumnblog">two
                                                                        column blog</a></li>
                                                                    <li className="menu-item"><a
                                                                        href="/Threecolumnblog">three column blog</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="/#">Blog With Sidebar</a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item"><a
                                                                        href="/blogrightsidebar">Blog right sidebar</a>
                                                                    </li>
                                                                    <li className="menu-item"><a
                                                                        href="/blogleftsidebar">Blog left sidebar</a>
                                                                    </li>
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
                                                    {username != null && (
                                                        <li>
                                                            <a href="/#">Profile</a><i className="ion-chevron-down"></i>
                                                            <ul className="sub-menu">
                                                                <li><a href="/Contactus">My Profile</a></li>
                                                                <li>
                                                                    <center><Button onClick={Logout}>Logout</Button>
                                                                    </center>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    )}

                                                </ul>
                                            </div>
                                        </div>


                                        {username === null && (
                                            <div className="pt-header-info-box">
                                                <div className="pt-menu-search-block">
                                                    <a href="/Login">Login</a>
                                                </div>
                                            </div>
                                        )}


                                        <div className="pt-header-info-box">
                                            <div className="pt-menu-search-block">
                                                <a href="#!" onClick={click} id="pt-seacrh-btn"><i
                                                    className="fa fa-search"/></a>
                                                <div className="pt-search-form">
                                                    <form role="search" method="get" className="search-form"
                                                          onSubmit={click}>
                                                        <label>
                                                            <span className="screen-reader-text">Search for:</span>
                                                            <input type="search" className="search-field"
                                                                   placeholder="Search …" name="s"/>
                                                        </label>
                                                        <button type="submit" className="search-submit"><span
                                                            className="screen-reader-text">Search</span></button>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="pt-toggle-btn">
                                                <a href="#!" onClick={click} className="menu-toggle">Menu</a>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );

}
export default NavBarHome;