import React from 'react';
import  Portfoliocard from './Portfoliocard';


const Portfolio = () => {
    return(
    <>
   <section className="portfolio">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-3"></div>
               <div className="col-xl-6 text-center">
                  <div className="pt-big-title mt-4">
                     <h2 className="pt-big-title1  wow animate__fadeInUp" data-wow-duration="1s"
                        data-wow-delay="1s">OUR WORK</h2>
                  </div>
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Recent Projects</span>
                     <h2 className="pt-section-title">Our Special Projects</h2>
                     <p className="pt-section-description">There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form believable.
                     </p>
                  </div>
               </div>
               <div className="col-lg-3"></div>
            </div>
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
                  <div className="pt-grid" data-next_items="4" data-initial_items="8">
                     <div className="pt-grid-item pt-filter-items  8  10  pt-col-3">
                     <Portfoliocard 
                     type="Commercial"
                     img="images/portfolio/1-portfoliyo.jpg"
                     title="MDZ Designs"
                     link="/Threecolumnblog"
                     alt="1"
                    />
                     </div>
                     <div className="pt-grid-item pt-filter-items  7  16 pt-col-3">
                     <Portfoliocard 
                     type="Commercial"
                     img="images/portfolio/2-portfoliyo.jpg"
                     title="Membrane Structure"
                     link="/Threecolumnblog"
                     alt="2"                   
                    />
                     </div>
                     <div className="pt-grid-item pt-filter-items  16  pt-col-3">
                     <Portfoliocard 
                     type="Commercial"
                     img="images/portfolio/3-portfoliyo.jpg"
                     title="Museum Architecture"
                     link="/Threecolumnblog"
                     alt="3"                    
                    />
                     </div>
                     <div className="pt-grid-item pt-filter-items  16  pt-col-3">
                     <Portfoliocard 
                     type="Commercial"
                     img="images/portfolio/4-portfoliyo.jpg"
                     title="Gregory Barber"
                     link="/Threecolumnblog"
                     alt="4"                    
                    />
                     </div>
                     <div className="pt-grid-item pt-filter-items  7  pt-col-3">
                     <Portfoliocard 
                     type="Commercial"
                     img="images/portfolio/5-portfoliyo.jpg"
                     title="Catalyst Architects"
                     link="/Threecolumnblog"
                     alt="5"                    
                    />
                     </div>
                   
                    
                     <div className="pt-grid-item pt-filter-items  7  8 16  pt-col-3">
                     <Portfoliocard 
                   type="Commercial"
                   img="images/portfolio/4-portfoliyo.jpg"
                   title="Gregory Barber"
                   link="/Threecolumnblog"
                   alt="7"                    
                    />
                     </div>
                     <div className="pt-grid-item pt-filter-items  8  pt-col-3">
                     <Portfoliocard 
                     type="Commercial"
                     img="images/portfolio/7-portfoliyo.jpg"
                     title="Whitney Architecture"
                     link="/Threecolumnblog"
                     alt="8"                    
                    />
                     </div>
                     <div className="pt-grid-item pt-filter-items  16  pt-col-3 visible_item">
                     <Portfoliocard 
                     type="Commercial"
                     img="images/portfolio/8-portfoliyo.jpg"
                     title="Jiang Architecture"
                     link="/Threecolumnblog"
                     alt="9"                   
                    />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
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
      </>
    );

}
export default Portfolio;