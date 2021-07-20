import React from 'react';


const Testimonialcard = (prop) => {
    return(
    <>
    <div className="item">
                           <div className="pt-testimonial-box pt-testimonial-box-1">
                              <div className="pt-testimonial-img">
                                 <img src={prop.img} alt="testimonial"/>
                                 <div className="pt-testimonial-meta">
                                    <h5>{prop.name}</h5>
                                    <p>{prop.post}</p>
                                 </div>
                              </div>
                              <div className="pt-testimonial-star">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="pt-testimonial-content">
                                 <div className="pt-quote">
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                 </div>
                                 <p>{prop.review}
                                 </p>
                              </div>
                           </div>
                        </div>
      </>
    );

}
export default Testimonialcard;