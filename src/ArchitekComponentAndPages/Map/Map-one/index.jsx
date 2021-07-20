import React, { useState } from 'react';


const Map = () => {
   const style1= {
      backgroundImage: "url('images/bg/03.png')",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      opacity: "0.2"
   }

   
   const [data,setdata] = useState({
		name: "",
		email: "",
      subject: "",
      msg: "",
	});
  

   const inputEvent = (event) => {
       const value = event.target.value;
       const name =event.target.name;
       
       setdata((prev) => {

       
       if(name === 'name')
       { return{
         name: value,
         email: prev.email,
         subject: prev.subject,
         msg: prev.msg,   
         };      
       }else if(name === 'email')
       {
         return{	
            name: prev.name,
            email: value,
            subject: prev.subject,
            msg: prev.msg,       
       }
      }
       else if(name === 'subject')
       {
         return{	
            name: prev.name,
            email: prev.email,
            subject: value,
            msg: prev.msg,       
       }
      }
       else if(name === 'msg')
       {
         return{	
            name: prev.name,
            email: prev.email,
            subject: prev.subject,
            msg: value,       
       };
      
     }

   });

   };
   const sub = (e) => {
      e.preventDefault();
      alert(`     Your Name : ${data.name}
      Your email : ${data.email}
      Your subject : ${data.subject}
      Your msg : ${data.msg} `)

   }
   return (
      <>
         <section className="pt-contact-form p-0">
            <div className="container-fluid p-0">
               <div className="row no-gutters">
                  <div className="col-xl-6">
                     <div className="p-4 p-md-5 pt-bg-light">
                        <div className="pt-bg-overley" id="mapone"
                           style={style1}>
                        </div>
                        <div className="pt-section-title-box text-left">
                           <span className="pt-section-sub-title">Get Quote</span>
                           <h2 className="pt-section-title">Request A Quote</h2>
                        </div>
                        <form onSubmit={sub} className="quote-from">
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <input type="text" className="form-control" name="name" onChange={inputEvent} value={data.name} id="exampleInputName" placeholder="Enter name" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <input type="email" className="form-control" name="email" onChange={inputEvent} value={data.email} id="Email" placeholder="Enter email" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="form-group">
                                    <input type="text" className="form-control" name="subject" onChange={inputEvent} value={data.subject} id="Subject1" placeholder="Enter subject" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="form-group">
                                    <textarea className="form-control" name="msg" onChange={inputEvent} value={data.msg} id="exampleFormControlTextarea1" rows="6"
                                       placeholder="Enter your message"></textarea>
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="map1">
                        <iframe title="map"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464670770516!2d-0.12170788407508248!3d51.50318971883184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20South%20Bank%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2sin!4v1596803995725!5m2!1sen!2sin/dist/tf.min.js"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );

}
export default Map;