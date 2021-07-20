import React from 'react';


const Workingcard = (prop) => {
    return(
    <>
  <li className="icon-list-item">
                        <span className="icon-list-icon">
                        <i aria-hidden="true" className="fas fa-check"></i>
                        </span>
                        <span className="icon-list-text">{prop.des}</span>
                     </li>
      </>
    );

}
export default Workingcard;