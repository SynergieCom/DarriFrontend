import React, {useState} from 'react';
import {Button, Col, FormGroup, Input, Label} from "reactstrap";

const LoginForm = () => {


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
                                <form className="quote-from">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <i className="nc-icon nc-single-02"/>
                                                <input type="text" name="subject" className="form-control" id="Subject"
                                                       placeholder="Username or Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <i className="nc-icon nc-key-25"/>
                                                <input type="password" name="subject" className="form-control"
                                                       id="Subject"
                                                       placeholder="Password"/>
                                            </div>
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
                                                <a href="/login" style={{color: "darkblue"}}>Forgot Password ?</a>
                                            </FormGroup>
                                        </FormGroup>

                                        <Col md="1" sm="1" xs="3">

                                        </Col>      <Col md="1" sm="1" xs="3">

                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round" color="facebook">
                                                <i className="fa fa-facebook-f" />
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round" color="google">
                                                <i className="fa fa-google-plus" />
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round" color="linkedin">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="1" xs="3">
                                            <Button className="btn-icon btn-round" color="github">
                                                <i className="fa fa-github" />
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
                        <div className="col-xl-6 d-lg-inline-block">
                            <img src="/images/bg/WallpaperLogin.png" className="img-fluid" alt="architeck"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default LoginForm;