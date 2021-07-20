import React from 'react';


const Teamcard = (prop) => {
    return(
    <>
     <div className="item">
                        <div className="pt-team-box text-center">
                           <div className="pt-team-img">
                              <img className="img-fluid" src={prop.img} alt="team"/>
                              <div className="pt-team-social">
                                 <ul>
                                    <li> 
                                       <a href="!#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                       <a href="!#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                       <a href="!#"><i className="fab fa-google-plus-g"></i></a>
                                    </li>
                                    <li>
                                       <a href="!#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="pt-team-info">
                              <span className="pt-team-designation">{prop.pos}</span>
                              <h5><a href="/#" className="pt-member-name">Naidan Smith</a></h5>
                           </div>
                        </div>
                     </div>
      </>
    );

}
export default Teamcard;