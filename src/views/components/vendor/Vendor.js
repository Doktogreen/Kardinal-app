import React from "react";
import { 
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import { dotpattern } from "../career/Career";
import { companies } from "../home/TeamServiceArea";

function Vendor(){
    return(
        <>
            <section className="breadcrumb-area">
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v3">
                        <img className="particle-1 animate-zoom-fade" src={particle_one} alt="particle One" />
                        <img className="particle-2 animate-rotate-me" src={particle_two} alt="particle Two" />
                        <img className="particle-3 animate-float-bob-x" src={particle_three} alt="particle Three" />
                        <img className="particle-4 animate-float-bob-y" src={particle_four} alt="particle Four" />
                        <img className="particle-5 animate-float-bob-y" src={particle_five} alt="particle Five" />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="breadcrumb-content text-center">
                                <div className="page-title wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInDown"}}>
                                    <h1>Kardinal Vendor</h1>
                                </div>
                                <div className="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInUp"}}>
                                    <ul className="breadcrumb">
                                        <span>Trusted by over 3000 of the world's most awesome companies</span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.section-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
         {/* <!--====== End Breadcrumb Area ======--> */}
         <section className="contact-area pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="contact-area-content content-right-spacer">
                            <div className="info-iconic-boxes">
                                <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInUp"}}>
                                    <div className="info-icon info-icon-gradient-1">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info-body">
                                        <h5>Our Location</h5>
                                        <p>354 Oakridge, Camden <br /> NJ 08102 - USA</p>
                                    </div>
                                </div>
                                <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInUp"}}>
                                    <div className="info-icon info-icon-gradient-2">
                                        <i className="fal fa-envelope-open-text"></i>
                                    </div>
                                    <div className="info-body">
                                        <h5>Email Address</h5>
                                        <p><a href="mailto:Kardinal@gmail.com">kardinal@gmail.com</a></p>
                                        <p><a href="www.kardinal.net" target="_blank">www.kardinal.net</a></p>
                                    </div>
                                </div>
                                <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.3s", animationName: "fadeInUp"}}>
                                    <div className="info-icon info-icon-gradient-3">
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="info-body">
                                        <h5>Urgent Call</h5>
                                        <p><a href="tel:+ +01234567899"> +012 (345) 678 99</a></p>
                                        <p><a href="tel:+8563214">+8563214</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form-area content-right-spacer">
                            <div className="section-title mb-40">
                                <div className="section-heading-tag">
                                    <span className="single-heading-tag">Become a vendor</span>
                                </div>
                                <h2>Have Any Questions ? <br className="d-none d-md-block" /> Let’s Start to Talk</h2>
                            </div>
                            <div className="contact-respond">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="fullName" placeholder="Full Name" name="name" required="" />
                                        <label for="fullName">Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" name="phone" required="" />
                                        <label for="phoneNumber">Phone</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="email" className="form-control" id="emailAddress" placeholder="Email Address" name="email" required="" />
                                        <label for="emailAddress">Email</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Company" name="subject" required="" />
                                        <label for="subject">Company name</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="subject" placeholder="What is your role" name="subject" required="" />
                                        <label for="subject">What is your role</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Services" name="subject" required="" />
                                        <label for="subject">What are the service you render</label>
                                    </div>
                                    <div className="input-group form-textarea">
                                        <textarea className="form-control" id="message" placeholder="Websites(Your social links also apply here if you currently have no website)" name="message"></textarea>
                                        <label for="message">Website</label>
                                    </div>
                                    <div className="input-group">
                                        <button type="submit" className="btn1">Become a vendor</button>
                                    </div>
                                </form>
                            </div> 
                            {/* <!-- /.contact-respond --> */}
                        </div> 
                        {/* <!-- /.contact-form-area --> */}
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div>
             {/* <!-- /.container --> */}
        </section>
         <section className="our-services our-services-v1 pt-100 pb-100" style={{backgroundImage: `url(${dotpattern})`}}>
            <div className="container">
            <div className="row justify-content-center justify-content-lg-start">
            <div className="col-lg-6">
            <div className="section-title text-center text-lg-left section-title-ocean-blue">
                {/* <div className="section-heading-tag">
                    <span className="single-heading-tag">Creative Team</span>
                </div> */}
                <h2>Trusted 
                    by over 3000 of the world's most awesome <span>companies</span>
                </h2>
            </div>
            <div className="row justify-content-end">
                {/* <!-- Single Team Member --> */}
                <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company1} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company2} alt="team member one" />
                        </div>
                    </div>
                </div>
                {/* <!-- Single Team Member --> */}
                <div className="col-lg-3 col-sm-6" style={{paddingTop: "5%"}}>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company3} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company4} alt="team member one" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company5} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company6} alt="team member one" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" style={{paddingTop: "5%"}}>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company7} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0s", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company8} alt="team member one" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3">
            <div className="team-member-content">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"100ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company9} alt="team member two" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company10} alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company11} alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company12} alt="team member three" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Team Member --> */}
                    <div className="col-lg-6">
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"300ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company13} alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"300ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company14} alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"300ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company15} alt="team member four" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3">
            <div className="team-member-content">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"100ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company16} alt="team member two" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company17} alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company18} alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company6} alt="team member three" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Team Member --> */}
                    <div className="col-lg-6">
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"300ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company1} alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"300ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company11} alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"300ms", animationName: "fadeInUp"}}>
                            <div className="team-member-thumb">
                                <img src={companies.company5} alt="team member four" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            </div> 
            {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
            </section>
        </>
    )
}

export default Vendor;