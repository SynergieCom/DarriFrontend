import React from 'react';
import Blogcard from './Blogcard';
 

const Blog = () => {
    return(
        <>
       <section className="blog">
         <div className="container">
            <div className="row pt-blog-col-3">
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
            <div className="row mt-4 mt-lg-5">
               <div className="col-sm-12">
                  <div className="pt-pagination">
                     <nav aria-label="Page navigation">
                        <ul className="page-numbers">
                           <li><span aria-current="page" className="page-numbers current">1</span></li>
                           <li><a className="page-numbers" href="!#">2</a></li>
                           <li><a className="next page-numbers" href="!#">Next page</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>
     </>
    );
 }
 export default Blog; 