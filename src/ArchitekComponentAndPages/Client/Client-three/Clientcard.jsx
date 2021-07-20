import React from 'react';


const Clientcard = (prop) => {
    return(
    <>
    <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="pt-client-grid">
                     <img className="img-fluid pt-client-img" src={prop.img1} alt="pt-client-img"/>
                     <img className="img-fluid pt-client-hover-img" src={prop.img2} alt="pt-client-img"/>
                  </div>
               </div>
      </>
    );

}
export default Clientcard;