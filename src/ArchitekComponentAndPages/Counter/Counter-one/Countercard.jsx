import React from 'react';


const Countercard = (prop) => {
    return(
    <>
    <div className="pt-counter-info">
                                 <div className="pt-counter-num-prefix">
                                    <h5 className="timer" data-to={prop.todata} data-speed="5000">{prop.todata}</h5>
                                    <span className="pt-counter-prefix"></span>
                                 </div>
                                 <p className="pt-counter-description mb-0 text-white">{prop.title}</p>
                              </div>
      </>
    );

}
export default Countercard;