import React from 'react';
import Blogcard from './Blogcard';


const Blog = () => {
    return(
    <>
   <section className="blog md-pt-0">
         <div className="container">
            <div className="row">
               <div className="pt-section-big-title text-center wow animate__fadeInUp" data-wow-duration="1s"
                  data-wow-delay="1s">
                  <h2 className="big-heading-title">BLOG</h2>
               </div>
               <div className="col-xl-3 ">
               </div>
               <div className="col-xl-6 pt-md-0 text-center">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Recent Articles</span>
                     <h2 className="pt-section-title">Our Latest Blog</h2>
                     <p className="pt-section-description">It is a long established fact that a reader will be distracted
                        by
                        the readable content of a page when looking at its layout.
                     </p>
                  </div>
               </div>
               <div className="col-xl-3">
               </div>
            </div>
               
            <div className="row mt-4 mt-lg-5">
               <div className="col-sm-12">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="3" data-lap_num="2" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                <Blogcard 
                img="images/blog/blog-1.jpg"
                title="Construction Consultants"
                des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
                />
                  <Blogcard 
                img="images/blog/blog-2.jpg"
                title="Construction Consultants"
                des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
                />
                  <Blogcard 
                img="images/blog/blog-3.jpg"
                title="Construction Consultants"
                des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
                />
                 <Blogcard 
                img="images/blog/blog-2.jpg"
                title="Architecture & building"
                des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"

                />
                <Blogcard 
                img="images/blog/blog-1.jpg"
                title="Daily Dose of Architecture"
                des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"

                />
                <Blogcard 
                img="images/blog/blog-2.jpg"
                title="Visualizing Architecture"
                des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"

                />
               
                  </div>
               </div>
            </div>
         </div>
         

      </section>
      </>
    );

}
export default Blog;