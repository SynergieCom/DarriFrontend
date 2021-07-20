import React from 'react';


const Clientcard = (prop) => {
    return(
    <>
    <div className="item">
                        <div className="pt-client-grid">
                           <img className="pt-client-img" src={prop.img1} alt="pt-client-img"/>
                           <img className="pt-client-hover-img" src={prop.img2} alt="pt-client-img"/>
                        </div>
                     </div>
      </>
    );

}
export default Clientcard;