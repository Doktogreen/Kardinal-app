import React from "react";
import { 
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";

function Contact(){
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
                                <div className="page-title wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInDown"}}>
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2ms", animationName: "fadeInUp"}}>
                                    <ul className="breadcrumb">
                                        <span>We would love to hear from you. Have any questions? Do reach out.</span>
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
        {/* <!--====== Start Contact Area ======--> */}
        <section className="contact-area pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="contact-form-area content-right-spacer">
                            <div className="section-title mb-40">
                                <h2>Have Any Questions ? <br className="d-none d-md-block" /> Let’s Start to Talk</h2>
                            </div>
                            <div className="contact-respond">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="fullName" placeholder="Full Name" name="name" required />
                                        <label for="fullName">Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="email" className="form-control" id="emailAddress" placeholder="Email Address" name="email" required />
                                        <label for="emailAddress">Email</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="subject" placeholder="I Would Like  To Discuss" name="subject" required />
                                        <label for="subject">Subject</label>
                                    </div>
                                    <div className="input-group form-textarea">
                                        <textarea className="form-control" id="message" placeholder="Message" name="message"></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                    <div className="input-group">
                                        <button type="submit" className="filled-btn bg-filled button-radius btn-bordered">Send Message</button>
                                    </div>
                                </form>
                            </div>
                             {/* <!-- /.contact-respond --> */}
                        </div> 
                        {/* <!-- /.contact-form-area --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-area-content content-right-spacer">
                            <div className="info-iconic-boxes">
                                <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                    <div className="info-icon info-icon-gradient-1">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info-body">
                                        <h5>Visit Us</h5>
                                        <p>2a Alara Street, Sabo Yaba <br /> Lagos Nigeria.</p>
                                    </div>
                                </div>
                                <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
                                    <div className="info-icon info-icon-gradient-2">
                                        <i className="fal fa-envelope-open-text"></i>
                                    </div>
                                    <div className="info-body">
                                        <h5>Shoot us a mail</h5>
                                        <p><a href="mailto:wecare@gokardinal.com">wecare@gokardinal.com</a></p>
                                    </div>
                                </div>
                                <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">
                                    <div className="info-icon info-icon-gradient-3">
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="info-body">
                                        <h5>Urgent Call?</h5>
                                        <p><a href="tel:+2348025198619">+234 8025198619</a></p>
                                        <p><a href="tel:+2348026993460">+234 8026993460</a></p>
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
        {/* <!-- /.contact-area --></img> */}
        </>
    )
}

export default Contact;