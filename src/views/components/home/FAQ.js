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
        <section class="faq-area bg-magnolia pt-130 pb-130">
        <div class="container">
        <div class="section-internal">
        <div class="section-particle-effect d-none d-md-block section-particle-effect-v2">
            {/* {Particles} */}
        </div>
        <div class="row align-items-center">
        <div class="col-lg-6">
            <div class="faq-content content-right-spacer">
                <div class="section-title mb-30">
                    <h3>K-CARE, Travel information at your fingertips</h3>
                </div>
                <div class="iconic-list-wrapper">
                    <div class="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInDown"}}>
                        <div class="iconic-list-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="iconic-list-body">
                            <p class="iconic-list-content">
                                Get <b>automated</b> updates on every location you are visiting.
                            </p>
                        </div>
                    </div>
                    <div class="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInDown"}}>
                        <div class="iconic-list-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="iconic-list-body">
                            <p class="iconic-list-content">
                                Confirm all necessary <b>documents</b> before your trip.
                            </p>
                        </div>
                    </div>
                    <div class="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInDown"}}>
                        <div class="iconic-list-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="iconic-list-body">
                            <p class="iconic-list-content">
                                Get instant <b>Visa</b> and consulate requirement support.
                            </p>
                        </div>
                    </div>
                    <div class="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInDown"}}>
                        <div class="iconic-list-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="iconic-list-body">
                            <p class="iconic-list-content">
                                Dedicated customer <b>support</b> for your concerns.
                            </p>
                        </div>
                    </div>
                    <div class="single-iconic-list-home single-iconic-list iconic-list-padding wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInDown"}}>
                        <a href="/k-care" class="btn1">Discover More</a> 
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="section-right-image animate-float-bob-y wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="2500ms" style={{visibility: "visible", animationDuration: "2500ms", animationDelay: "0ms", animationName: "float-bob-y"}}>
                <img src={k_care} alt="faq im" />
            </div>
        </div>
        </div> 
        {/* <!-- /.row --> */}
        </div> 
        {/* <!-- /.section-internal --> */}
        </div> 
        {/* <!-- /.container --> */}
        </section>
    )
}

export default FAQ;