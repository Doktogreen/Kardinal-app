import React from "react";
import particle1 from "../../../assets/general-assets/img/particle/particle-1.png";
import particle2 from "../../../assets/general-assets/img/particle/particle-2.png";
import particle3 from "../../../assets/general-assets/img/particle/particle-3.png";
import particle4 from "../../../assets/general-assets/img/particle/particle-4.png";
import particle5 from "../../../assets/general-assets/img/particle/particle-5.png";
import hero_curve from "../../../assets/general-assets/img/hero/hero-curve-bg.png";
import car_1 from "../../../assets/general-assets/img/car/car_1.png";
import img_1 from "../../../assets/general-assets/img/car/img_1.png";
import car_2 from "../../../assets/general-assets/img/car/car_2.png";
import img_2 from "../../../assets/general-assets/img/car/img_2.png";
import img_3 from "../../../assets/general-assets/img/car/img_3.png";
// import car_3 from "../../../assets/general-assets/img/car/img_3.png";
import img_4 from "../../../assets/general-assets/img/car/img_4.png";
import car_4 from "../../../assets/general-assets/img/car/car_4.png";
import img_5 from "../../../assets/general-assets/img/car/img_5.png";
import car_5 from "../../../assets/general-assets/img/car/car_5.png";
import newsletter_bg from "../../../assets/general-assets/img/particle/newsletter-bg.png";

export let particle_one = particle1;
export let particle_two = particle2;
export let particle_three = particle3;
export let particle_four = particle4;
export let particle_five = particle5;
export let newsletter = newsletter_bg;

