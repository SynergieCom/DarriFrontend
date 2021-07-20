import React from 'react';


const Conatct = () => {
    return(
    <>
     <section className="conatct">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-12">
                  <div className="map">
                     <iframe title="contact us"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464670770516!2d-0.12170788407508248!3d51.50318971883184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20South%20Bank%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2sin!4v1596803995725!5m2!1sen!2sin"></iframe>
                  </div>
               </div>
               <div className="col-xl-6 col-12 mt-xl-0 mt-lg-5 mt-5">
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Get Quote</span>
                     <h2 className="pt-section-title">Request A Quote</h2>
                     <p className="pt-section-description">It is a long established fact that a reader will be distracted by
                        the readable content sof a page when looking at its layout.
                     </p>
                  </div>
                  <div className="row">
                     <div className="col-md-12 ">
                        <div className="contact-info">
                           <div className="contact-info-icon">
                              <i className="fas fa-map-marker-alt"></i>
                           </div>
                           <div className="contact-info-content">
                              <h4>Our Office Address:</h4>
                              {/* eslint-disable-next-line react/no-unescaped-entities */}
                              <p className="mb-0">The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom</p>
                           </div>
                        </div>
                        <div className="contact-info">
                           <div className="contact-info-icon">
                              <i className="fas fa-phone-alt"></i>
                           </div>
                           <div className="contact-info-content">
                              <h4>Call Us:</h4>
                              <p className="mb-0">+ (567) 1234-567-8900</p>
                           </div>
                        </div>
                        <div className="contact-info">
                           <div className="contact-info-icon">
                              <i className="fas fa-envelope"></i>
                           </div>
                           <div className="contact-info-content">
                              <h4>Mail us</h4>
                              <p className="mb-0">info@peacefulthemes.com</p>
                           </div>
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
export default Conatct;