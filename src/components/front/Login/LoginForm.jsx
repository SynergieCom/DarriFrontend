import React, {useEffect, useState} from 'react';
import {Button, Col, FormGroup, Input, Label, UncontrolledAlert} from "reactstrap";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import {queryServerApi} from "../../../utils/queryServerApi";
import {useFormik} from "formik";
import SignInWithFace from "./SignInWithFace";
import GoogleLogin from "react-google-login";

const LoginForm = () => {
    const history = useHistory();
    const [error, setError] = useState({visible: false, message: "", subscription: false, id: "", severity: ""});
    const [loginWithFace, setLoginWithFace] = useState(false);

    const LoginWithFaceRecognition = () => {
        setLoginWithFace(!loginWithFace);
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values", values);
            const [user, err] = await queryServerApi("users?username=" + formik.values.username + "&password=" + formik.values.password, null, "GET", false);
            console.log("-> user", user);
            if (user === "UserNotFound") {
                setError({
                    visible: true,
                    message: `Username or Email doesn't exist  if you registered recently please activate your account`,
                    severity: "danger"
                });
            } else if (user === "WrongPassword") {
                setError({
                    visible: true,
                    message: "Incorrect Password",
                    severity: "danger"
                });

            } else {
                console.log("-> (user[0].Role", user[0].Role);
                if (user[0].Role === "Admin" || user[0].Role === "Editor") {
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0]._id);
                    localStorage.setItem('email', user[0].Email);
                    localStorage.setItem('img', user[0].img);
                    history.push("/admin/dashboard");
                    history.go(0);
                } else if (user[0].Role === "Promoter") {
                    const [promoter, err] = await queryServerApi("promoters/" + user[0].RefUser, null, "GET", false);
                    if (promoter.Subscribed) {
                        localStorage.setItem('username', user[0].Username);
                        localStorage.setItem('role', user[0].Role);
                        localStorage.setItem('id', user[0].RefUser);
                        localStorage.setItem('email', user[0].Email);
                        localStorage.setItem('img', user[0].img);
                        history.push('/');
                        history.go(0);

                    } else {
                        setError({
                            visible: true,
                            message: "You are not Subscribed Please Update your subscription",
                            subscription: true,
                            id: user[0].RefUser,
                            severity: 'warning'
                        });

                    }
                } else if (user[0].Role === "Architect") {
                    const [architect, err] = await queryServerApi("architects/" + user[0].RefUser, null, "GET", false);
                    if (architect.Subscribed) {
                        localStorage.setItem('username', user[0].Username);
                        localStorage.setItem('role', user[0].Role);
                        localStorage.setItem('id', user[0].RefUser);
                        localStorage.setItem('email', user[0].Email);
                        localStorage.setItem('img', user[0].img);
                        history.push('/');
                        history.go(0);

                    } else {
                        setError({
                            visible: true,
                            message: "You are not Subscribed Please Update your subscription",
                            subscription: true,
                            id: user[0].RefUser,
                            severity: 'warning'
                        });

                    }
                } else if (user[0].Role === "Engineer") {
                    const [engineer, err] = await queryServerApi("engineers/" + user[0].RefUser, null, "GET", false);
                    if (engineer.Subscribed) {
                        localStorage.setItem('username', user[0].Username);
                        localStorage.setItem('role', user[0].Role);
                        localStorage.setItem('id', user[0].RefUser);
                        localStorage.setItem('email', user[0].Email);
                        localStorage.setItem('img', user[0].img);
                        history.push('/');
                        history.go(0);

                    } else {
                        setError({
                            visible: true,
                            message: "You are not Subscribed Please Update your subscription",
                            subscription: true,
                            id: user[0].RefUser,
                            severity: 'warning'
                        });

                    }
                } else {
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].RefUser);
                    localStorage.setItem('email', user[0].Email);
                    localStorage.setItem('img', user[0].img);
                    history.push("/");
                    history.go(0);

                }
            }


        },
    });


    const responseGoogle = async (response) => {
        console.log(response);
        const [user, err] = await queryServerApi("users/loginWithGoogle/" + response.tokenId, null, "GET", false);
        if (user === "UserNotFound") {
            setError({
                visible: true,
                message: `You need to sing Up with this Google Account First !`,
                severity: 'info'

            });
        } else {
            if (user[0].Role === "Admin" || user[0].Role === "Editor") {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0]._id);
                localStorage.setItem('email', user[0].Email);
                localStorage.setItem('img', user[0].img);
                history.push("/admin/dashboard");
                history.go(0);
            } else if (user[0].Role === "Promoter") {
                const [promoter, err] = await queryServerApi("promoters/" + user[0].RefUser, null, "GET", false);
                if (promoter.Subscribed) {
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].RefUser);
                    localStorage.setItem('email', user[0].Email);
                    localStorage.setItem('img', user[0].img);
                    history.push('/');
                    history.go(0);

                } else {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id: user[0].RefUser,
                        severity: 'warning'
                    });

                }
            } else if (user[0].Role === "Architect") {
                const [architect, err] = await queryServerApi("architects/" + user[0].RefUser, null, "GET", false);
                if (architect.Subscribed) {
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].RefUser);
                    localStorage.setItem('email', user[0].Email);
                    localStorage.setItem('img', user[0].img);
                    history.push('/');
                    history.go(0);

                } else {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id: user[0].RefUser,
                        severity: 'warning'
                    });

                }
            } else if (user[0].Role === "Engineer") {
                const [engineer, err] = await queryServerApi("engineers/" + user[0].RefUser, null, "GET", false);
                if (engineer.Subscribed) {
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].RefUser);
                    localStorage.setItem('email', user[0].Email);
                    localStorage.setItem('img', user[0].img);
                    history.push('/');
                    history.go(0);

                } else {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id: user[0].RefUser,
                        severity: 'warning'
                    });

                }
            } else {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].RefUser);
                localStorage.setItem('email', user[0].Email);
                localStorage.setItem('img', user[0].img);
                history.push("/");
                history.go(0);

            }
        }

    }

    const responseErrorGoogle = (response) => {
        /*    setError({
                visible: true,
                message: "Something wrong",
                severity: "error"
            });*/
    }


    // Functions
    const UpgradeSubscription = () => {
        history.push("/Pricing/" + error.id);
    }


    return (
        <>
            <section className=" conatct pt-contact-form pt-section-overlap pt-5">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-xl-6 z-index-1">
                            <div className="form p-4 p-md-5 pt-bg-light">
                                <div className="pt-bg-overley pt-opacity1 "
                                     style={{backgroundImage: "url('images/bg/loginbackGround.png')"}}>
                                </div>
                                <div className="pt-section-title-box">
                                    <span className="pt-section-sub-title">Sign in Page</span>
                                    <h2 className="pt-section-title">Sign In</h2>
                                </div>
                                {/* Alert */}

                                {error.visible && (
                                    <UncontrolledAlert color={error.severity} fade={false}>
                                        <span><b>{error.severity} ! </b>{error.message}</span>
                                    </UncontrolledAlert>
                                )}

                                {error.subscription && (
                                    <Button onClick={UpgradeSubscription} color="danger">
                                        <i className="nc-icon nc-simple-remove"/>
                                        Subscribe or Upgrade your subscription
                                    </Button>
                                )}

                                {/* From */}
                                <form className="quote-from" onSubmit={formik.handleSubmit}>
                                    <div className="row">


                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <i className="nc-icon nc-single-02"/>
                                                <input type="text" name="username" className="form-control"
                                                       id="username"
                                                       value={formik.values.username}
                                                       onChange={formik.handleChange}
                                                       placeholder="Username or Email"/>
                                            </div>
                                            {formik.errors.username && formik.touched.username && (
                                                <label className="text-danger">
                                                    {formik.errors.username}
                                                </label>
                                            )}
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <i className="nc-icon nc-key-25"/>
                                                <input type="password" name="password" className="form-control"
                                                       id="password" value={formik.values.password}
                                                       onChange={formik.handleChange}
                                                       placeholder="Password"/>
                                            </div>
                                            {formik.errors.password && formik.touched.password && (
                                                <label className="text-danger">
                                                    {formik.errors.password}
                                                </label>
                                            )}
                                        </div>

                                        <br/> <br/> <br/> <br/>


                                        <FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input defaultChecked defaultValue="" type="checkbox"/>
                                                    <span className="form-check-sign"/>
                                                    Keep me singed in
                                                </Label>
                                            </FormGroup>
                                            <br/> <br/>
                                            <FormGroup>
                                                <a href="/ResetPassword" style={{color: "darkblue"}}>Forgot Password
                                                    ?</a>
                                            </FormGroup>
                                        </FormGroup>

                                        <Col md="1" sm="1" xs="3">

                                        </Col> <Col md="1" sm="1" xs="3">

                                    </Col>
                                        <Col md="1" sm="1" xs="3">

                                            <Button className="btn-round btn-icon" color="danger"
                                                    onClick={LoginWithFaceRecognition}>
                                                <i className="fa fa-user"/>
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round" color="facebook">
                                                <i className="fa fa-facebook-f"/>
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round">
                                                <GoogleLogin
                                                    clientId="211469900619-2p5n681boi9123tb9tqohej9b5186mr6.apps.googleusercontent.com"
                                                    buttonText="Google"
                                                    className="google"
                                                    onSuccess={responseGoogle}
                                                    onFailure={responseErrorGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                />
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round" color="linkedin">
                                                <i className="fa fa-linkedin"/>
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round" color="github">
                                                <i className="fa fa-github"/>
                                            </Button>
                                        </Col>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="submit" value="Sign In"
                                                       className="wpcf7-form-control wpcf7-submit"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {loginWithFace ? (
                            <>
                                <div className="col-xl-6 d-lg-inline-block">
                                    <SignInWithFace/>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-xl-6 d-lg-inline-block">
                                    <img src="/images/bg/WallpaperLogin.png" className="img-fluid" alt="architeck"/>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </section>
        </>
    );

}


const YupSchema = Yup.object({
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("Password is Required"),
    username: Yup.string()
        .required("Username is Required"),

});
export default LoginForm;