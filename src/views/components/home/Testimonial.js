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
        <div className="testimonial-slider testimonial-slider-v2 slick-initialized slick-slider slick-dotted" id="testimonial-slider-v2">
            {/* <!-- Single Testimonial --> */}
            {/* <!--<div className="single-testimonial single-testimonial-v2">-->
            <!--    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae conse quatur vellum rem</p>-->
            <!--    <div className="testimonial-author">-->
            <!--        <img src="assets/img/testimonial/testimonial-author-2.png" alt="testimonial author">-->
            <!--        <h6>Ricky L. Simpson <span>Web designer</span></h6>-->
            <!--    </div>-->
            <!--</div>--> */}
        <div className="slick-list draggable">
            <div className="slick-track" style={{opacity: "1", width: "3040px", transform: "translate3d(-760px, 0px, 0px)"}}>
                <div className="single-testimonial single-testimonial-v2 slick-slide slick-cloned" style={{width: "360px"}} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control01" data-slick-index="-2" aria-hidden="true">
                <p>With how unpredictable tickets prices are, Kardinal’s response time ensures we get the best value at all times. </p>
                <div className="testimonial-author">
                    <img src={Thompson} alt="testimonial author" />
                    <h6>Thompson <span>Fidson Healthcare LTD</span></h6>
                </div>
            </div><div className="single-testimonial single-testimonial-v2 slick-slide slick-cloned" style={{width: "360px"}} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control02" data-slick-index="-1" aria-hidden="true">
                
                <p>I don’t think any platform cares about their travel agents as deeply as Kardinal does. Price wise, service wise. Everything is so easy. </p>
                <div className="testimonial-author">
                    <img src={Ebube} alt="testimonial author" />
                    <h6>Ebube <span>Travel Manager</span></h6>
                </div>
            </div><div className="single-testimonial single-testimonial-v2 slick-slide slick-current slick-active" style={{width: "360px"}} tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="false">
                
                <p>I cannot count how many times Kardinal has come through. The platform is so easy to use and they still walk me through all my travel journey.</p>
                <div className="testimonial-author">
                    <img src={kema} alt="testimonial author" />
                    <h6>Kema <span>Femi Kuti’s Manager </span></h6>
                </div>
            </div><div className="single-testimonial single-testimonial-v2 slick-slide slick-active" style={{width: "360px"}} tabindex="0" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" data-slick-index="1" aria-hidden="false">
                
                <p>With how unpredictable tickets prices are, Kardinal’s response time ensures we get the best value at all times. </p>
                <div className="testimonial-author">
                    <img src={Thompson} alt="testimonial author" />
                    <h6>Thompson <span>Fidson Healthcare LTD</span></h6>
                </div>
            </div><div className="single-testimonial single-testimonial-v2 slick-slide" style={{width: "360px"}} tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" data-slick-index="2" aria-hidden="true">
                
                <p>I don’t think any platform cares about their travel agents as deeply as Kardinal does. Price wise, service wise. Everything is so easy. </p>
                <div className="testimonial-author">
                    <img src={Ebube} alt="testimonial author" />
                    <h6>Ebube <span>Travel Manager</span></h6>
                </div>
            </div><div className="single-testimonial single-testimonial-v2 slick-slide slick-cloned" style={{width: "360px"}} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control00" data-slick-index="3" aria-hidden="true">
                
                <p>I cannot count how many times Kardinal has come through. The platform is so easy to use and they still walk me through all my travel journey.</p>
                <div className="testimonial-author">
                    <img src={kema} alt="testimonial author" />
                    <h6>Kema <span>Femi Kuti’s Manager </span></h6>
                </div>
            </div><div className="single-testimonial single-testimonial-v2 slick-slide slick-cloned" style={{width: "360px"}} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control01" data-slick-index="4" aria-hidden="true">
                
                <p>With how unpredictable tickets prices are, Kardinal’s response time ensures we get the best value at all times. </p>
                <div className="testimonial-author">
                    <img src={Thompson} alt="testimonial author" />
                    <h6>Thompson <span>Fidson Healthcare LTD</span></h6>
                </div>
            </div><div className="single-testimonial single-testimonial-v2 slick-slide slick-cloned" style={{width: "360px"}} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control02" data-slick-index="5" aria-hidden="true">
                
                <p>I don’t think any platform cares about their travel agents as deeply as Kardinal does. Price wise, service wise. Everything is so easy. </p>
                <div className="testimonial-author">
                    <img src={Ebube} alt="testimonial author" />
                    <h6>Ebube <span>Travel Manager</span></h6>
                </div>
            </div>
            </div>
            </div>
            <ul className="slick-dots" role="tablist">
                <li className="slick-active" role="presentation">
                    <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabindex="0" aria-selected="true">1</button>
                </li>
                <li role="presentation">
                    <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabindex="-1">2</button>
                </li>
                <li role="presentation">
                    <button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 2" tabindex="-1">3</button>
                </li>
            </ul>
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