import React, {useState} from 'react';



const ActivatedAccounComponent = () => {

    return (
        <>
            <section className="action-box py-xl-10 pt-bg-light"
                    >
                <div className="pt-bg-overley pt-opacity2 "
                     style={{backgroundImage: "url('images/FullWallpaper.jfif')"}}>
                </div>
                <div className="container" >
                    <div className="row">
                        <div className="col-xl-6 col-12 mb-xl-0">
                            <div className="pt-subscribe-block">
                                <img src="images/gmail.png" className="img-fluid pt-subscribe-img" alt="of suubscribe"/>
                                <div className="pt-subscribe-details">
                                    <h6  style={{color: "darkblue"}}>
                                        Congratulations your Email confirmation is done successfully
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <div className="pt-subscribe-details">
                                <h3 style={{color: "darkblue"}}>
                                    After Activating your account ,  you are able now to <a  style={{color: "darkorange"}} href="/Login"><strong>sign in</strong></a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default ActivatedAccounComponent;