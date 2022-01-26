import React from "react";
import { 
    newsletter,
    particle_five, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import { faqimg, images } from "../hotel/Hotel";
import img1 from"../../../assets/general-assets/img/app/img1.jpg";
import img3 from "../../../assets/general-assets/img/app/img3.jpg";
import img2 from "../../../assets/general-assets/img/app/img2.jpg";
import hero_one from "../../../assets/general-assets/img/hero/hero1.jpg";
import hero_curve from "../../../assets/general-assets/img/hero/hero-curve-bg.png";

function Travel(){
    return(
        <>
            <section classname="hero-area hero-v4" style={{backgroundImage: `url(${hero_curve})`}}>
            <div classname="container">
                <div classname="row align-items-center">
                    <div classname="col-lg-6">
                        <div classname="hero-content">
                            <div classname="section-particle-effect d-none d-lg-block">
                                <img classname="particle-1 animate-rotate-me" src={particle_two} alt="particle One" />
                                <img classname="particle-2 animate-float-bob-y" src={particle_three} alt="particle Two" />
                                <img classname="particle-3 animate-zoominout" src={particle_three} alt="particle Three" />
                                <img classname="particle-4 animate-float-bob-y" src={particle_five} alt="particle Four" />
                            </div>
                            <div classname="section-title section-title-mandy">
                                <h1 classname="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInUp"}}>Simplified <span>business</span> travelling</h1>
                                <p classname="mb-4">One platform for simplified business travelling. Seamlessly manage your business trips; from booking to payment, invoicing and Reporting. You can view your trips on the go. </p>
                                <div classname="section-button-wrapper section-dual-button wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.3s", animationName: "fadeInUp"}}>
                                    <span>
                                        <a href="demo.html" classname="btn1">
                                            Request Demo 
                                        </a>
                                    </span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div classname="col-lg-6">
                        <div classname="chartboard-image-wrapper">
                            <img src={hero_one} alt="chartboard im one" classname="chartboard-image chartboard-image-main wow fadeInDown animate-float-bob-x animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"100ms", animationName: "float-bob-x"}}/>
                            <div classname="chartboard-app-preview">
                                <img src={img2} alt="app preview three" classname="chartboard-image chartboard-app-preview-3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInUp"}} />
                            </div>
                        </div> 
                        {/* <!-- /.chart-board-image-wrapper --> */}
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- .container --> */}
        </section> 
        {/* <!-- /.pricing-area --> */}
        {/* <!--====== End Pricing Area ======--> */}
        {/* <!--====== Start Our Services Area ======--> */}
        <section classname="collaboration-area collaboration-area-v1 pt-130 pb-130">
            <div classname="container">
                <div classname="row align-items-center">
                    <div classname="col-lg-7">
                        <div classname="app-preview-image oval-gradient content-right-spacer">
                            <div classname="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInDown"}}>
                                <img src={img2} alt="live collaboration" />
                            </div>
                            <div classname="app-feature-preview-absolute animate-float-bob-x wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "float-bob-y"}}>
                                <img src={img1} alt="chat onboard" />
                            </div>
                        </div>
                    </div>
                    <div classname="col-lg-5">
                        <div classname="section-title section-title-mirage">
                            <h2>The number one business traveling tool</h2>
                            <div classname="section-title-description">
                                <p classname="mb-13">We offer the widest range of flight inventory to ensure the best rate for every booking you make. Our dashboard makes it easy for you to keep tabs on all your activities and expenses, right in one place.</p>
                                <p>Enjoy full benefits on your trips as we ensure your travels are cost and value-driven. With us, we negotiate a better deal for all your corporate travels with your preferred airline(s) by going into a tripartite agreement and other loyalty programs designed for corporate travelling.</p>
                            </div>
                            {/* <!--<div classname="section-button-wrapper">-->
                            <!--    <a classname="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.our-services --> */}
        {/* <!--====== End Start Our Services Area ======--> */}
        <section classname="design-feature-area overflow-hidden bg-alice-blue pt-130 pb-130">
            <div classname="container">
                <div classname="row align-items-center">
                    <div classname="col-lg-5 order-2 order-lg-1">
                        <div classname="section-title section-title-mirage">
                            <h2>Invoicing, reporting and insights</h2>
                            <div classname="section-title-description">
                                <p>Stress-free reporting is here. Get customized invoices on your due date and make payments on the spot. Our reporting allows you to easily measure and forecast your travel expenses so you can get rounded insights for your business trips.</p>
                            </div>
                            {/* <!--<div classname="section-button-wrapper">-->
                            <!--    <a classname="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                    <div classname="col-lg-7 order-1 order-lg-2">
                        <div classname="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div classname="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"100ms", animationName: "float-bob-y"}}>
                                <img src={img3} alt="connect team one" />
                            </div>
                            <div classname="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "float-bob-x"}}>
                                <img src={images.img_4} alt="connect team two" />
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>   
        <section classname="collaboration-area collaboration-area-v1 pt-130 pb-130">
            <div classname="container">
                <div classname="row align-items-center">
                    <div classname="col-lg-7">
                        <div classname="app-preview-image oval-gradient content-right-spacer">
                            <div classname="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                                <img src={img2} alt="live collaboration" />
                            </div>
                            <div classname="app-feature-preview-absolute animate-float-bob-x wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "float-bob-x"}}>
                                <img src={images.img_1} alt="chat onboard" />
                            </div>
                        </div>
                    </div>
                    <div classname="col-lg-5">
                        <div classname="section-title section-title-mirage">
                            <h2>A personalized way to pay</h2>
                            <div classname="section-title-description">
                                <p classname="mb-13">Book now, pay later. We offer flexible payment options, so you can plan your business trips on the go and pay the way you prefer. You can save your card and make payments with just a click or add funds to your wallet to reap more rewards.</p>
                            </div>
                            {/* <!--<div classname="section-button-wrapper">-->
                            <!--    <a classname="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        <section classname="design-feature-area overflow-hidden bg-alice-blue pt-130 pb-130">
            <div classname="container">
                <div classname="row align-items-center">
                    <div classname="col-lg-5 order-2 order-lg-1">
                        <div classname="section-title section-title-mirage">
                            <h2>Travel policy designed for your organization</h2>
                            <div classname="section-title-description">
                                <p>Our personalized services guarantee that you have direct contact with a team of dedicated Account Manager and Travel Professionals, they transform your current travel policies into customized travel solutions that help reduce costs and increase returns on investment. Our expertise doesn't end here; we will continue to analyze your travel spending and provide advice on ways to improve it.</p>
                            </div>
                            {/* <!--<div classname="section-button-wrapper">-->
                            <!--    <a classname="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                    <div classname="col-lg-7 order-1 order-lg-2">
                        <div classname="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div classname="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"100ms", animationName: "float-bob-y"}}>
                                <img src={img3} alt="connect team one" />
                            </div>
                            <div classname="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "float-bob-x"}}>
                                <img src={images.img_4} alt="connect team two" />
                            </div>
                        </div>
                    </div>
                </div>
                 {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>   
        <section classname="collaboration-area collaboration-area-v1 pt-130 pb-130">
            <div classname="container">
                <div classname="row align-items-center">
                    <div classname="col-lg-7">
                        <div classname="app-preview-image oval-gradient content-right-spacer">
                            <div classname="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"200ms", animationName: "fadeInDown"}}>
                                <img src={img2} alt="live collaboration" />
                            </div>
                            <div classname="app-feature-preview-absolute animate-float-bob-x wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"600ms", animationName: "fadeInUp"}}>
                                <img src={img1} alt="chat onboard" />
                            </div>
                        </div>
                    </div>
                    <div classname="col-lg-5">
                        <div classname="section-title section-title-mirage">
                            <h2>It’s an all star service</h2>
                            <div classname="section-title-description">
                                <p classname="mb-13">Travel Support at its finest. Our customer care is available to you 24/7. We support you from arranging transportation to and from the airport and any other needs you have along the way.</p>
                            </div>
                            {/* <!--<div classname="section-button-wrapper">-->
                            <!--    <a classname="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        <section classname="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style={{backgroundImage: `url(${newsletter})`}}>
            <div classname="container">
                <div classname="section-internal">
                    <div classname="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img classname="particle-1 animate-rotate-me" src={particle_two} alt="particle One" />
                        <img classname="particle-2 animate-rotate-me" src={particle_one} alt="particle Two" />
                        <img classname="particle-3 animate-zoominout" src={particle_three} alt="particle Three" />
                        <img classname="particle-4 animate-float-bob-y" src={particle_five} alt="particle Five" />
                    </div>
                    <div classname="row text-center justify-content-center">
                        <div classname="col-xl-7 col-lg-10">
                            <div classname="subscribe-newsletter-content">
                                <div classname="section-title mb-35">
                                    <div classname="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <span classname="single-heading-tag">Interested?</span>
                                    </div>
                                    <h2 classname="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Get full control on your <br classname="d-none d-md-block" />business travel.</h2>
                                </div>
                                <div classname="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div classname="form-group">
                                            <input type="email" name="email" id="emailAddress" classname="form-control" placeholder="Work Email Address" />
                                            <button type="submit" name="submit" value="Go" classname="filled-btn bg-filled button-radius btn-bordered">Request Demo</button>
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
        {/* <!--====== Start FAQ Area ======--> */}
        <section classname="faq-area pt-135 pb-125">
            <div classname="container">
                <div classname="section-internal">
                    <div classname="row align-items-center">
                        <div classname="col-lg-6">
                            <div classname="faq-content content-right-spacer">
                                <div classname="section-title mb-40">
                                    {/* <!--<div classname="section-heading-tag">-->
                                    <!--    <span classname="single-heading-tag">Asked Question</span>-->
                                    <!--</div>--> */}
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                                <div classname="section-accordion section-accordion-v2">
                                    <div classname="accordion" id="accordionFAQ">
                                        <div classname="accordion-item">
                                            <h5 classname="accordion-header" id="headingOne">
                                                <button classname="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Does the platform make booking a business trip easy?
                                                </button>
                                            </h5>
                                            <div id="collapseOne" classname="collapse" aria-labelledby="headingOne" data-parent="#accordionFAQ">
                                                <div classname="accordion-body">
                                                    <p>It is as simple as using your favourite banking app. We have provided everything in one simple dashboard. Book your trips and automate reconciliation easily.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div classname="accordion-item">
                                            <h5 classname="accordion-header" id="headingTwo">
                                                <button classname="accordion-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                    Do you have a large inventory?
                                                </button>
                                            </h5>
                                            <div id="collapseTwo" classname="collapse show" aria-labelledby="headingTwo" data-parent="#accordionFAQ">
                                                <div classname="accordion-body">
                                                    <p>It’s the largest inventory you can find for all your needs. Does not matter if your request is international or local, we have combined all the available GDS for you to choose your preferred option on flights, hotels and car services.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div classname="accordion-item">
                                            <h5 classname="accordion-header" id="headingThree">
                                                <button classname="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Can I set a travel policy for my organization?
                                                </button>
                                            </h5>
                                            <div id="collapseThree" classname="collapse" aria-labelledby="headingThree" data-parent="#accordionFAQ">
                                                <div classname="accordion-body">
                                                    <p>Yes, you can set a policy to guide your bookings and budget. This can also be automated in your simple dashboard so you can easily select the option that fit the different traveling staff.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div classname="accordion-item">
                                            <h5 classname="accordion-header" id="headingFour">
                                                <button classname="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Can your platform accommodate group bookings?
                                                </button>
                                            </h5>
                                            <div id="collapseFour" classname="collapse" aria-labelledby="headingFour" data-parent="#accordionFAQ">
                                                <div classname="accordion-body">
                                                    <p>Sure. Bookings for groups are available in addition to our regular bookings. Our travel consultant will work with you and ensure your travel arrangements and accommodation as well as group discounts can be arranged</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    {/* <!-- /.accordion --> */}
                                </div> 
                                {/* <!-- /.section-accordion --> */}
                            </div>
                        </div>
                        <div classname="col-lg-6">
                            <div classname="section-right-image faq-right-image animate-float-bob-y wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
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
        </>
    )
}

export default Travel;