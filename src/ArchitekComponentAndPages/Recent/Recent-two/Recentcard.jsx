import React from 'react';

const Reactcard = (prop) => {
   return(
    <div className="item">
    <div className="pt-portfolio-block">
       <div className="pt-portfolio-img">
          <img className="img-fluid" src={prop.img} alt=""/>
          <a href="/aboutus">
             <div className="pt-portfolio-icon">
                <i className="ion ion-android-add"></i>
             </div>
          </a>
       </div>
       <div className="pt-portfolio-info">
         {prop.type}
          <h4 className="pt-portfolio-title">
             <a className="text-white" href="/ThreeColumnswide">Nenan Expansion</a>
          </h4>
       </div>
    </div>
 </div>
     
   );
}
export default Reactcard;