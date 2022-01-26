import React from "react";
import { newsletter, particle_five, particle_one, particle_three, particle_two } from "../car-rental/CarRental";
import { companies } from "../home/TeamServiceArea";

function Demo(){
    return(
        <>
            <section className="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style={{backgroundImage: `url(${newsletter})`}}>
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img className="particle-1 animate-rotate-me" src={particle_one} alt="particle One" />
                        <img className="particle-2 animate-rotate-me" src={particle_two} alt="particle Two" />
                        <img className="particle-3 animate-zoominout" src={particle_three} alt="particle Three" />
                        <img className="particle-4 animate-float-bob-y" src={particle_five} alt="particle Five" />
                    </div>
                    <div className="row text-center justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="subscribe-newsletter-content">
                                <div className="section-title mb-35">
                                    <div className="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <span className="single-heading-tag">Try Kardinal demo Now</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">See the Future of Business <br className="d-none d-md-block" /> Travel in action</h2>
                                </div>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp mb-100" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div className="form-group flex-demo-items" style="">
                                            <input type="text" style="padding-right:0px; height: 75px;" name="text" id="emailAddress" className="form-control" placeholder="First Name" />
                                            <input type="email" style="padding-right:0px; height: 75px;" name="email" id="emailAddress" className="form-control" placeholder="Work Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" name="submit" value="Go" className="filled-btn bg-filled button-radius btn-bordered">Request Demo</button>
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
        {/* <!-- /.subscribe-newsletter-area --> */}
        {/* <!--====== End Subscribe Newsletter Area ======--> */}
         <section className="our-services pt-100 pb-100">

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
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb" >
                            <img src={companies.company1} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company2} alt="team member one"/>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Team Member --> */}
                <div className="col-lg-3 col-sm-6" style="padding-top: 5%">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company3} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company4} alt="team member one"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company5} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company6} alt="team member one" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" style="padding-top: 5%">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                        <div className="team-member-thumb">
                            <img src={companies.company7} alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
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

export default Demo;