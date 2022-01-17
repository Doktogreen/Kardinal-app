import React from "react";

function Pricing(){
    return(
        <>
            <section class="pricing-area pt-130 pb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="section-title mb-75 text-center">
                            <div class="section-heading-tag">
                                <span class="single-heading-tag">Our Pricing Plan</span>
                            </div>
                            <h2>Straightforward pricing,  <br class="d-none d-md-block" /> next-level travel. </h2>
                            <p>Get free access to the world’s largest travel inventory and our #1 rated Customer Care Team with all our plans.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* <!-- Single Pricing Table --> */}
                    <div class="col-sm-12 col-lg-6">
                        <div class="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="pricing-plan-title">
                                <div class="pricing-table-icon" style="background-image: url(assets/img/pricing/pricing-table-blob.svg);">
                                    <h5 class="filled-btn bg-filled button-radius">Free</h5>
                                    <img src="assets/img/pricing/pricing-table-icon.png" alt="pricing plan icon one" />
                                </div>
                                <div class="pricing-plan-cost">
                                    <span class="payment-currency">€</span>
                                    <span class="plan-price">00.00</span>
                                    <span class="plan-type">/ Trip</span>
                                </div>
                            </div>
                            <div class="pricing-plan-features">
                                <p class="pb-10">Business travel basic:</p>
                                <ul>
                                    <li class="plan-feature">World’s largest travel inventory</li>
                                    <li class="plan-feature">24/7 support via email, chat, and phone</li>
                                    <li class="plan-feature">Travel data reports</li>
                                    <li class="plan-feature">Consolidated invoicing</li>
                                    <li class="plan-feature">Concierge</li>
                                </ul>
                            </div>
                            <div class="pricing-table-foot pricing-table-foot-btn">
                                <a class="btn-secondary-custom-a" href="#">Select Plan</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Pricing Table --> */}
                    <div class="col-sm-12 col-lg-6">
                        <div class="pricing-table professional-plan wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div class="pricing-plan-title">
                                <div class="pricing-table-icon" style="background-image: url(assets/img/pricing/pricing-table-blob.svg);">
                                    <h5 class="filled-btn bg-filled button-radius">Premium</h5>
                                    <img src="assets/img/pricing/pricing-table-icon.png" alt="pricing plan icon one" />
                                </div>
                                <div class="pricing-plan-cost">
                                    <span class="payment-currency">€</span>
                                    <span class="plan-price">15.00</span>
                                    <span class="plan-type">/ Trip</span>
                                </div>
                            </div>
                            <div class="pricing-plan-features">
                                <p class="pb-10">Everything in Free, and:</p>
                                <ul>
                                    <li class="plan-feature">Policies and approval processes</li>
                                    <li class="plan-feature">TravelCare risk management</li>
                                    <li class="plan-feature">Secure traveler sign-in (SSO)</li>
                                    <li class="plan-feature">SCIM user provisioning</li>
                                    <li class="plan-feature">Concierge</li>
                                </ul>
                            </div>
                            <div class="pricing-table-foot pricing-table-foot-btn">
                                <a class="btn-secondary-custom-a" href="#">Select Plan</a>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.pricing-area --> */}
        {/* <!--====== End Pricing Area ======--> */}
        {/* <!--====== Start Our Services Area ======--> */}
        <section class="our-services our-services-v2 bg-white-lilac pt-122 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center mb-70">
                            <h2>Recommended add-ons</h2> 
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="single-info-box wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                            <div class="infobox-body">
                                <h5 class="infobox-title">
                                    <a>Flexible travel</a>
                                </h5>
                                <p class="infobox-excerpt">With FlexiPerk, you get 100% of your business trips refunded with just a click, no questions asked.</p>
                                <div class="infobox-btn"  style="padding-top: 50px">
                                    <a href="#">Read More  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single-info-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms">
                            <div class="infobox-body">
                                <h5 class="infobox-title">
                                    <a>Duty of care</a>
                                </h5>
                                <p class="infobox-excerpt">Handle the end-to-end travel security needs of your travelers with our partner, International SOS.</p>
                                <div class="infobox-btn"  style="padding-top: 20px">
                                    <a href="#">Read More  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single-info-box wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1500ms">
                            <div class="infobox-body">
                                <h5 class="infobox-title">
                                    <a href="#">Group Bookings</a>
                                </h5>
                                <p class="infobox-excerpt">Use our expert service to book and manage your next company retreat, corporate off-site, or business event for nine or more people.</p>
                                <div class="infobox-btn">
                                    <a href="#">Read More  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms">
                            <div class="infobox-body">
                                <h5 class="infobox-title">
                                    <a href="#">Carbon offsetting</a>
                                </h5>
                                <p class="infobox-excerpt">With GreenPerk, reduce your company’s carbon footprint to zero and get customized reports to make more sustainable travel decisions.</p>
                                <div class="infobox-btn">
                                    <a href="#">Read More  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.our-services --> */}
        {/* <!--====== End Start Our Services Area ======--> */}
        {/* <!--====== Start FAQ Area ======--> */}
        <section class="faq-area pt-135 pb-125">
            <div class="container">
                <div class="section-internal">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="faq-content content-right-spacer">
                                <div class="section-title mb-40">
                                    <div class="section-heading-tag">
                                        <span class="single-heading-tag">Asked Question</span>
                                    </div>
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                                <div class="section-accordion section-accordion-v2">
                                    <div class="accordion" id="accordionFAQ">
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingOne">
                                                <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Is the Free plan enough for my team?
                                                </button>
                                            </h5>
                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionFAQ">
                                                <div class="accordion-body">
                                                    <p>Our travel inventory, 24/7 trip support, and unified spend tracking alone can be enough for some small teams. But for advanced reporting features and in-app travel policies, you&#8217;ll need our Premium plan. If you need more granular control of your spend through budgets or want to embed TravelPerk directly into your business workflows, then our Pro plan is for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                    Can I get multiple travel policies in the Free plan?
                                                </button>
                                            </h5>
                                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionFAQ">
                                                <div class="accordion-body">
                                                    <p>No. If you need to create travel policies to allow travelers to book for themselves within policy, then you will need to upgrade to our Premium plan. Should you need to configure complex, multi-departmental policies, or take advantage of our rates negotiation service, then Pro is the right choice.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Do you really have the world’s largest inventory?
                                                </button>
                                            </h5>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionFAQ">
                                                <div class="accordion-body">
                                                    <p>Yes, and this is facilitated by our state of the art technology. We integrate with all major GDS networks as well as inventory across the internet. This means we have access to everything your travel agent has, plus Expedia, Booking.com, Skyscanner, Airbnb and more. This inventory is fully integrated with our platform, allowing you to search, book, pay, invoice and report all in one place without ever being redirected.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingFour">
                                                <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Do Premium and Pro accounts get better inventory?
                                                </button>
                                            </h5>
                                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionFAQ">
                                                <div class="accordion-body">
                                                    <p>No. All accounts have the same access to the world’s best travel inventory. The difference between these accounts is the level of support and corporate travel management features, however the inventory is the same.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    {/* <!-- /.accordion --> */}
                                </div> 
                                {/* <!-- /.section-accordion --> */}
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="section-right-image faq-right-image animate-float-bob-y wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
                                <img src="assets/img/faq/faq-image-2.jpg" alt="faq image" />
                            </div>
                        </div>
                    </div> 
                    {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.section-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.faq-area --> */}
        {/* <!--====== End FAQ Area ======--> */}
        {/* <!--====== Start Subscribe Newsletter Area ======--> */}
        <section class="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style="background-image: url(assets/img/particle/newsletter-bg.png);">
            <div class="container">
                <div class="section-internal">
                    <div class="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img class="particle-1 animate-rotate-me" src="assets/img/particle/particle-2.png" alt="particle One" />
                        <img class="particle-2 animate-rotate-me" src="assets/img/particle/particle-1.png" alt="particle Two" />
                        <img class="particle-3 animate-zoominout" src="assets/img/particle/particle-4.png" alt="particle Three" />
                        <img class="particle-4 animate-float-bob-y" src="assets/img/particle/particle-5.png" alt="particle Five" />
                    </div>
                    <div class="row text-center justify-content-center">
                        <div class="col-xl-7 col-lg-10">
                            <div class="subscribe-newsletter-content">
                                <div class="section-title mb-35">
                                    <div class="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <span class="single-heading-tag">Our Newsletter</span>
                                    </div>
                                    <h2 class="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Subscribe Our Newsletter <br class="d-none d-md-block" />To Get More Update</h2>
                                </div>
                                <div class="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div class="form-group">
                                            <input type="email" name="email" id="emailAddress" class="form-control" placeholder="Enter Your Email Address" />
                                            <button type="submit" name="submit" value="Go" class="filled-btn">Subscribe Now  </button>
                                        </div>
                                    </form>
                                    <div class="newsletter-notice">
                                        <p>On the other hand, we denounce with righteous</p>
                                    </div>
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

export default Pricing;