import React, {useState} from 'react';
import {useFormik} from "formik";
import {queryServerApi} from "../../../utils/queryServerApi";
import {UncontrolledAlert} from "reactstrap";


const SendResetCode = () => {
    const [error,setError] = useState({visible: false,message: ""});
    const [success,setSuccess] = useState(false);
    const formik = useFormik({
        initialValues:{
            Email: "",
        },
        onSubmit: async (values) => {
            console.log("EMAIL",values);
            const [res, err] = await queryServerApi("users/resetPassword", values, "POST", false);

            if(res === "UserNotExist"){
                setError({
                    visible: true,
                    message: "User doesn't exist",
                });
            }
            else if (res === "EmailAlreadySent"){
                setError({
                    visible: true,
                    message: "Email to reset password was already sent! CHECK YOUR EMAIL AGAIN",
                });
            }
            else if(res === "EmailSended"){
                setSuccess(true);
            }
            else {
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors),
                });
            }
        },
    });

    return (
        <>
            <section className="action-box py-xl-10 pt-bg-light"
                    >
                <div className="pt-bg-overley pt-opacity3 "
                     style={{backgroundImage: "url('images/bg/ResetPassword.png')"}}>
                </div>
                <div className="container" >
                    <div className="row">
                        <div className="col-xl-6 col-12 mb-xl-0">
                            <div className="pt-subscribe-block">
                                <img src="images/gmail.png" className="img-fluid pt-subscribe-img" alt="of suubscribe"/>
                                <div className="pt-subscribe-details">
                                    <h6  style={{color: "darkblue"}}>
                                        Check your Email
                                    </h6>
                                    <span  style={{color: "darkblue"}}>
                           {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Enter your email and you'll receive a mail which include a security code to reset your password
                        </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <div className="pt-subscribe-details">
                                <h3 style={{color: "darkblue"}}>
                                    Reset Your Password
                                </h3>
                                {error.visible &&
                                <UncontrolledAlert color="danger" fade={false}>
                                    <div className="d-flex align-items-center align-content-center">
                                         <span>
                                             {/* eslint-disable-next-line react/no-unescaped-entities */}
                                             <strong className="d-block">Danger!</strong> you can't send another mail while the first mail is already sent
                                         </span>
                                    </div>
                                </UncontrolledAlert>}
                            </div>
                            <div className="pt-subscribe-from">
                                {!success ? (
                                <form onSubmit={formik.handleSubmit} className="form">

                                    <div className="form-fields">
                                        <input className="w-100" type="email" name="Email"
                                               value={formik.values.Email}
                                               onChange={formik.handleChange}
                                                placeholder="Your email address" required=""/>
                                        <input type="submit" value="Reset" style={style7}/>
                                    </div>
                                </form>):(
                                        <UncontrolledAlert color="success" fade={false}>
                                            <span><b>Done ! </b>Please check your email in order to reset your password!</span>
                                        </UncontrolledAlert>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}




const style7 = {
    zIndex: "9",
    backgroundColor: "#ff5e14",
    fontFamily: "Jost, sansserif"
}

export default SendResetCode;