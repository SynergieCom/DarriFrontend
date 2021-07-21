import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
 
   const click2 = (e) => { 
      return e.preventDefault() }
    return(
    <>
           <div className="pt-background-overlay"></div>
      <div className="pt-sidebar">
         <div className="pt-close-btn">
            <NavLink className="pt-close" to="" onClick={click2}>
            <i className="ion-close-round"></i>
            </NavLink>
         </div>
         <div className="pt-sidebar-block">
            <div className="pt-sidebar-header">
               <img src="images/logo.png" className="pt-sidebar-logo"
                  alt="architeck-sidebar-logo"/>
               <p>It is a long established fact that a reader of a page when looking at its layout. </p>
            </div>
            <div className="pt-sidebar-category">
               <h5>Categories</h5>
               <ul>
                  <li><a href="/ThreeColumnswide">Housing</a></li>
                  <li><a href="/ThreeColumnswide">Interior</a></li>
                  <li><a href="/ThreeColumnswide">Planning</a></li>
                  <li><a href="/ThreeColumnswide">Residential</a></li>
                  <li><a href="/ThreeColumnswide">Restoration</a></li>
               </ul>
            </div>
            <div className="pt-sidebar-contact">
               <h5>Contacts</h5>
               <ul className="pt-sidebar-contact">
                  <li>
                     <i className="fa fa-map-marker"></i>
                     <span>
                     Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA </span>
                  </li>
                  <li>
                     <a href="tel:+1800001658"><i className="fa fa-phone"></i>
                     <span>+1800-001-658</span>
                     </a>
                  </li>
                  <li>
                     <a href="mailto:info@peacefulthemes.com"><i
                        className="fa fa-envelope"></i><span>info@peacefulthemes.com</span></a>
                  </li>
               </ul>
            </div>
            <div className="pt-sidebar-social">
               <ul>
                  <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="/"><i className="fab fa-github"></i></a></li>
                  <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="/"><i className="fab fa-instagram"></i></a></li>
               </ul>
            </div>
         </div>
      </div>
      </>
    );

}
export default Sidebar;