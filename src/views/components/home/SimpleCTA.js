import React from "react";
import cta_right_particle from "../../../assets/general-assets/img/cta/cta-right-particle-2.png";
import cta_left_particle from "../../../assets/general-assets/img/cta/cta-left-particle-1.png"
;
function SimpleCTA(){
    return(
        <section className="cta-area bg-magnolia">
        <div className="container">
        <div className="cta-content-internal">
            <div className="cta-section-particle d-none d-lg-block">
                <img className="cta-particle-left" src={cta_left_particle} alt="cta particle 1" />
                <img className="cta-particle-right" src={cta_right_particle} alt="cta particle 2" />
            </div>
        <div className="row justify-content-center">
        <div className="col-lg-7">
            <div className="cta-content">
                <div className="section-title text-center">
                    
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0.2s", animationName: "fadeInUp"}}>Ready to save on your <br className="d-none d-md-block" />business travel? </h2>
                    <div className="section-button-wrapper section-dual-button justify-content-center text-center wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0.3s", animationName: "fadeInUp"}}>
                        <a href="https://forms.gle/1tdHpLzWG2brgz5k7" target="_blank" rel="noreferrer" className="btn1">
                            Request Demo 
                        </a>
                        <a href="..." className="filled-btn bg-filled button-radius">
                            Try For Free 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        {/* <!-- /.row --> */}
        </div> 
        {/* <!-- /.cta-content-internal --> */}
        </div> 
        {/* <!-- /.container --> */}
        </section>
    )
}

export default SimpleCTA;