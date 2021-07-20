import React from 'react';

const Portfoliocard = (prop) => {
   return(
      <div className="col-lg-4">
      <figure className="gallery-item">
         <div className="gallery-icon landscape">
            <a href="/FourColumnswide">
            <img src={prop.img} alt="gallary"/>
            </a>
         </div>
      </figure>
   </div>
   );
} 
export default Portfoliocard;