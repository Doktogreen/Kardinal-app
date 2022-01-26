import React from "react";
import travel_policy from "../../../assets/general-assets/img/guide/travel-policy.png";
import employee_engagement from "../../../assets/general-assets/img/guide/employee-engagement.png";
import { 
    newsletter,
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import { 
    announcement_orange, 
    particlleblue, 
    plane_orange 
} from "../ebook/Ebook";

function Guide(){
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
                                <div className="page-title wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInUp"}}>
                                    <h2>Guides</h2>
                                </div>
                                <div className="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInUp"}}>
                                    <ul className="breadcrumb">
                                        <span>Corporate travel jargon simplified for you.</span>
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
        {/* <!-- /.Section 01 --> */}
        <section className="about-us-area pt-100 pb-50">
            <div className="container">
                <div className="row align-items-center align-items-center">
                    <div className="col-lg-7">
                        <div className="blob-image-wrapper content-right-spacer">
                            <div className="blob-shape-wrapper">
                                <img src={particlleblue} alt="blue thumbs up" className="blob-shape blob-shape-1 animate-float-bob-y" />
                                <img src={announcement_orange} alt="orange announcement" className="blob-shape blob-shape-2 animate-float-bob-x" />
                                <img src={plane_orange} alt="orange paper plane" className="blob-shape blob-shape-3 animate-float-bob-x" />
                            </div>
                            <div className="blob-main-image wow fadeInUp" data-wow-delay="00ms" data-wow-duration="2500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                                <img src={travel_policy} alt="Travel Policy" />
                            </div>
                        </div> 
                        {/* <!-- /.blob-image-wrapper --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title section-title-ocean-blue">
                            <h2>Travel Policy Guide For Your Business</h2>
                            <div className="section-title-description">
                                <p>Business travel can be arduous without the right policies in place, from last-minute changes to compliance and approval challenges. 
                                    If you manage travel for your organization, you may or may not have or be familiar with a travel policy that can streamline business travel.</p>
                                <br />
                                <p>In this guide, you will learn how to effectively plan, book and approve trips as an admin, finance, travel or HR manager. Additionally, it will lower overall travel costs and simplify the communication process.</p>
                            </div>
                            <a className="btn-secondary-custom-a" href="http://gokardinal.hubspotpagebuilder.eu/-temporary-slug-2e11a18f-2c5a-4951-9d2b-cd39f395db99?hs_preview=XSRPCUEn-44978649545" target="_blank" rel="noreferrer">Get the Guide</a>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.Section 02 --> */}
        <section className="about-us-area pt-30 pb-50">
            <div className="container">
                <div className="row align-items-center align-items-center">
                    
                    <div className="col-lg-5">
                        <div className="section-title section-title-ocean-blue">
                            
                            <h2>Tactical Ways to Improving Employee Engagement.
                            </h2>
                            
                            <div className="section-title-description">
                                <p>Learn tactical ways to improve employee engagement.</p>
                                <br />
                                <p>With this guide, you will learn</p><br />
                                <div className="section-list-style list-style-v2">
                                    <ul>
                                        <li>the importance of employee engagement and experiences.</li>
                                        <li>Practical ways to improve employee engagement and create value-driven experiences.</li>
                                        <li>stay updated on the post-pandemic realities and pivots.</li>
                                    </ul>
                                </div>
                            </div>
                            <a className="btn-secondary-custom-a" href="http://gokardinal.hubspotpagebuilder.eu/improving-employee-engagement-experience?hs_preview=oaGtCxfQ-43527664606" target="_blank" rel="noreferrer">Download Guide</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="blob-image-wrapper content-left-spacer">
                            <div className="blob-shape-wrapper">
                                <img src={particlleblue} alt="blue thumbs up" className="blob-shape blob-shape-1 animate-float-bob-y" />
                                <img src={announcement_orange} alt="orange announcement" className="blob-shape blob-shape-2 animate-float-bob-x" />
                                <img src={plane_orange} alt="orange paper plane" className="blob-shape blob-shape-3 animate-float-bob-x" />
                            </div>
                            <div className="blob-main-image wow fadeInUp" data-wow-delay="00ms" data-wow-duration="2500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                                <img src={employee_engagement} alt="aEmployee Engagement" />
                            </div>
                        </div> 
                        {/* <!-- /.blob-image-wrapper --> */}
                    </div>
                </div>
                 {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== Start Subscribe Newsletter Area ======--> */}
        <section className="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style={{backgroundImage: `url(${newsletter})`}}>
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img className="particle-1 animate-rotate-me" src={particle_two} alt="particle One" />
                        <img className="particle-2 animate-rotate-me" src={particle_one} alt="particle Two" />
                        <img className="particle-3 animate-zoominout" src={particle_four} alt="particle Three" />
                        <img className="particle-4 animate-float-bob-y" src={particle_five} alt="particle Five" />
                    </div>
                    <div className="row text-center justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="subscribe-newsletter-content">
                                <div className="section-title mb-35">
                                    <div className="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <span className="single-heading-tag">Try Kardinal Now</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Change the way you do <br className="d-none d-md-block" />business trips</h2>
                                </div>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" id="emailAddress" className="form-control" placeholder="Enter Your Email Address" />
                                            <button type="submit" name="submit" value="Go" className="filled-btn bg-filled button-radius btn-bordered">Create free Account</button>
                                        </div>
                                    </form>
                                  
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
        </>
    )
}

export default Guide;