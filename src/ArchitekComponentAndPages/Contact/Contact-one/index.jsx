import React, { useState } from 'react';
const Conatct = () => {
   
   
   const [data,setdata] = useState({
		name: "",
		email: "",
      subject: "",
      msg: "",
	});
   const [newdata ,setnewdata] = useState({
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
      setnewdata(data);
      console.log(newdata);
      alert(`     Your Name : ${data.name}
      Your email : ${data.email}
      Your subject : ${data.subject}
      Your msg : ${data.msg} `);

   }

   return (
      <>
        <section className=" conatct pt-contact-form pt-section-overlap pt-5">
         <div className="container">
            <div className="row no-gutters">
               <div className="col-xl-6 z-index-1">
                  <div className="form p-4 p-md-5 pt-bg-light">
                     <div className="pt-bg-overley pt-opacity1 "
                        style={{backgroundImage: "url('images/bg/03.png')"}}>
                     </div>
                     <div className="pt-section-title-box">
                        <span className="pt-section-sub-title">Get Quote</span>
                        <h2 className="pt-section-title">Request A Quote</h2>
                     </div>
                     <form onSubmit={sub} className="quote-from">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input type="text" name="name" className="form-control" onChange={inputEvent} value={data.name} id="exampleInputName" placeholder="Enter name"/>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input type="email" name="email" className="form-control" onChange={inputEvent} value={data.email} id="Email" placeholder="Enter email"/>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-group">
                                 <input type="text" name="subject" className="form-control" onChange={inputEvent} value={data.subject} id="Subject" placeholder="Enter subject"/>
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
                                 <input type="submit" onChange={inputEvent} value="Send Message" className="wpcf7-form-control wpcf7-submit"/>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="col-xl-6 d-lg-inline-block">
                     <img src="images/about/demo-5.jpg" className="img-fluid" alt="architeck"/>
               </div>
            </div>
         </div>
      </section>
      </>
   );

}
export default Conatct;