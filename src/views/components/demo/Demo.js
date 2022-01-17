import React from "react";

function Demo(){
    return(
        <>
            <section className="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style="background-image: url(assets/img/particle/newsletter-bg.png);">
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img className="particle-1 animate-rotate-me" src="assets/img/particle/particle-2.png" alt="particle One" />
                        <img className="particle-2 animate-rotate-me" src="assets/img/particle/particle-1.png" alt="particle Two" />
                        <img className="particle-3 animate-zoominout" src="assets/img/particle/particle-4.png" alt="particle Three" />
                        <img className="particle-4 animate-float-bob-y" src="assets/img/particle/particle-5.png" alt="particle Five" />
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
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb" >
                            <img src="assets/img/brand/company-1.png" alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb">
                            <img src="assets/img/brand/company-2.png" alt="team member one"/>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Team Member --> */}
                <div className="col-lg-3 col-sm-6" style="padding-top: 5%">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb">
                            <img src="assets/img/brand/company-3.png" alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb">
                            <img src="assets/img/brand/company-4.png" alt="team member one"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb">
                            <img src="assets/img/brand/company-5.png" alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb">
                            <img src="assets/img/brand/company-6.png" alt="team member one" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" style="padding-top: 5%">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb">
                            <img src="assets/img/brand/company-7.png" alt="team member one" />
                        </div>
                        {/* <div className="team-member-bio">
                            <h5 className="team-member-name">
                                Donald L. Juarez
                            </h5>
                        </div> */}
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                        <div className="team-member-thumb">
                            <img src="assets/img/brand/company-8.png" alt="team member one" />
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
                        <div className="single-team-member wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 100ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-9.png" alt="team member two" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-10.png" alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-11.png" alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-12.png" alt="team member three" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Team Member --> */}
                    <div className="col-lg-6">
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-13.png" alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-14.png" alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-15.png" alt="team member four" />
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
                        <div className="single-team-member wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 100ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-16.png" alt="team member two" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-17.png" alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-18.png" alt="team member three" />
                            </div>
                        </div>
                        {/* <!-- Single Team Member --> */}
                        <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-6.png" alt="team member three" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Team Member --> */}
                    <div className="col-lg-6">
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-1.png" alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-11.png" alt="team member four" />
                            </div>
                        </div>
                        <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div className="team-member-thumb">
                                <img src="assets/img/brand/company-5.png" alt="team member four" />
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