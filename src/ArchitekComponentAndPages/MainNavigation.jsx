import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./Pages/Error404";
import Home from "./Home/Main-home";
import Construction from "./Home/Construction";
import architecture from "./Home/architecture";
import Aboutus from "./Pages/Aboutus";
import Aboutme from "./Pages/Aboutme";
import Ourservices from "./Pages/Ourservices";
import Leadership from "./Pages/Leadership";
import Contactus from "./Contact-page/Contactus";
import Getintouch from "./Contact-page/Getintouch";
import Ourteam from "./Pages/Ourteam";
import TwoColumns from "./Portfolio-page/Two-columns";
import ThreeColumns from "./Portfolio-page/Three-columns";
import ThreeColumnswide from "./Portfolio-page/Three-column-Wide";
import FourColumnswide from "./Portfolio-page/Four-column-Wide";
import PortfolioSlider from "./Portfolio-page/Portfolio-slider";
import Portfoliogallery from "./Portfolio-page/Portfolio-gallery";
import Portfoliosingle from "./Portfolio-page/Portfolio-single";
import Onecolumnblog from "./Blog-page/OneColumnBlog";
import Twocolumnblog from "./Blog-page/TwoColumnBlog";
import Threecolumnblog from "./Blog-page/ThreeColumnBlog";
import Blogleftsidebar from "./Blog-page/Blogleftsidebar";
import Blogrightsidebar from "./Blog-page/Blogrightsidebar";

const MainNavigation = () => {
  return (
    <>
      <Router>
        <Switch>
          {/** Home */}
          <Route path="/" exact={true} component={Home} />
          <Route path="/Construction" exact={true} component={Construction} />
          <Route path="/architecture" exact={true} component={architecture} />
          {/* pages */}
          <Route path="/aboutus" exact={true} component={Aboutus} />
          <Route path="/ourservices" exact={true} component={Ourservices} />
          <Route path="/aboutme" exact={true} component={Aboutme} />
          <Route path="/leadership" exact={true} component={Leadership} />
          <Route path="/ourteam" exact={true} component={Ourteam} />
          <Route path="/error404" exact={true} component={Error404} />
          {/* Portfolio Pages */}
          <Route path="/TwoColumns" exact={true} component={TwoColumns} />
          <Route path="/ThreeColumns" exact={true} component={ThreeColumns} />
          <Route
            path="/ThreeColumnswide"
            exact={true}
            component={ThreeColumnswide}
          />
          <Route
            path="/FourColumnswide"
            exact={true}
            component={FourColumnswide}
          />

          <Route
            path="/portfolioSlider"
            exact={true}
            component={PortfolioSlider}
          />
          <Route
            path="/Portfoliogallery"
            exact={true}
            component={Portfoliogallery}
          />
          <Route
            path="/Portfoliosingle"
            exact={true}
            component={Portfoliosingle}
          />
          {/* Blog Pages */}
          <Route path="/onecolumnblog" exact={true} component={Onecolumnblog} />
          <Route path="/Twocolumnblog" exact={true} component={Twocolumnblog} />
          <Route
            path="/Threecolumnblog"
            exact={true}
            component={Threecolumnblog}
          />

          <Route
            path="/blogleftsidebar"
            exact={true}
            component={Blogleftsidebar}
          />
          <Route
            path="/blogrightsidebar"
            exact={true}
            component={Blogrightsidebar}
          />
          {/* Contact us */}
          <Route path="/Contactus" exact={true} component={Contactus} />
          <Route path="/Getintouch" exact={true} component={Getintouch} />
          {/** invalid routes redirection */}
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
};

export default MainNavigation;
