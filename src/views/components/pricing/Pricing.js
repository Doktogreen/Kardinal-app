import React from "react";
import pricing_table_blob from "../../../assets/general-assets/img/pricing/pricing-table-blob.svg";
import pricing_table_icon from "../../../assets/general-assets/img/pricing/pricing-table-icon.png";
import { 
    newsletter, 
    particle_five, 
    particle_four, 
    particle_one, 
    particle_two 
} from "../car-rental/CarRental";
import { faqimg } from "../hotel/Hotel";

function Pricing(){
    return(
        <>
            <section className="pricing-area pt-130 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title mb-75 text-center">
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">Our Pricing Plan</span>
                            </div>
                            <h2>Straightforward pricing,  <br className="d-none d-md-block" /> next-level travel. </h2>
                            <p>Get free access to the world’s largest travel inventory and our #1 rated Customer Care Team with all our plans.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- Single Pricing Table --> */}
                    <div className="col-sm-12 col-lg-6">
                        <div className="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="pricing-plan-title">
                                <div className="pricing-table-icon" style={{backgroundImage: `url(${pricing_table_blob})`}}>
                                    <h5 className="filled-btn bg-filled button-radius">Free</h5>
                                    <img src={pricing_table_icon} alt="pricing plan icon one" />
                                </div>
                                <div className="pricing-plan-cost">
                                    <span className="payment-currency">€</span>
                                    <span className="plan-price">00.00</span>
                                    <span className="plan-type">/ Trip</span>
                                </div>
                            </div>
                            <div className="pricing-plan-features">
                                <p className="pb-10">Business travel basic:</p>
                                <ul>
                                    <li className="plan-feature">World’s largest travel inventory</li>
                                    <li className="plan-feature">24/7 support via email, chat, and phone</li>
                                    <li className="plan-feature">Travel data reports</li>
                                    <li className="plan-feature">Consolidated invoicing</li>
                                    <li className="plan-feature">Concierge</li>
                                </ul>
                            </div>
                            <div className="pricing-table-foot pricing-table-foot-btn">
                                <a className="btn-secondary-custom-a" href="...">Select Plan</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Pricing Table --> */}
                    <div className="col-sm-12 col-lg-6">
                        <div className="pricing-table professional-plan wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="pricing-plan-title">
                                <div className="pricing-table-icon" style={{backgroundImage: `url(${pricing_table_blob})`}}>
                                    <h5 className="filled-btn bg-filled button-radius">Premium</h5>
                                    <img src={pricing_table_icon} alt="pricing plan icon one" />
                                </div>
                                <div className="pricing-plan-cost">
                                    <span className="payment-currency">€</span>
                                    <span className="plan-price">15.00</span>
                                    <span className="plan-type">/ Trip</span>
                                </div>
                            </div>
                            <div className="pricing-plan-features">
                                <p className="pb-10">Everything in Free, and:</p>
                                <ul>
                                    <li className="plan-feature">Policies and approval processes</li>
                                    <li className="plan-feature">TravelCare risk management</li>
                                    <li className="plan-feature">Secure traveler sign-in (SSO)</li>
                                    <li className="plan-feature">SCIM user provisioning</li>
                                    <li className="plan-feature">Concierge</li>
                                </ul>
                            </div>
                            <div className="pricing-table-foot pricing-table-foot-btn">
                                <a className="btn-secondary-custom-a" href="...">Select Plan</a>
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
        <section className="our-services our-services-v2 bg-white-lilac pt-122 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-70">
                            <h2>Recommended add-ons</h2> 
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                            <div className="infobox-body">
                                <h5 className="infobox-title">
                                    <a href="...">Flexible travel</a>
                                </h5>
                                <p className="infobox-excerpt">With FlexiPerk, you get 100% of your business trips refunded with just a click, no questions asked.</p>
                                <div className="infobox-btn"  style={{paddingTop: "50px"}}>
                                    <a href="...">Read More  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms">
                            <div className="infobox-body">
                                <h5 className="infobox-title">
                                    <a href="...">Duty of care</a>
                                </h5>
                                <p className="infobox-excerpt">Handle the end-to-end travel security needs of your travelers with our partner, International SOS.</p>
                                <div className="infobox-btn"  style={{paddingTop: "20px"}}>
                                    <a href="...">Read More  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1500ms">
                            <div className="infobox-body">
                                <h5 className="infobox-title">
                                    <a href="...">Group Bookings</a>
                                </h5>
                                <p className="infobox-excerpt">Use our expert service to book and manage your next company retreat, corporate off-site, or business event for nine or more people.</p>
                                <div className="infobox-btn">
                                    <a href="...">Read More  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms">
                            <div className="infobox-body">
                                <h5 className="infobox-title">
                                    <a href="...">Carbon offsetting</a>
                                </h5>
                                <p className="infobox-excerpt">With GreenPerk, reduce your company’s carbon footprint to zero and get customized reports to make more sustainable travel decisions.</p>
                                <div className="infobox-btn">
                                    <a href="...">Read More  </a>
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
        <section className="faq-area pt-135 pb-125">
            <div className="container">
                <div className="section-internal">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content content-right-spacer">
                                <div className="section-title mb-40">
                                    <div className="section-heading-tag">
                                        <span className="single-heading-tag">Asked Question</span>
                                    </div>
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                                <div className="section-accordion section-accordion-v2">
                                    <div className="accordion" id="accordionFAQ">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Is the Free plan enough for my team?
                                                </button>
                                            </h5>
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionFAQ">
                                                <div className="accordion-body">
                                                    <p>Our travel inventory, 24/7 trip support, and unified spend tracking alone can be enough for some small teams. But for advanced reporting features and in-app travel policies, you&#8217;ll need our Premium plan. If you need more granular control of your spend through budgets or want to embed TravelPerk directly into your business workflows, then our Pro plan is for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                    Can I get multiple travel policies in the Free plan?
                                                </button>
                                            </h5>
                                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionFAQ">
                                                <div className="accordion-body">
                                                    <p>No. If you need to create travel policies to allow travelers to book for themselves within policy, then you will need to upgrade to our Premium plan. Should you need to configure complex, multi-departmental policies, or take advantage of our rates negotiation service, then Pro is the right choice.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Do you really have the world’s largest inventory?
                                                </button>
                                            </h5>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionFAQ">
                                                <div className="accordion-body">
                                                    <p>Yes, and this is facilitated by our state of the art technology. We integrate with all major GDS networks as well as inventory across the internet. This means we have access to everything your travel agent has, plus Expedia, Booking.com, Skyscanner, Airbnb and more. This inventory is fully integrated with our platform, allowing you to search, book, pay, invoice and report all in one place without ever being redirected.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Do Premium and Pro accounts get better inventory?
                                                </button>
                                            </h5>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionFAQ">
                                                <div className="accordion-body">
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
                        <div className="col-lg-6">
                            <div className="section-right-image faq-right-image animate-float-bob-y wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
                                <img src={faqimg} alt="faq im" />
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
                                        <span className="single-heading-tag">Our Newsletter</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Subscribe Our Newsletter <br className="d-none d-md-block" />To Get More Update</h2>
                                </div>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" id="emailAddress" className="form-control" placeholder="Enter Your Email Address" />
                                            <button type="submit" name="submit" value="Go" className="filled-btn">Subscribe Now  </button>
                                        </div>
                                    </form>
                                    <div className="newsletter-notice">
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