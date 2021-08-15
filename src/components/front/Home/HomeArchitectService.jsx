import React from 'react';
import Workingcard from "../../../ArchitekComponentAndPages/Work/Work-one/Workingcard";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router";


const HomeArchitectService = () => {
    const history = useHistory();
    const SignArchitect = () => {
      history.push("/SignUpArchitect");
      history.go(0);
    }
    const SignEngineer = () => {

    }


    return (
        <>
            <section className=" working-with-excellent pt-q pt-bg-dark  wow animate__fadeIn" data-wow-delay="0.2s">
                <div className="pt-bg-effect" style={{backgroundImage: "url('images/Archi4.png')"}}></div>
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6">
                            <div className="pt-section-title-box text-left">
                                <span className="pt-section-sub-title text-white border-white">Join our Platform</span>
                                <h2 className="pt-section-title text-white">Architect & Engineer Service</h2>
                                <p className="pt-section-description text-white">It is a long established fact that a
                                    reader will be
                                    distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                            <ul className="icon-list-items text-white">
                                <Workingcard
                                    des="Lorem ipsum dolor sit amet,consectetur adipiscing elit."
                                />
                                <Workingcard
                                    des="Integer hgf egestas metus blandit sagittis vestibulum."
                                />
                                <Workingcard
                                    des="Nunc iaculis libero in ipsum molestie fermentum,a molestie nulla aliquet."
                                />
                                <Workingcard
                                    des="Integer eget massa malesuada,semper metus in,mattis
                           diam."
                                />
                            </ul>
                            <div className="mt-5">
                                <a className="pt-button pt-filter-button-group-" href="/aboutus">
                                    <div className="pt-button-block">
                                        <span className="pt-button-line-left"></span>
                                        <span className="pt-button-text">View More</span>
                                        <span className="pt-button-line-right"></span>
                                        <i className="ion ion-android-arrow-dropright pt-btn-icon"></i>
                                    </div>
                                </a>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <div className="mt-4">
                                        <div className="pt-button-block">
                                            <input type="submit" value="Join As Architect"
                                                   className="wpcf7-form-control wpcf7-submit" onClick={SignArchitect}/>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div className="mt-4">

                                        <div className="pt-button-block">
                                            <input type="submit" value="Join As Engineer"
                                                   className="wpcf7-form-control wpcf7-submit" onClick={SignEngineer}/>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="col-xl-6 col-12 mt-md-4 mt-lg-4 mt-4 d-flex align-items-center">
                            <div id="44c57" className="content__image-wrap content__image-wrap--half"
                                 data-color="#FF631B"
                                 data-direction="rl">
                                <img className="img-fluid" src="images/Architect.jpg" alt="demo-img "/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default HomeArchitectService;