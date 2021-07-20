import React from 'react';
import Portfoliocard from './Portfoliocard';

const Portfolio = () => {
 
   return(
      <section className="portfolio">
      <div className="container">
         <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6  text-center">
               <div className="pt-section-title-box">
                  <span className="pt-section-sub-title">RECENT PROJECTS</span>
                  <h2 className="pt-section-title">Our Special Projects</h2>
                  <p className="pt-section-description">There are many variations of passages of Lorem Ipsum available, but
                     the majority
                     have suffered alteration in some form believable.
                  </p>
               </div>
               <div className="col-lg-3"></div>
            </div>
         </div>
         <div className="row no-gutters text-center">
            <Portfoliocard 
            img="images/portfolio/1-portfoliyo.jpg"
            />
            <Portfoliocard 
            img="images/portfolio/2-portfoliyo.jpg"
            />
            <Portfoliocard 
            img="images/portfolio/3-portfoliyo.jpg"
            />
            <Portfoliocard 
            img="images/portfolio/4-portfoliyo.jpg"
            />
            <Portfoliocard 
            img="images/portfolio/5-portfoliyo.jpg"
            />
            <Portfoliocard 
            img="images/portfolio/6-portfoliyo.jpg"
            />
         </div>
      </div>
   </section>
   );
}
export default Portfolio;