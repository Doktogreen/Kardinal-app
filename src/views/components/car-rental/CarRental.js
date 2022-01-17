import React from "react";

function CarRental(){
    return(
        <>
        <section className="hero-area hero-v4" style="background-image: url(assets/img/hero/hero-curve-bg.png);">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <div className="section-particle-effect d-none d-lg-block">
                                <img className="particle-1 animate-rotate-me" src="assets/img/particle/particle-2.png" alt="particle One"/>
                                <img className="particle-2 animate-float-bob-y" src="assets/img/particle/particle-3.png" alt="particle Two"/>
                                <img className="particle-3 animate-zoominout" src="assets/img/particle/particle-4.png" alt="particle Three"/>
                                <img className="particle-4 animate-float-bob-y" src="assets/img/particle/particle-5.png" alt="particle Four"/>
                            </div>
                            <div className="section-title section-title-mandy">
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.2s; animation-name: fadeInUp;">The car solution that helps you move faster</h1> 
                                <p className="mb-4">Move faster and easier. We have partnered with leading providers to make your corporate travel car rental the best you have ever gotten. Private, group or special request? Move with us, we’ve got you covered.</p>
                                <div className="section-button-wrapper section-dual-button wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.3s; animation-name: fadeInUp;">
                                    <span>
                                        <a href="demo.html" className="btn1">
                                            Request Demo 
                                        </a>
                                    </span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chartboard-image-wrapper">
                            <img src="assets/img/hero/hero5.jpg" alt="chartboard image one" className="chartboard-image chartboard-image-main wow fadeInDown animate-float-bob-x animated" data-wow-delay="100ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 100ms; animation-name: float-bob-x;"/>
                            <div className="chartboard-app-preview">
                                <img src="assets/img/hero/hero6.jpg" alt="app preview three" className="chartboard-image chartboard-app-preview-3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInDown;"/>
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
        <section className="collaboration-area collaboration-area-v1 pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="app-preview-image oval-gradient content-right-spacer">
                           
                            <div className="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                                <img src="assets/img/app/hero5.jpg" alt="live collaboration" />
                            </div>
                           
                            <div className="app-feature-preview-absolute animate-float-bob-x wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 600ms; animation-name: float-bob-x;">
                                <img src="assets/img/app/hero7.jpg" alt="chat onboard" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title section-title-mirage">
                           
                            <h2>Personalized solutions for car rental.</h2>
                            <div className="section-title-description">
                                <p className="mb-13">With us, you can select from a wide array of cars suited to all purposes; private, exquisite, group, short- and long-term. No matter where you are going, whatever the rental needs may be, and no matter how long it may take, we can provide a single point of contact for all your rental car needs.</p>
                                {/* <!--<p>If you need to add any extras, no problem. Our support team works with our car rental providers to ensure a VIP-level of service. They are on hand 24/7 and have a response time of just 15 seconds – that’s no typo!</p>--> */}
                            </div>
                            {/* <!--<div className="section-button-wrapper">-->
                            <!--    <a className="btn-secondary-custom-a" href="#">Learn More</a>-->
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
        <section className="design-feature-area overflow-hidden bg-alice-blue pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 order-2 order-lg-1">
                        <div className="section-title section-title-mirage">
                           
                            <h2>One platform from which you can move around</h2>
                            <div className="section-title-description">
                                <p>Easily navigate both on the ground and on our dashboard. Our easy to use platform lets you book, manage and automatically reconcile requests all from one place. Kardinal car solution helps you save time by eliminating the hassle of sourcing and booking a car manually.</p>
                            </div>
                            {/* <!--<div className="section-list-style list-style-v2">-->
                            <!--    <p>If you need extras or add-ons, our support team is on hand 24/7 to help coordinate this with our rental providers. This offers an unmatched level of customization for your corporate travel.</p>-->
                            <!--</div>-->
                            <!--<div className="section-button-wrapper">-->
                            <!--    <a className="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                    <div className="col-lg-7 order-1 order-lg-2">
                        <div className="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div className="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 100ms; animation-name: float-bob-y;">
                                <img src="assets/img/app/img6.jpg" alt="connect team one" />
                            </div>
                            <div className="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: float-bob-x;">
                                <img src="assets/img/app/img4.jpg" alt="connect team two" />
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>   

        <section className="collaboration-area collaboration-area-v1 pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="app-preview-image oval-gradient content-right-spacer">
                           
                            <div className="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: fadeInDown;">
                                <img src="assets/img/app/img7.jpg" alt="live collaboration"/>
                            </div>
                           
                            <div className="app-feature-preview-absolute animate-float-bob-x wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 600ms; animation-name: float-bob-x;">
                                <img src="assets/img/app/img1.jpg" alt="chat onboard"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title section-title-mirage">
                           
                            <h2>Quick turn around time for fast-moving businesses</h2>
                            <div className="section-title-description">
                                <p className="mb-13">It does not matter if you have last minute car rental need, hop on Kardinal’s car solution and with just a click, you can select from a pool of available options that fit your budget so you don’t have to miss that last minute business meetings.</p>
                            </div>
                            <div className="section-title-description">
                                <p className="mb-13">Not finding what you need? Our care representative will walk you through your need to ensure you get what you want when you need it.</p>
                            </div>
                            {/* <!--<div className="section-button-wrapper">-->
                            <!--    <a className="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>

        <section className="design-feature-area overflow-hidden bg-alice-blue pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 order-2 order-lg-1">
                        <div className="section-title section-title-mirage">
                           
                            <h2>Intuitive billing</h2>
                            <div className="section-title-description">
                                <p>Simplify your accounting. All costs will be advanced on your behalf. When you ask, a clear collective invoice will be sent or derived from your dashboard and you choose between the different payments of your choice. We ensure you never lose track of your finances. Ever.</p>
                            </div>
                            {/* <!--<div className="section-button-wrapper">-->
                            <!--    <a className="btn-secondary-custom-a" href="#">Learn More</a>-->
                            <!--</div>--> */}
                        </div>
                    </div>
                    <div className="col-lg-7 order-1 order-lg-2">
                        <div className="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                            <div className="app-feature-preview-main animate-float-bob-y wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 100ms; animation-name: float-bob-y;" >
                                <img src="assets/img/app/img8.jpg" alt="connect team one" />
                            </div>
                            <div className="app-feature-preview-absolute animate-float-bob-x wow fadeInDown animated" data-wow-delay="200ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 200ms; animation-name: float-bob-x;" >
                                <img src="assets/img/app/img4.jpg" alt="connect team two" />
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>   

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
                                        <span className="single-heading-tag">Interested?</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Get your business moving swiftly</h2>
                                </div>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" id="emailAddress" className="form-control" placeholder="Work Email Address" />
                                            <button type="submit" name="submit" value="Go" className="filled-btn">Request a Demo</button>
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