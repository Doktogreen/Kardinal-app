import React from "react";
import { 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import home_business from "../../../assets/general-assets/img/home/home_business.png";

function StartHeroSection(){
    return(
        <section className="hero-area hero-v2 bg-contain bg-ocean-blue hero-padding" style={{backgroundImage: "url(../../assets/general-assets/img/hero/hero-map-bg.png)"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content mb-50">
                            <div className="section-title">  
                                <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">End to End Business <span>Trip Management</span> Made Simple.</h2>
                                <p className="wow fadeInUp pb-20" data-wow-delay="0.3s" data-wow-duration="1500ms">See and control everything. A simple dashboard that allows you to manage your bookings, track expenses, generate invoices and reports and get valuable data on your business trip.</p>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form action="demo.html">
                                        <div className="form-group" style={{maxWidth: "450px"}}>
                                            <input style={{height:"75px"}} type="email" name="email" id="emailAddress" className="form-control" placeholder="Work Email Address" />
                                            <button style={{height:"45px", padding:"0px 15px"}} type="submit" name="submit" value="Go" className="filled-btn bg-filled button-radius btn-bordered">Request Demo </button>
                                        </div>
                                    </form>
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
                                <img src={home_business} alt="hero blob" />
                            </div>
                        </div> 
                    {/* /.blob-image-wrapper */}
                    </div>
                </div> 
            {/* /.row */}
            </div> 
         {/* /.container */}
        </section> 
        //  {/* /.hero-area */}
    )
}

export default StartHeroSection;