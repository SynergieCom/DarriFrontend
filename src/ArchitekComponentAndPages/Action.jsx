import React, { useState } from 'react';




const Action = () => {

const[email,setEmail] = useState();


const Input = (e) => {
   setEmail(e.target.value);

};
const Sub = (event) => {

   event.preventDefault();
   console.log(email);
  
   alert(`your email is ${email}`);

};
    return(
    <>
     <section className="action-box py-4 pt-bg-primary">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-12 mb-xl-0">
                  <div className="pt-subscribe-block">
                     <img src="images/mail.png" className="img-fluid pt-subscribe-img" alt="of suubscribe"/>
                     <div className="pt-subscribe-details">
                        <h6>
                           Sign Up to Get Latest Updates
                        </h6>
                        <span>
                        It is a long established fact that a reader will be distracted by the
                        </span>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-12">
                  <div className="pt-subscribe-from">
                     <form id="form" onSubmit={Sub} className="form">
                        <div className="form-fields">
                           <input className="w-100" type="email" name="EMAIL" onChange={Input} value={email} placeholder="Your email address" required=""/>
                           <input type="submit" onChange={Input} value="Sign up"/>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Action;