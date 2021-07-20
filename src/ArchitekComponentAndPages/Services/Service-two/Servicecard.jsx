import React from 'react';


const Servicecard = (prop) => {
    return(
    <>
    <div className="col-md-6 col-xl-4">
                  <div className="icon-box text-center">
                     <div className="icon-box-icon">
                        <i aria-hidden="true" className={prop.img}></i>
                     </div>
                     <div className="icon-box-content">
                        <h3 className="icon-box-title">{prop.title}</h3>
                        <p className="icon-box-description">{prop.des}
                        </p>
                     </div>
                  </div>
               </div>
      </>
    );

}
export default Servicecard;