import React from 'react';
import Portfoliocard from './Portfoliocard';

const Portfolio = () => {
 
   return(
    <section className="portfolio">
    <div className="container">
       <div className="row">
          <div className="col-md-12">
             <div className="pt-filters">
                <div className="filters pt-filter-button-group">
                   <ul>
                      <li className="pt-filter-btn active" data-filter="*">All</li>
                      <li className="pt-filter-btn" data-filter=".16">Commercial</li>
                      <li className="pt-filter-btn" data-filter=".7">Designer</li>
                      <li className="pt-filter-btn" data-filter=".8">Exteririon</li>
                      <li className="pt-filter-btn" data-filter=".9">Furniture</li>
                      <li className="pt-filter-btn" data-filter=".10">Interior</li>
                   </ul>
                </div>
             </div>
             <div className="pt-grid " data-next_items="2" data-initial_items="8">
                <div className="pt-grid-item pt-filter-items 7 8 9 10  pt-col-6">
                 <Portfoliocard 
                 img="images/portfolio/1-portfoliyo.jpg"
                 name="Commercial"
                 type="MDZ Designs"
                 />
                
                </div>
                <div className="pt-grid-item pt-filter-items  16  pt-col-6">
                     <Portfoliocard 
                 img="images/portfolio/2-portfoliyo.jpg"
                 name="Commercial"
                 type="Membrane Structure"
                 />
                </div>
                <div className="pt-grid-item pt-filter-items  16  pt-col-6">
                   
                <Portfoliocard 
                 img="images/portfolio/3-portfoliyo.jpg"
                 name="Commercial"
                 type="Museum Architecture"
                 />
                </div>
                <div className="pt-grid-item pt-filter-items  16  pt-col-6">
                <Portfoliocard 
                 img="images/portfolio/4-portfoliyo.jpg"
                 name="Commercial"
                 type="Gregory Barber"
                 />
                 
                 
                </div>
                <div className="pt-grid-item pt-filter-items  7  pt-col-6">
                <Portfoliocard 
                 img="images/portfolio/5-portfoliyo.jpg"
                 name="Commercial"
                 type="Catalyst Architects"
                 />
                   
                   
                  
                </div>
                <div className="pt-grid-item pt-filter-items  16  pt-col-6 visible_item">
                <Portfoliocard 
                 img="images/portfolio/6-portfoliyo.jpg"
                 name="Commercial"
                 type="Benoit  Architecture"
                 />

                </div>
                <div className="pt-grid-item pt-filter-items  7  8  pt-col-6 visible_item">
                <Portfoliocard 
                 img="images/portfolio/7-portfoliyo.jpg"
                 name="Commercial"
                 type="Whitney Architecture"
                 />
                 
                </div>
             </div>
          </div>
       </div>
       <div className="row mt-4">
          <div className="col-sm-12 text-center">
             <a className="pt-button pt-btn-flat" href="/aboutus">
                <div className="pt-button-block">
                   <span className="pt-button-line-left"></span>
                   <span className="pt-button-text">Load More</span>
                   <span className="pt-button-line-right"></span>
                   <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                </div>
             </a>
          </div>
       </div>
    </div>
 </section>
   );
}
export default Portfolio;