function CarRental(){
    return(
        <>
        <section class="hero-area hero-v4" style={{backgroundImage: `url(${hero_curve})`}}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="hero-content">
                            <div class="section-particle-effect d-none d-lg-block">
                                <img class="particle-1 animate-rotate-me" src={particle1} alt="particle One" />
                                <img class="particle-2 animate-float-bob-y" src={particle2} alt="particle Two" />
                                <img class="particle-3 animate-zoominout" src={particle4} alt="particle Three" />
                                <img class="particle-4 animate-float-bob-y" src={particle5} alt="particle Four" />
                            </div>
                            <div class="section-title section-title-mandy">
                                <h1 class="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0.2s", animationName: "fadeInUp"}}>The car solution that helps you move faster</h1> 
                                <p class="mb-4">Move faster and easier. We have partnered with leading providers to make your corporate travel car rental the best you have ever gotten. Private, group or special request? Move with us, we’ve got you covered.</p>
                                <div class="section-button-wrapper section-dual-button wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0.3s", animationName: "fadeInUp"}}>
                                    <span>
                                        <a href="https://forms.gle/1tdHpLzWG2brgz5k7" target="_blank" rel="noreferrer" class="btn1">
                                            Request Demo 
                                        </a>
                                    </span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="chartboard-image-wrapper">
                            <img src={img_1} alt="chartboard im one" class="chartboard-image chartboard-image-main wow fadeInDown animate-float-bob-x animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "float-bob-x"}} />
                            <div class="chartboard-app-preview">
                                <img src={car_1} alt="app preview three" class="chartboard-image chartboard-app-preview-3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "300ms", animationName: "fadeInDown", maxWidth: "300px"}} />
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
        <section class="collaboration-area collaboration-area-v1 pt-130 pb-130">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="app-preview-image oval-gradient content-right-spacer">
                           
                            <div class="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInDown"}}>
                                <img src={img_2} alt="live collaboration" />
                            </div>
                           
                            <div class="app-feature-preview-absolute animate-float-bob-x wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "600ms", animationName: "float-bob-x", maxWidth: "300px"}}>
                                <img src={car_2} alt="chat onboard" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="section-title section-title-mirage">
                           
                            <h2>Personalized solutions for car rental.</h2>
                            <div class="section-title-description">
                                <p class="mb-13">With us, you can select from a wide array of cars suited to all purposes; private, exquisite, group, short- and long-term. No matter where you are going, whatever the rental needs may be, and no matter how long it may take, we can provide a single point of contact for all your rental car needs.</p>
                                {/* <!--<p>If you need to add any extras, no problem. Our support team works with our car rental providers to ensure a VIP-level of service. They are on hand 24/7 and have a response time of just 15 seconds – that’s no typo!</p>--> */}
                            </div>
                            {/* <!--<div class="section-button-wrapper">-->
                            <!--    <a class="btn-secondary-custom-a" href="#">Learn More</a>-->
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
        <section class="design-feature-area overflow-hidden bg-alice-blue pt-130 pb-130">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 order-2 order-lg-1">
                        <div class="section-title section-title-mirage">
                           
                            <h2>One platform from which you can move around</h2>
                            <div class="section-title-description">
                                <p>Easily navigate both on the ground and on our dashboard. Our easy to use platform lets you book, manage and automatically reconcile requests all from one place. Kardinal car solution helps you save time by eliminating the hassle of sourcing and booking a car manually.</p>
                            </div>
                            {/* <!--<div class="section-list-style list-style-v2">-->
                            <!--    <p>If you need extras or add-ons, our support team is on hand 24/7 to help coordinate this with our rental providers. This offers an unmatched level of customization for your corporate travel.</p>-->
                            <!--</div>-->
                            <!--<div class="section-button-wrapper">-->
                            <!--    <a class="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                    <div class="col-lg-7 order-1 order-lg-2">
                        <div class="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div class="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "float-bob-y"}}>
                                <img src={img_3} alt="connect team one" />
                            </div>
                            {/* <!--<div class="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: float-bob-x;">-->
                            <!--    <img src="assets/img/car/car_3.png" alt="connect team two">-->
                            <!--</div>--> */}
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>   

        <section class="collaboration-area collaboration-area-v1 pt-130 pb-130">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="app-preview-image oval-gradient content-right-spacer">
                           
                            <div class="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "fadeInDown"}}>
                                <img src={img_4} alt="live collaboration" />
                            </div>
                           
                            <div class="app-feature-preview-absolute animate-float-bob-x wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "600ms", animationName: "float-bob-x", maxWidth: "350px"}}>
                                <img src={car_4} alt="chat onboard" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="section-title section-title-mirage">
                           
                            <h2>Quick turn around time for fast-moving businesses</h2>
                            <div class="section-title-description">
                                <p class="mb-13">It does not matter if you have last minute car rental need, hop on Kardinal’s car solution and with just a click, you can select from a pool of available options that fit your budget so you don’t have to miss that last minute business meetings.</p>
                            </div>
                            <div class="section-title-description">
                                <p class="mb-13">Not finding what you need? Our care representative will walk you through your need to ensure you get what you want when you need it.</p>
                            </div>
                            {/* <!--<div class="section-button-wrapper">-->
                            <!--    <a class="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                </div>
                 {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>

        <section class="design-feature-area overflow-hidden bg-alice-blue pt-130 pb-130">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 order-2 order-lg-1">
                        <div class="section-title section-title-mirage">
                           
                            <h2>Intuitive billing</h2>
                            <div class="section-title-description">
                                <p>Simplify your accounting. All costs will be advanced on your behalf. When you ask, a clear collective invoice will be sent or derived from your dashboard and you choose between the different payments of your choice. We ensure you never lose track of your finances. Ever.</p>
                            </div>
                            {/* <!--<div class="section-button-wrapper">-->
                            <!--    <a class="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                    <div class="col-lg-7 order-1 order-lg-2">
                        <div class="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div class="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "float-bob-y"}}>
                                <img src={img_5} alt="connect team one" />
                            </div>
                            <div class="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms", animationName: "float-bob-x", maxWidth: "300px"}}>
                                <img src={car_5} alt="connect team two" />
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>   

        <section class="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style={{backgroundImage: `url(${newsletter_bg})`}}>
            <div class="container">
                <div class="section-internal">
                    <div class="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img class="particle-1 animate-rotate-me" src={particle2} alt="particle One" />
                        <img class="particle-2 animate-rotate-me" src={particle1} alt="particle Two" />
                        <img class="particle-3 animate-zoominout" src={particle4} alt="particle Three" />
                        <img class="particle-4 animate-float-bob-y" src={particle5} alt="particle Five" />
                    </div>
                    <div class="row text-center justify-content-center">
                        <div class="col-xl-7 col-lg-10">
                            <div class="subscribe-newsletter-content">
                                <div class="section-title mb-35">
                                    <div class="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <span class="single-heading-tag">Interested?</span>
                                    </div>
                                    <h2 class="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Get your business moving swiftly</h2>
                                </div>
                                <div class="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div class="form-group">
                                            <input type="email" name="email" id="emailAddress" class="form-control" placeholder="Work Email Address" />
                                            <button type="submit" name="submit" value="Go" class="filled-btn">Request a Demo</button>
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

export default CarRental;