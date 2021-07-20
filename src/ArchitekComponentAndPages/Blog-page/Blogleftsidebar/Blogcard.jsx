import React from 'react';


const Blogcard = (prop) => {
    return(
    <>
    <div className="pt-blog-post mb-4">
                     <div className="pt-post-media">
                        <img className="img-fluid" src={prop.img} alt=""/>
                     </div>
                     <div className="pt-blog-contain">
                        <div className="pt-post-meta">
                           <ul>
                              <li className="pt-post-author"><i className="fa fa-user"></i>admin</li>
                              <li className="pt-post-meta">
                                 <a href="!#"><i className="fa fa-calendar"></i>June 2020</a>
                              </li>
                              <li className="pt-post-tag">
                                 <a href="!#"><i className="fa fa-tag"></i>Interior</a>
                              </li>
                           </ul>
                        </div>
                        <h5 className="pt-blog-title">
                           <a href="!#">{prop.title}</a>
                        </h5>
                        <p>{prop.des}
                        </p>
                        <div className="pt-btn-container">
                           <a href="/onecolumnblog" className="pt-button pt-btn-flat pt-button-dark">
                              <div className="pt-button-block">
                                 <span className="pt-button-line-left"></span>
                                 <span className="pt-button-text">Read More</span>
                                 <span className="pt-button-line-right"></span>
                                 <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
      </>
    );

}
export default Blogcard;