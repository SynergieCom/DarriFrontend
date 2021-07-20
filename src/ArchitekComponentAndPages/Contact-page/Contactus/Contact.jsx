import React from 'react';
import Contactcard from './content/Contactcard';

const contact = () => {
    return(
    <>
     <section className="conatct">
         <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-6 col-md-6 ">
               <Contactcard 
                 img="images/contact-img1.jpg"
                 name="New York Office"
                 des="The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom"
                 ph1="+ (567) 1234-567-8900"
                 ph2="+ (567) 1234-567-8901"
                 email1="info@peacefulthemes.com"
                 email2="info2@peacefulthemes.com"
                 />
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6  mt-sm-0 mt-md-0 mt-lg-0 mt-4">
               <Contactcard 
                 img="images/contact-img2.jpg"
                 name="London Office"
                 des="The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom"
                 ph1="+ (567) 1234-567-8900"
                 ph2="+ (567) 1234-567-8901"
                 email1="info@peacefulthemes.com"
                 email2="info2@peacefulthemes.com"
                 />
               </div>
               <div className="col-xl-4 col-12   mt-lg-0 mt-4">
               <Contactcard 
                 img="images/contact-img3.jpg"
                 name="Dubai Office"
                 des="The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom"
                 ph1="+ (567) 1234-567-8900"
                 ph2="+ (567) 1234-567-8901"
                 email1="info@peacefulthemes.com"
                 email2="info2@peacefulthemes.com"
                 />
                  </div>
               </div>
            </div>
      
      </section>

      </>
    );

}
export default contact;