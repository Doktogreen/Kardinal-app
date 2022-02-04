import React from "react";
import kema from "../../../assets/general-assets/img/testimonial/Kema.PNG";
import Thompson from "../../../assets/general-assets/img/testimonial/Thompson.PNG";
import Ebube from "../../../assets/general-assets/img/testimonial/Ebube.jpeg";
// import left_particle from "../../../assets/general-assets/img/cta/cta-left-particle-1.png";
// import right_particle from "../../../assets/general-assets/img/cta/cta-right-particle-1.png";

function Testimonial(){
    return(
        <section className="testimonial-area pt-130 pb-120">
        <div className="container">
        <div className="section-title text-center mb-55">
        <div className="section-heading-tag">
        <span className="single-heading-tag">Testimonials</span>
        </div>
        <h2>See what great businesses are saying about us.</h2>
        </div><div className="row justify-content-center">
        <div className="col-lg-8">
        <div className="testimonial-slider testimonial-slider-v2" id="testimonial-slider-v2">
            {/* <!-- Single Testimonial --> */}
            <div className="single-testimonial single-testimonial-v2">
                
                <p>I cannot count how many times Kardinal has come through. The platform is so easy to use and they still walk me through all my travel journey.</p>
                <div className="testimonial-author">
                    <img src={kema} alt="testimonial author" />
                    <h6>Kema <span>Femi Kuti’s Manager </span></h6>
                </div>
            </div>
            <div className="single-testimonial single-testimonial-v2">
                
                <p>With how unpredictable tickets prices are, Kardinal’s response time ensures we get the best value at all times. </p>
                <div className="testimonial-author">
                    <img src={Thompson} alt="testimonial author" />
                    <h6>Thompson <span>Fidson Healthcare LTD</span></h6>
                </div>
            </div>
            <div className="single-testimonial single-testimonial-v2">
                <p>I don’t think any platform cares about their travel agents as deeply as Kardinal does. Price wise, service wise. Everything is so easy. </p>
                <div className="testimonial-author">
                    <img src={Ebube} alt="testimonial author" />
                    <h6>Ebube <span>Travel Manager</span></h6>
                </div>
            </div>
            {/* <!--<div className="single-testimonial single-testimonial-v2">-->
                
            <!--    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae conse quatur vellum rem</p>-->
            <!--    <div className="testimonial-author">-->
            <!--        <img src="assets/img/testimonial/testimonial-author-2.png" alt="testimonial author">-->
            <!--        <h6>Ricky L. Simpson <span>Web designer</span></h6>-->
            <!--    </div>-->
            <!--</div>--> */}
        </div> 
        </div>
        </div> 
        {/* <!-- /.row --> */}
        </div> 
        {/* <!-- /.container --> */}
        </section>
    )
}

export default Testimonial;