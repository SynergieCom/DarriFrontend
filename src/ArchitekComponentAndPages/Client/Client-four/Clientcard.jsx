import React from 'react';


const Clientcard = (prop) => {
    return(
    <>
 <div className="item">
                        <div className="pt-client-grid">
                           <img src={prop.img1} alt="pt-client"/>
                        </div>
                     </div>
      </>
    );

}
export default Clientcard;