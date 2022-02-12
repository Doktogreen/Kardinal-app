import React from "react";
import { Particles } from "../home/FAQ";
import pic2 from "../../../assets/general-assets/img/app/pic2.jpg";
import pic1 from "../../../assets/general-assets/img/app/pic1.jpg";
import collabo from "../../../assets/general-assets/img/app/collaboration-bg.jpg";
import img_2 from "../../../assets/general-assets/img/company/img_2.png";
import img_3 from "../../../assets/general-assets/img/company/img_3.png";
import take_your_biz from "../../../assets/general-assets/img/company/take_your_business.png";
import kardinal_travel_about_us from "../../../assets/general-assets/img/about/kardinal-travel-about-us.svg";
import member1 from "../../../assets/general-assets/img/team/member1.jpg";
import member2 from "../../../assets/general-assets/img/team/member2.jpg";
import member3 from "../../../assets/general-assets/img/team/member3.jpg";
import member4 from "../../../assets/general-assets/img/team/member4.jpg";
import member5 from "../../../assets/general-assets/img/team/member5.jpg";
import member6 from "../../../assets/general-assets/img/team/member6.jpg";
import member7 from "../../../assets/general-assets/img/team/member7.jpg";
import member8 from "../../../assets/general-assets/img/team/member8.jpg";
import member9 from "../../../assets/general-assets/img/team/member9.jpg";

export let pic_one = pic1;
export let pic_two = pic2;
export let members = {
    member_1: member1,
    member_2: member2,
    member_3: member3,
    member_4: member4,
    member_5: member5,
    member_6: member6,
    member_7: member7,
    member_8: member8,
    member_9: member9,
}

function Company(){
    return(
        <>
        <section class="breadcrumb-area">
            <div class="container">
                <div class="section-internal">
                    <div class="section-particle-effect d-none d-md-block section-particle-effect-v3">
                        <Particles />
                    </div>
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="section-title mb-25 text-center">
                            <div class="section-heading-tag">
                                <span class="single-heading-tag">About Company</span>
                            </div>
                            <h2>Giving businesses the complete control </h2>
                            <p>Kardinal is Nigeria's first end-to-end business trip platform with a mission to give business trips a new face in Africa.</p> 
                           
                        </div>
                        </div>
                    </div> 
                    {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.section-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.breadcrumb-area --> */}
        {/* <!--====== End Breadcrumb Area ======--> */}

        <section class="design-feature-area overflow-hidden  pt-130 pb-130">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 order-2 order-lg-1">
                        <div class="section-title section-title-mirage">
                            {/* <!--<div class="section-heading-tag">-->
                            <!--    <span class="single-heading-tag">About Us</span>-->
                            <!--</div>--> */}
                            <h2>Discover a different <span>way to work</span></h2>
                            <div class="section-title-description">
                                <p>We are giving you the tools to experience a different kind of business travelling. We're a team of diverse and inclusive members always looking out for you with one mission: to simplify business trips for your organization. </p>
                            </div>
                            <div class="section-title-description">
                                <p>Our team is a reflection of how we serve you. It is our belief that every employee should be their best at work and outside the workplace, and we carry that energy when providing service to you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 order-1 order-lg-2">
                        <div class="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div class="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "float-bob-y"}}>
                                <img src={img_3} alt="company 02" />
                            </div>
                            <div class="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "float-bob-x"}}>
                                <img src={img_2} alt="company 03" />
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>

        {/* <!--====== Start Collaboration Area ======--> */}
        <section class="collaboration-area bg-cover pt-100" style={{backgroundImage: `url(${collabo})`}}>
            <div class="container">
                <div class="section-internal position-relative">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="collaboration-content pb-30">
                                <div class="section-title section-title-tuna">
                                    <h2>What we <span>promise:</span></h2>
                                    <div class="section-title-description">
                                        <h5>Trust And Transparency:</h5>
                                        <p>Our vision was to create a world where businesses could plan their business trips without barriers and we have created that world for you. From booking, tracking, to payment, you keep a tab of everything on the go.</p>
                                    </div>
                                    <div class="section-title-description">
                                        <h5>Personalization</h5>
                                        <p>It is an All-star experience. We promise to constantly be there 24/7. Communicate however you choose either by Whatsapp, email or a phone call, get a response in less than 1 minute.</p>
                                    </div>
                                    <div class="section-title-description">
                                        <h5>Efficiency</h5>
                                        <p>We will always be at the forefront of empowering you with simple, yet powerful tools that make business trips more enjoyable</p>
                                    </div>
                                    <div class="section-title-description">
                                        <h5>Empathy and Customer’s Satisfaction</h5>
                                        <p>We are dedicated to keeping you happy. We will keep working to ensure you keep travelling the way you want.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-right-image text-center animate-float-bob-y section-image-circle-shape wow fadeInDown" data-wow-delay="0ms" data-wow-duration="2000ms">
                        <img src={kardinal_travel_about_us} alt="About Us screenshot" />
                    </div> 
                    {/* <!-- /.section-right-image --> */}
                </div> 
                {/* <!-- /.section-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.collaboration-area --> */}
        {/* <!--====== End Collaboration Area ======--> */}
        
        {/* <!--====== Start App Call to Action Area ======--> */}
        <section class="app-cta-area">
            <div class="container">
                <div class="row align-items-center pt-100">
                    <div class="col-lg-7 align-self-lg-end order-2 order-lg-1">
                        <div class="section-left-image pb-55 text-center animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="2000ms">
                            <img src={take_your_biz} alt="take_your_business.png" />
                        </div>
                    </div>
                    <div class="col-lg-5 order-1 order-lg-2">
                        <div class="section-title pb-55 section-title-tuna">
                            <h2>Ready to take your business trip to the
                                <span> next level?</span>
                            </h2>
                            <div class="section-title-description">
                                <div class="section-list-style list-style-v2">
                                    <ul>
                                        <li>Flight, accommodation and car Search</li>
                                        <li>Report on the go</li>
                                        <li>Flexible Payment</li>
                                        <li>Personalized services</li>
                                    </ul>
                                </div>    
                            </div>
                            <div class="section-button-wrapper section-dual-button">
                                <a href="https://forms.gle/1tdHpLzWG2brgz5k7" target="_blank" rel="noreferrer" class="btn1">
                                    Request Demo
                                </a>
                                <a href=".." class="filled-btn bg-filled button-radius">
                                    Try For Free
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.app-cta-area --> */}
        </>
    )
}

export default Company;