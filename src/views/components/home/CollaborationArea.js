import React from "react";
import illustration_inventory from "../../../assets/general-assets/img/illustration-Inventory-male.png";
import illustration_flexible_payment from "../../../assets/general-assets/img/illustration-flexible-payment.png";
import illustration_support_pay from "../../../assets/general-assets/img/illustration-support-you-need.png"

function CollaborationArea(){
    return(
        <>
        <section className="collaboration-area collaboration-area-v2 pt-50 pb-50 border-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="app-preview-image text-center text-lg-left content-right-spacer oval-gradient animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <img src={illustration_inventory} alt="promote your app" />
                        </div>
                        </div>
                        <div className="col-lg-5">
                        <div className="section-title section-title-mirage">
                            {/* <!--<div className="section-heading-tag">-->
                            <!--    <span className="single-heading-tag">Inventory</span>-->
                            <!--</div>--> */}
                            <h2>Largest <span>Inventory</span> </h2>
                            <div className="section-title-description">
                                <p className="mb-15">The largest inventory you can find. 
                                Plan a trip, rent a car, arrange accommodation, choose a 
                                corporate hospitality package, and choose the option 
                                that best fits your budget.</p>
                            </div>
                            <a className="btn-secondary-custom-a" href="travel.html">Learn More</a>
                        </div>
                        </div>
                        </div> 
                        {/* <!-- /.row --> */}
                        </div> 
                        {/* <!-- /.container --> */}
                        </section> 
                        {/* <!-- /.collaboration-area --> */}
                        {/* <!--====== End Collaboration Area 01 ======--> */}
                        {/* <!--====== Start Collaboration Area 02 ======--> */}
                        <section className="collaboration-area collaboration-area-v2 pt-50 pb-50 border-top">
                        <div className="container">
                        <div className="row align-items-center">
                        
                        <div className="col-lg-5">
                        <div className="section-title section-title-mirage">
                            {/* <!--<div className="section-heading-tag">-->
                            <!--    <span className="single-heading-tag">Payment</span>-->
                            <!--</div>--> */}
                            <h2>Flexible trips. <span>Flexible</span> Payment</h2>
                            <div className="section-title-description">
                                <p className="mb-15">Payment approval taking too long? Plan your business trip from the palm of your hand and pay using a plan that suits you. You can save your card and make payments with just a click, add funds to your wallet to reap more rewards or sign up to enjoy our tailored credit technology for businesses.</p>
                            </div>
                            <a className="btn-secondary-custom-a" href="demo.html">Learn More</a>
                        </div>
                        </div>
                        <div className="col-lg-7">
                        <div className="app-preview-image content-left-spacer oval-gradient animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <img src={illustration_flexible_payment} alt="promote your app" />
                        </div>
                        </div>
                        </div> 
                        {/* <!-- /.row --> */}
                        </div> 
                        {/* <!-- /.container --> */}
                        </section> 
                        {/* <!-- /.collaboration-area --> */}
                        {/* <!--====== End Collaboration Area 02 ======--> */}
                        {/* <!--====== Start Collaboration Area 03 ======--> */}
                        <section className="collaboration-area collaboration-area-v2 pt-50 pb-50 border-top">
                        <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-7">
                        <div className="app-preview-image text-center text-lg-left content-right-spacer oval-gradient animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <img src={illustration_support_pay} alt="promote your app" />
                        </div>
                        </div>
                        <div className="col-lg-5">
                        <div className="section-title section-title-mirage">
                            {/* <!--<div className="section-heading-tag">-->
                            <!--    <span className="single-heading-tag">Support</span>-->
                            <!--</div>--> */}
                            <h2>Support whenever you <span>need it</span> </h2>
                            <div className="section-title-description">
                                <p className="mb-15">We exist for you. Get support on any inquiry in less than 3 minutes. Our customer success representatives are ready to solve all your problems 24/7.</p>
                            </div>
                            <a className="btn-secondary-custom-a" href="https://wa.link/ilzrkl">Chat Us</a>
                        </div>
                    </div>
                </div> 
            {/* <!-- /.row --> */}
            </div> 
        {/* <!-- /.container --> */}
        </section> 
        {/* // <!-- /.collaboration-area --> */}
        </>
    )
}

export default CollaborationArea;