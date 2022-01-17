import React from "react";
import CollaborationArea from "./CollaborationArea";
import FAQ from "./FAQ";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeLoader from "./HomeLoader";
import HomeSearch from "./HomeSearch";
import ServicesArea from "./ServicesArea";
import SimpleCTA from "./SimpleCTA";
import StartHeroSection from "./StartHeroSection";
import TeamServiceArea from "./TeamServiceArea";
import Testimonial from "./Testimonial";

function Home(){
    return(
        <body>
        {/* ======= Start Preloader =======*/}
            <HomeLoader />
        {/* ======= End Preloader ======= */}

        {/* ====== Start Search From ====== */}
            <HomeSearch />
        {/* ====== End Search From ====== */}

        {/* ====== Start Header Area ====== */}
            <HomeHeader />
        {/* ====== End Header Area ====== */}

        {/* ====== Start Hero Area ====== */}
            <StartHeroSection />
        {/* ====== End Hero Area ====== */}
        
        {/* ====== Start Our Services Area ====== */}
            <TeamServiceArea />
        {/* <!--====== End Our Services Area ======--> */}

        {/* ====== Start Services Area ====== */}
        {/* <!--<section className="our-services border-top-blue pt-130 pb-90">-->
        <!--<div className="container">-->
        
        <!--<div className="our-services-content-wrapper">-->
        <!--<div className="row">-->
        <!--<div className="col-xl-4 col-lg-4 col-md-12">-->
        <!--    <div className="single-iconic-box iconic-box-v4 wow fadeInDown service-box-home" data-wow-delay="0.1s" data-wow-duration="2000ms">-->
        <!--        <div className="iconic-box-icon iconic-box-gradient-primary">-->
        <!--            <i className="far fa-user-chart"></i>-->
        <!--        </div>-->
        <!--        <div className="iconic-box-body">-->
        <!--            <h5 className="iconic-box-title">Put safety first</h5>-->
        <!--            <p className="iconic-box-content">-->
        <!--                Stay up to date on all the latest travel safety information and restrictions. <b>Receive real-time updates before and during your trip.</b> Simply put, a must-have for any business trip these days.-->
        <!--            </p>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</div> -->
        <!--<div className="col-xl-4 col-lg-4 col-md-12">-->
        <!--    <div className="single-iconic-box iconic-box-v4 wow fadeInDown service-box-home" data-wow-delay="0.3s" data-wow-duration="2000ms">-->
        <!--        <div className="iconic-box-icon iconic-box-gradient-primary">-->
        <!--            <i className="far fa-compass"></i>-->
        <!--        </div>-->
        <!--        <div className="iconic-box-body">-->
        <!--            <h5 className="iconic-box-title">Go fully flexible</h5>-->
        <!--            <p className="iconic-box-content">-->
        <!--                Forget about expensive flexible rates. With TravelPerk, you can change or cancel any aspect of your trip at the click of a button! Get at least <b>80% of your money back</b>—no questions asked.-->
        <!--            </p>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</div> -->
        <!--<div className="col-xl-4 col-lg-4 col-md-12">-->
        <!--    <div className="single-iconic-box iconic-box-v4 wow fadeInDown service-box-home" data-wow-delay="0.5s" data-wow-duration="2000ms">-->
        <!--        <div className="iconic-box-icon iconic-box-gradient-primary">-->
        <!--            <i className="far fa-squirrel"></i>-->
        <!--        </div>-->
        <!--        <div className="iconic-box-body">-->
        <!--            <h5 className="iconic-box-title">Offset your carbon footprint</h5>-->
        <!--            <p className="iconic-box-content">-->
        <!--                Reduce your carbon footprint by <b>offsetting 100% of your business travel carbon emissions</b>. Don't just be your company's hero—be your planet's hero! Get real-time, actionable information on your company's carbon impact.-->
        <!--            </p>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</div> -->
        <!--</div> -->
        <!--</div> -->
        <!--</div> -->
        <!--</section> --> */}
        {/* <!--====== End Services Area ======--> */}
            
        {/* <!--====== Start Services Area ======--> */}
            <ServicesArea />
        {/* <!--====== End Services Area ======--> */}
        {/* <!--====== Start Simple CTA Area ======--> */}
            <SimpleCTA />
        {/* <!--====== Start Collaboration Area 01 ======--> */}
            <CollaborationArea />
        {/* <!--====== End Collaboration Area 03 ======--> */}
        {/* <!--====== Start FAQ Area ======--> */}
            <FAQ />
        {/* <!--====== End FAQ Area ======--> */}
        
        {/* <!--====== Start Testimonial Area ======--> */}
            <Testimonial />
        {/* <!-- /.cta-area --> */}
        {/* <!--====== End Call to Action Area ======--> */}
        {/* <!--====== Start Footer Area ======--> */}
            <HomeFooter />
        {/* <!-- /.footer-area --> */}
        {/* <!--====== End Footer Area ======--> */}
        {/* <!--======= Scroll To Top =======--> */}
        <a href="..." data-target="html" className="scroll-to-target scroll-to-top">
            <i className="fa fa-angle-up"></i>
        </a>
        {/* <!--====== Optional Javascript ======--> */}
        </body>
    )
}

export default Home;