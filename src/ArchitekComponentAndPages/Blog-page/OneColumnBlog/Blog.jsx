import React from 'react';
import Blogcard from './Blogcard';
 

const Blog = () => {
    return(
        <>
        <section className="blog">
        <div className="container">
           <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
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
              <div className="col-lg-4">
                 <div className="sidebar">
                    <div id="search-2" className="widget widget_search">
                       <form role="search" method="get" className="search-form" action="#">
                          <label>
                          <span className="screen-reader-text">Search for:</span>
                          <input type="search" className="search-field" placeholder="Search …"  name="s"/>
                          </label>
                          <button type="submit" className="search-submit"><span
                             className="screen-reader-text">Search</span></button>
                       </form>
                    </div>
                    <div id="recent-posts-2" className="widget widget_recent_entries">
                       <h2 className="widget-title">Recent Posts</h2>
                       <ul>
                          <li>
                             <a href="!#">Visualizing Architecture</a>
                          </li>
                          <li>
                             <a href="!#">Daily Dose of Architecture</a>
                          </li>
                          <li>
                             <a href="!#">Architizer Architecture</a>
                          </li>
                          <li>
                             <a href="!#">Daily Dose of Architecture</a>
                          </li>
                          <li>
                             <a href="!#">Visualizing Architecture</a>
                          </li>
                       </ul>
                    </div>
                    <div id="recent-comments-2" className="widget widget_recent_comments">
                       <h2 className="widget-title">Recent Comments</h2>
                       <ul>
                          <li className="recentcomments">
                             <span className="comment-author-link">
                             <a href="!#" className="url">admin</a>
                             </span> on
                             <a href="!#">Design Build Contracts</a>
                          </li>
                          <li className="recentcomments">
                             <span className="comment-author-link">
                             <a href="!#" rel="external nofollow ugc" className="url">admin</a>
                             </span> on
                             <a href="!#">Construction Consultants</a>
                          </li>
                          <li className="recentcomments">
                             <span className="comment-author-link">
                             <a href="!#" className="url">admin</a>
                             </span> on
                             <a href="!#">Design Build Contracts</a>
                          </li>
                          <li className="recentcomments">
                             <span className="comment-author-link">
                             <a href="!#" className="url">admin</a>
                             </span> on
                             <a href="!#">Planning And Scheduling</a>
                          </li>
                          <li className="recentcomments">
                             <span className="comment-author-link">
                             <a href="!#" className="url">admin</a>
                             </span> on
                             <a href="!#">Planning And Scheduling</a>
                          </li>
                       </ul>
                    </div>
                    <div id="archives-2" className="widget widget_archive">
                       <h2 className="widget-title">Archives</h2>
                       <ul>
                          <li><a href="!#">June 2020</a></li>
                          <li><a href="!#">May 2020</a></li>
                          <li><a href="!#">April 2020</a></li>
                       </ul>
                    </div>
                    <div id="categories-2" className="widget widget_categories">
                       <h2 className="widget-title">Categories</h2>
                       <ul>
                          <li className="cat-item cat-item-2"><a href="!#">Housing</a>
                          </li>
                          <li className="cat-item cat-item-3"><a href="!#">Interior</a>
                          </li>
                          <li className="cat-item cat-item-4"><a href="!#">Planning</a>
                          </li>
                          <li className="cat-item cat-item-5"><a href="!#">Residential</a>
                          </li>
                          <li className="cat-item cat-item-6"><a href="!#">Restoration</a>
                          </li>
                       </ul>
                    </div>
                    <div id="meta-2" className="widget widget_meta">
                       <h2 className="widget-title">Meta</h2>
                       <ul>
                          <li><a href="!#">Log in</a></li>
                          <li><a href="!#">Entries feed</a></li>
                          <li><a href="!#">Comments feed</a></li>
                          <li><a href="!#">WordPress.org</a></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
     </>
    );
 }
 export default Blog; 