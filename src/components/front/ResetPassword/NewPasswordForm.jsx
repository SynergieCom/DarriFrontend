import React, {useState} from 'react';
import {Button, Col, FormGroup, Input, Label, UncontrolledAlert} from "reactstrap";
import * as Yup from "yup";
import {queryServerApi} from "../../../utils/queryServerApi";
import {useFormik} from "formik";
import {useLocation} from "react-router";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const LoginForm = () => {
    const [error, setError] = useState({visible: false, message: ""});
    const [success, setSuccess] = useState(false);
    const queryParams = useQuery();
    const id = queryParams.get('id');
    const formik = useFormik({
        initialValues: {
            Code: "",
            id: id,
            password: "",
            passwordConfirmation: "",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("VAL", values);
            const [res, err] = await queryServerApi("users/resetPassword/confirmation", values, "POST", false);
            if (res === "WrongCode") {
                setError({
                    visible: true,
                    message: "Wrong Code",
                });
            } else if (res === "SendAgain") {
                setError({
                    visible: true,
                    message: "something wrong Try Again",
                });
            } else if (res === "PasswordUpdated") {
                setSuccess(true);
            } else {
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors),
                });
            }
        },
    });


    return (
        <>
            <section className=" conatct pt-contact-form pt-section-overlap pt-5">
                <div className="container">
                    <div className="row no-gutters">

                        <div className="col-xl-7 d-lg-inline-flex">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <img src="/images/bg/PasswordRecovery.png" className="img-fluid pt-opacity4"
                                 alt="architeck"/>
                        </div>
                        <div className="col-xl-5 z-index-1">
                            <div className="form p-4 p-md-5 pt-bg-light">
                                <div className="pt-bg-overley pt-opacity2 "
                                     style={{backgroundImage: "url('images/bg/ResetPassword.png')"}}>
                                </div>
                                <div className="pt-section-title-box">
                                    <span className="pt-section-sub-title">Reset Password Page</span>
                                    <h2 className="pt-section-title">Reset Your Password</h2>
                                </div>
                                {/* Alert */}

                                {error.visible && (
                                    <UncontrolledAlert color="danger" fade={false}>
                                        <span><b>Danger ! </b>{error.message}</span>
                                    </UncontrolledAlert>
                                )}

                                {!success ? (
                                    <form className="quote-from" onSubmit={formik.handleSubmit}>
                                        <div className="row">

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <i className="nc-icon nc-lock-circle-open"/>
                                                    <input type="text" name="Code" className="form-control"
                                                           id="Code"
                                                           value={formik.values.Code}
                                                           onChange={formik.handleChange}
                                                           placeholder="Security Code"/>
                                                </div>
                                                {formik.errors.Code && formik.touched.Code && (
                                                    <label className="text-danger">
                                                        {formik.errors.Code}
                                                    </label>
                                                )}
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <i className="nc-icon nc-key-25"/>
                                                    <input type="password" name="password" className="form-control"
                                                           id="password" value={formik.values.password}
                                                           onChange={formik.handleChange}
                                                           placeholder="New Password"/>
                                                </div>
                                                {formik.errors.password && formik.touched.password && (
                                                    <label className="text-danger">
                                                        {formik.errors.password}
                                                    </label>
                                                )}
                                            </div>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <i className="nc-icon nc-key-25"/>
                                                    <input type="password" name="passwordConfirmation"
                                                           className="form-control"
                                                           id="passwordConfirmation"
                                                           value={formik.values.passwordConfirmation}
                                                           onChange={formik.handleChange}
                                                           placeholder="Confirm Password"/>
                                                </div>
                                                {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
                                                    <label className="text-danger">
                                                        {formik.errors.passwordConfirmation}
                                                    </label>
                                                )}
                                            </div>

                                            <br/> <br/>
                                            <br/> <br/>
                                            <br/> <br/>


                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="submit" value="Sign In" style={style5}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </form>
                                ) : (
                                    <UncontrolledAlert color="success" fade={false}>
                                        <span><b>Done ! </b>your password has been changed successfully. please
                                      Login to continue </span>
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

                                    const YupSchema = Yup.object({
                                    Code: Yup.string()
                                    .min(4 | " your code should be 4 characters")
                                    .max(4 | "your code should be 4 characters")
                                    .required("the code is required"),
                                    password: Yup.string()
                                    .min(8 | " your password should be 8 characters at least")
                                    .max(15 | " longer than 15 characters")
                                    .required("password is Required"),
                                    passwordConfirmation: Yup.string()
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                });

                                    const style5 = {
                                    zIndex: "8",
                                    backgroundColor: "#002155",
                                    fontFamily: "Jost, sansserif"
                                }
                                    export default LoginForm;