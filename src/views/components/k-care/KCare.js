import React from "react";
import hero_map from "../../../assets/general-assets/img/hero/hero-map-bg.png";
import hero_4 from "../../../assets/general-assets/img/hero/hero-map-bg.png";
import side_img1 from "../../../assets/general-assets/img/app/sideimage1.jpg";
import side_img2 from "../../../assets/general-assets/img/app/sideimage2.jpg";
import side_img3 from "../../../assets/general-assets/img/app/sideimage3.jpg";
import simple_cta_bg from "../../../assets/general-assets/img/cta/simple-cta-bg.png";

import { 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import { faqimg } from "../hotel/Hotel";

export let heromap = hero_map;

function KCare(){
    return(
        <>
            <section className="hero-area hero-v2 bg-contain bg-ocean-blue hero-padding" style={{backgrounIimage: `url(${hero_map})`}}>
                <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="hero-content">
                    <div className="section-title">
                        <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">The responsible way to travel. </h2>
                        <p className="wow fadeInUp pb-20" data-wow-delay="0.3s" data-wow-duration="1500ms">We provide comprehensive security, regulatory and safety support at every stage of your journey. Your travellers will be informed well before they board a plane with destination reports and automated risk alerts.</p>
                        <div className="section-button-wrapper section-dual-button wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms">
                            <span>
                                <a href="/k-care" className="btn1">
                                    Speak to an expert
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="blob-image-wrapper">
                    <div className="blob-shape-wrapper">
                        <img src={particle_one} alt="white thumbs up" className="blob-shape blob-shape-1 animate-float-bob-y" />
                        <img src={particle_two} alt="white announcement" className="blob-shape blob-shape-2 animate-float-bob-x" />
                        <img src={particle_three} alt="white paper plane" className="blob-shape blob-shape-3 animate-float-bob-x" />
                    </div>
                    <div className="blob-main-image wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2500ms">
                        <img src={hero_4} alt="hero blob" />
                    </div>
                </div> 
                {/* <!-- /.blob-image-wrapper --> */}
                </div>
                </div> 
                {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.container--> */}
                </section> 
                {/* <!-- /.hero-area --> */}
                {/* <!--====== End Hero Area ======--> */}
                {/* <!--====== Start Collaboration Area 01 ======--> */}
                <section className="collaboration-area collaboration-area-v2 pt-100 pb-100 border-top">
                <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                <div className="app-preview-image text-center text-lg-left content-right-spacer oval-gradient animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <img src={side_img1} alt="promote your app" />
                </div>
                </div>
                <div className="col-lg-5">
                <div className="section-title section-title-mirage">
                    <h2>Information to keep you <span> safe.</span> </h2>
                    <div className="section-title-description">
                        <p className="mb-15">You'll receive an alert from us if there are any restrictions or local requirements that you should be aware of. You'll also be provided with the necessary tools and information for an enjoyable and safe trip.</p>
                    </div>
                    {/* <!--<a className="btn-secondary-custom-a" href="#">Speak to an expert</a>--> */}
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
                <section className="collaboration-area collaboration-area-v2 pt-100 pb-100 border-top">
                <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5">
                <div className="section-title section-title-mirage">
                    <h2>Consular <span> Services</span></h2>
                    <div className="section-title-description">
                        <p className="mb-15">We provide unparalleled support for your travel visa and assist in fulfilling other consulate requirements. Our wide range of assistance in consular and travel regulatory requirements include processing Visa on Arrival, Visa renewal and Extension, Tourist Visas, International passports, Business permits, CERPAC renewals and travels advisory services.</p>
                    </div>
                    {/* <!--<a className="btn-secondary-custom-a" href="#">Learn More</a>--> */}
                </div>
                </div>
                <div className="col-lg-7">
                <div className="app-preview-image content-left-spacer oval-gradient animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <img src={side_img2} alt="promote your app" />
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
                <section className="collaboration-area collaboration-area-v2 pt-100 pb-100 border-top">
                <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                <div className="app-preview-image text-center text-lg-left content-right-spacer oval-gradient animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <img src={side_img3} alt="promote your app" />
                </div>
                </div>
                <div className="col-lg-5">
                <div className="section-title section-title-mirage">
                    <h2>Travel Insurance And Bag Service <span> Offerings</span> </h2>
                    <div className="section-title-description">
                        <p className="mb-15">In partnership with our varied and internationally recognized vendors, we give our clients cover for risks associated with travelling within and outside the country. Our travel insurance package meets the need of our clients’ travel needs, whether for leisure, business, multi-country trip cover or medical purpose. We also offer services that assist passengers in locating bags misdirected or mishandled by any airline.</p>
                    </div>
                    {/* <!--<a className="btn-secondary-custom-a" href="#">Learn More</a>--> */}
                </div>
                </div>
                </div> 
                {/* <!-- /.row --> */}
                </div>
                 {/* <!-- /.container --> */}
                </section> 
                {/* <!-- /.collaboration-area --> */}
                {/* <!--====== End Collaboration Area 03 ======--> */}
                {/* <!--====== Start Simple CTA Area ======--> */}
                <section className="simple-cta-area bg-royal-blue" style={{backgroundImage: `url(${simple_cta_bg})`}}>
                <div className="container">
                <div className="row justify-content-center">
                <div className="col-xl-10">
                <div className="simple-cta-content">
                    <h4>Start prioritizing your employees welfare</h4>
                    <a href="..." className="filled-btn bg-filled button-radius btn-bordered btn-off-white">
                        Sign up now 
                    </a>
                </div>
                </div>
                </div> 
                {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.container --> */}
                </section> 
                {/* <!-- /.simple-cta-area --> */}
                {/* <!--====== End Simple CTA Area ======--> */}
                <section className="faq-area pt-135 pb-125">
                    <div className="container">
                        <div className="section-internal">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="faq-content content-right-spacer">
                                        <div className="section-title mb-40">
                                            {/* <!--<div className="section-heading-tag">-->
                                            <!--    <span className="single-heading-tag">Asked Question</span>-->
                                            <!--</div>--> */}
                                            <h2>Frequently Asked Questions</h2>
                                        </div>
                                        <div className="section-accordion section-accordion-v2">
                                            <div className="accordion" id="accordionFAQ">
                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            What is K-Care?
                                                        </button>
                                                    </h5>
                                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionFAQ">
                                                        <div className="accordion-body">
                                                            <p>Kardinal's duty of care, K- Care, is our way of supporting businesses by providing morally and legally safe working environments for their employees especially on business trips. Business travellers’ duty of care involves providing extensive information on the safety, regulatory and country related tips ensuring their safety and well being while on a trip.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            How Does it work?
                                                        </button>
                                                    </h5>
                                                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionFAQ">
                                                        <div className="accordion-body">
                                                            <p>It is a proactive and responsible way to travel. K-Care provides businesses a wide range of travel solutions. This solution will help you as a business to understand the risks and risks that are associated with a particular trip before embarking on a journey. With this solution, your organization will be able to take advantage of uncertain times by adapting and responding quickly.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            When do I use it?
                                                        </button>
                                                    </h5>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionFAQ">
                                                        <div className="accordion-body">
                                                            <p>You get to use K-Care whenever you wish to travel or be aware of any associated risks for any future travel location.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Is Kcare a free service? 
                                                        </button>
                                                    </h5>
                                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionFAQ">
                                                        <div className="accordion-body">
                                                            <p>Yes, Kcare is a free add-on for every registered business on our platform. They can choose from a wide range of communication including automated alerts, dedicated personnel supports etc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                                                            What are the available channels for K-Care?
                                                        </button>
                                                    </h5>
                                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFour" data-parent="#accordionFAQ">
                                                        <div className="accordion-body">
                                                            <p>K-Care is only available when you sign up</p>
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
                                    <div className="section-right-image faq-right-image animate-float-bob-y wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="2500ms" style={{visibility: "visible", animationDuration: "2500ms", animationDelay:"0ms", animationName: "float-bob-y"}}>
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

export default KCare;