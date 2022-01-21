import React from "react";
import particle_1 from "../../../assets/general-assets/img/particle/particle-1.png";
import particle_2 from "../../../assets/general-assets/img/particle/particle-2.png";
import particle_3 from "../../../assets/general-assets/img/particle/particle-3.png";
import particle_4 from "../../../assets/general-assets/img/particle/particle-4.png";
import particle_5 from "../../../assets/general-assets/img/particle/particle-5.png";
import particle_7 from "../../../assets/general-assets/img/particle/particle-7.png";
import k_care from "../../../assets/general-assets/img/illustration-kcare.png";

export function Particles(){
    return(
        <>
            <img className="particle-1 animate-zoom-fade" src={particle_1} alt="particle One" />
            <img className="particle-2 animate-rotate-me" src={particle_2} alt="particle Two" />
            <img className="particle-3 animate-float-bob-x" src={particle_3} alt="particle Three" />
            <img className="particle-4 animate-zoominout" src={particle_4} alt="particle Four" />
            <img className="particle-5 animate-zoominout" src={particle_5} alt="particle Five" />
            <img className="particle-7 animate-float-bob-x" src={particle_7} alt="particle Seven" />
        </>
    )
}

function FAQ(){
    return(
        <section className="faq-area bg-magnolia pt-130 pb-130">
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v2">
                        {Particles}
                    </div>
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content content-right-spacer">
                                <div className="section-title mb-30">
                                    <h3>K-CARE, Travel information at your fingertips</h3>
                                </div>
                                <div className="iconic-list-wrapper">
                                    <div className="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="iconic-list-icon">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="iconic-list-body">
                                            <p className="iconic-list-content">
                                                Get <b>automated</b> updates on every location you are visiting.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="iconic-list-icon">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="iconic-list-body">
                                            <p className="iconic-list-content">
                                                Confirm all necessary <b>documents</b> before your trip.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="iconic-list-icon">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="iconic-list-body">
                                            <p className="iconic-list-content">
                                                Get instant <b>Visa</b> and consulate requirement support.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="iconic-list-icon">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="iconic-list-body">
                                            <p className="iconic-list-content">
                                                Dedicated customer <b>support</b> for your concerns.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <a href="k-care.html" className="btn1">Discover More</a> 
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-right-image animate-float-bob-y wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
                                <img src={k_care} alt="faq" />
                            </div>
                        </div>
                    </div> 
                {/* <!-- /.row --> */}
                </div> 
            {/* <!-- /.section-internal --> */}
            </div> 
        {/* <!-- /.container --> */}
        </section> 
        // {/* <!-- /.faq-area --> */}
    )
}

export default FAQ;