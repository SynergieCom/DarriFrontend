import React from 'react';


const About = () => {
    return (
        <>
             <section className="pt-section">
      <div className="container">
         <div className="row">
            <div className="col-sm-12 text-center">
               <div className="pt-error-block">
                  <div className="pt-errot-text">404</div>
                  <h2>Oops! This Page is Not Found.</h2>
                  <p>Please go back to home and try to find out once again.</p>
                  <div className="pt-btn-block">
                     <div className="pt-btn-container">
                        <a href="/" className="pt-button">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left"></span>
                              <span className="pt-button-text">Back to Home</span>
                              <span className="pt-button-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
        </>
    );

}
export default About;