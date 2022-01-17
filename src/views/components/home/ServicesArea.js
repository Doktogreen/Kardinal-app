import React from "react";

function ServicesArea(){
    return(
        <section className="our-services border-top-blue pt-130 pb-90">
            <div className="container">
                <div className="our-services-content-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="icon-boxes-wrapper icon-boxes-grid" style={{display: "block"}}>
                                <div className="single-iconic-box iconic-box-v2" style={{width: "100%", height: "350px"}}>
                                    <div className="iconic-box-icon iconic-box-gradient-3">
                                        <i className="far fa-user-chart"></i>
                                    </div>
                                    <div className="iconic-box-body">
                                        <h5 className="iconic-box-title">Bleisure</h5>
                                        <p className="iconic-box-content">
                                            The silver lining to your work. Enjoy the best of both worlds; work and play wherever you are.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="icon-boxes-wrapper icon-boxes-grid" style={{display: "block"}}>
                                <div className="single-iconic-box iconic-box-v2" style={{width: "100%", height: "350px"}}>
                                    <div className="iconic-box-icon iconic-box-gradient-3">
                                        <i className="far fa-user-chart"></i>
                                    </div>
                                    <div className="iconic-box-body">
                                        <h5 className="iconic-box-title">Industry</h5>
                                        <p className="iconic-box-content">
                                            Travel solution for every industry. Whether entertainment, Oil and Gas, NGO, Financial or FMCG, leverage the right tool for your business travel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="icon-boxes-wrapper icon-boxes-grid" style={{display: "block"}}>
                                <div className="single-iconic-box iconic-box-v2" style={{width: "100%"}}>
                                    <div className="iconic-box-icon iconic-box-gradient-3">
                                        <i className="far fa-user-chart"></i>
                                    </div>
                                    <div className="iconic-box-body">
                                        <h5 className="iconic-box-title">Leisure</h5>
                                        <p className="iconic-box-content">
                                             Life’s too short! <br /> Discover the experiences that await you. Hop on the platform for booking exciting experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section> 
    )
}

export default ServicesArea;