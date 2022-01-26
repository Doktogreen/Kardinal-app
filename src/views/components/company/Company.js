import React from "react";
import { Particles } from "../home/FAQ";
import company_background  from "../../../assets/general-assets/img/app/collaboration-bg.jpg";
import company_background_2 from "../../../assets/general-assets/img/services/dots-pattern-bg.png";
import pic2 from "../../../assets/general-assets/img/app/pic2.jpg";
import pic1 from "../../../assets/general-assets/img/app/pic1.jpg";
import invest_page from "../../../assets/general-assets/img/app/invest-page-on-app.png";
import team1 from "../../../assets/general-assets/img/team/team1.jpg";
import member1 from "../../../assets/general-assets/img/team/member1.jpg";
import member2 from "../../../assets/general-assets/img/team/member2.jpg";
import member3 from "../../../assets/general-assets/img/team/member3.jpg";
import member4 from "../../../assets/general-assets/img/team/member4.jpg";
import member5 from "../../../assets/general-assets/img/team/member5.jpg";
import member6 from "../../../assets/general-assets/img/team/member6.jpg";
import member7 from "../../../assets/general-assets/img/team/member7.jpg";
import member8 from "../../../assets/general-assets/img/team/member8.jpg";
import member9 from "../../../assets/general-assets/img/team/member9.jpg";
import cta_thumbnail from "../../../assets/general-assets/img/cta/download-app-cta-thumbnail.png";

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
        <section className="breadcrumb-area">
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v3">
                      <Particles/>  
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section-title mb-25 text-center">
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">About Company</span>
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
        <section className="design-feature-area overflow-hidden  pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 order-2 order-lg-1">
                        <div className="section-title section-title-mirage">
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">About Us</span>
                            </div>
                            <h2>Discover a different <span>way to work</span></h2>
                            <div className="section-title-description">
                                <p>At Kardinal, we all have different roles and goals to achieve day-to-day, but together we share the same mission; making business travelers happy.</p>
                            </div>
                            <div className="section-title-description">
                                <p>We give travelers the freedom, autonomy, and support they need to travel exactly the way they want—an experience that allows them to be their best selves at work, so that they can be their best selves outside of work too. And we believe in the same values for our company, because building something that makes people happy starts with a happy team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 order-1 order-lg-2">
                        <div className="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div className="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "float-bob-y"}}>
                                <img src={pic1} alt="connect team one" />
                            </div>
                            <div className="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "float-bob-x"}}>
                                <img src={pic2} alt="connect team two" />
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== Start Collaboration Area ======--> */}
        <section className="collaboration-area bg-cover pt-100" style={{backgroundImage: `url(${company_background})`}}>
            <div className="container">
                <div className="section-internal position-relative">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="collaboration-content pb-30">
                                <div className="section-title section-title-tuna">
                                    <h2>A Short  <span>Story!</span></h2>
                                    <div className="section-title-description">
                                        <p>Kardinal is the first online “Savings & Investment” app in West Africa. We first launched as “Piggybank.ng” on the 7th of January 2016 as a savings-only platform.</p>
                                    </div>
                                    <div className="section-title-description">
                                        <p>For 3 years, we offered only savings to our users. Then in April of 2019 we rebranded to “Kardinal” and began offering direct investment opportunities to users in addition to savings.</p>
                                    </div>
                                    <div className="section-title-description">
                                        <p>4 years on, we have continued to deliver excellent service to our 1,000,000 users and counting, helping them manage their finances with simplicity and transparency. Combined, our users save & invest billions of Naira every month that they would have instead spent.</p>
                                    </div>
                                    <div className="section-title-description">
                                        <a className="btn-secondary-custom-a" href="...">See FAQs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-right-image text-center animate-float-bob-y section-image-circle-shape wow fadeInDown" data-wow-delay="0ms" data-wow-duration="2000ms">
                        <img src={invest_page} alt="collaboration app screenshot" />
                    </div> 
                    {/* <!-- /.section-right-image --> */}
                </div> 
                {/* <!-- /.section-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.collaboration-area --> */}
        {/* <!--====== End Collaboration Area ======--> */}
        <section className="team-skills-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="team-details-images content-right-spacer">
                            <div className="team-details-thumbnail team-details-thumbnail-main animate-float-bob-y wow fadeInDown" data-wow-delay="100ms" data-wow-duration="2000ms" style={{visibility: "visible", animationDuration: "2000ms", animationDelay: "100ms", animationName: "float-bob-y"}}>
                                <img src={team1} alt="team skills thumbnail one" />
                            </div>
                            
                        </div> 
                    </div> 
                    <div className="col-xl-5 col-lg-6">
                        <div className="team-details-content">
                            <div className="section-title">
                                <div className="section-heading-tag">
                                   
                                </div>
                                <h2>THE SUM OF OUR PERSPECTIVES</h2>
                                <div className="section-title-description">
                                    <p>That’s why everyone at Translation has a major (what it says on our email signatures) 
                                        and a minor (our secret superpowers). We are creators, collectors, historians, and more. 
                                        And in everything we do, we allow our expert fluency across different pockets of culture 
                                        to inform the boardroom and elevate the work. 
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== Start Our Services Area ======--> */}
        <section className="our-team-area our-team-area-v2 pt-130 pb-100" style={{backgroundImage: `url(${company_background_2})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-70">
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">Creative Team</span>
                            </div>
                            <h2>We Have Professional <br className="d-none d-md-block" /> Creative Team</h2>
                        </div>
                    </div> 
                    {/* <!-- /.col-lg-8 --> */}
                </div> 
                {/* <!-- /.row --> */}
                <div className="team-member-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member1} alt="team member one" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Chaucer Barnes
                                    </h5>
                                    <p className="team-member-role">
                                        Chief Marketing Officer
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member2} alt="team member three" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Shanice Graves
                                    </h5>
                                    <p className="team-member-role">
                                        Head of Ideas
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member3} alt="team member two" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Ann Wool
                                    </h5>
                                    <p className="team-member-role">
                                        President, Translation LLC
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "300ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member4} alt="team member four" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Susanna Swartley
                                    </h5>
                                    <p className="team-member-role">
                                        Head of Client Services
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "400ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member5} alt="team member five" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Sandi Preston
                                    </h5>
                                    <p className="team-member-role">
                                        Chief Strategy Officer
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "500ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member6} alt="team member six" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Alison Hill
                                    </h5>
                                    <p className="team-member-role">
                                        Head of Production
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "600ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member7} alt="team member seven" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        James McNamara
                                    </h5>
                                    <p className="team-member-role">
                                        EVP Operations
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "700ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member8} alt="team member eight" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Jason Campbell
                                    </h5>
                                    <p className="team-member-role">
                                        Executive Creative Director
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "700ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={member9} alt="team member eight" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Joel Rodriguez
                                    </h5>
                                    <p className="team-member-role">
                                        Group Context Director
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.team-member-content --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== End Start Our Services Area ======--> */}
        {/* <!--====== Start App Call to Action Area ======--> */}
        <section className="app-cta-area">
            <div className="container">
                <div className="row align-items-center pt-100">
                    <div className="col-lg-7 align-self-lg-end order-2 order-lg-1">
                        <div className="section-left-image text-center animate-float-bob-x content-right-spacer wow fadeInDown" data-wow-delay="0ms" data-wow-duration="2000ms" />
                            <img src={cta_thumbnail} style={{width:"75%"}} alt="app download thumbnail" />
                        </div>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2">
                        <div className="section-title pb-55 section-title-tuna">
                            <h2>Ready to save on your 
                                <span>business travel?</span>
                            </h2>
                            <div className="section-title-description">
                                <p className="mb-10">Sed ut perspiciatis unde omnis iste natus errors voluptatem accusantium doloremque laudantium totam rem aperiam eaqpsae.</p>
                                <p>Quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabe.</p>
                            </div>
                            <div className="section-button-wrapper section-dual-button">
                                <a href="..." className="btn1">
                                    Request Demo
                                </a>
                                <a href="..." className="filled-btn bg-filled button-radius">
                                    Try For Free
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.row --> */}
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.app-cta-area --></img> */}
        </>
    )
}

export default Company;