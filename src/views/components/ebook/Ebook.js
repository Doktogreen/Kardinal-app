import React from "react";
import { 
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import particle_blue from "../../../assets/general-assets/img/particle/thumbs-up-particle-blue.png";
import announcement_particle_orange from "../../../assets/general-assets/img/particle/announcement-particle-orange.png";
import plane_particle_orange from "../../../assets/general-assets/img/particle/paper-plane-particle-orange.png";
import heroblob from "../../../assets/general-assets/img/hero/heroblob.jpg";
import pic from "../../../assets/general-assets/img/services/pic.jpg";

export let particlleblue = particle_blue;
export let announcement_orange = announcement_particle_orange;
export let plane_orange = plane_particle_orange;
export let hero_blob = heroblob;
export let pics = pic;

function Ebook(){
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
                                <div className="page-title wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "2500ms", animationDelay:"0.1s", animationName: "fadeInDown"}}>
                                    <h1>Business Travel Ebooks</h1>
                                </div>
                                <div className="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "2500ms", animationDelay:"0.2s", animationName: "fadeInUp"}}>
                                    <ul className="breadcrumb">
                                        <span>Resources library</span>
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
        <section className="about-us-area pt-130 pb-150">
            <div className="container">
                <div className="row align-items-center align-items-center">
                    <div className="col-lg-7">
                        <div className="blob-image-wrapper content-right-spacer">
                            <div className="blob-shape-wrapper">
                                <img src={particle_blue} alt="blue thumbs up" className="blob-shape blob-shape-1 animate-float-bob-y" />
                                <img src={announcement_particle_orange} alt="orange announcement" className="blob-shape blob-shape-2 animate-float-bob-x" />
                                <img src={plane_particle_orange} alt="orange paper plane" className="blob-shape blob-shape-3 animate-float-bob-x" />
                            </div>
                            <div className="blob-main-image wow fadeInUp" data-wow-delay="00ms" data-wow-duration="2500ms" style={{visibility: "visible", animationDuration: "2500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                                <img src={heroblob} alt="about blob" />
                            </div>
                        </div> 
                        {/* <!-- /.blob-image-wrapper --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title section-title-ocean-blue">
                            <h2>How to manage business travel post-COVID-19
                            </h2>
                            <div className="section-title-description">
                                <p>This e-book provides you with information and guidance as to how you can move on from these challenging times.</p>
                            </div>
                              <a className="btn-secondary-custom-a" href="...">Download Ebook</a>
                        </div>
                    </div>
          
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        <section className="our-services our-services-v2 bg-white-lilac pt-122 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-70">
                            <h2>All Ebooks</h2>
                            <div className="section-title-description">
                                <p>Explore by role </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> <!-- /.row --> */}
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail one" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Travel risk assessment template</a>
                                </h5>
                                <div className="infobox-btn">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.4s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail two" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">How admins and assistants should manage travel post-COVID-19</a>
                                </h5>
                                <div className="infobox-btn">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.6s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail three" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">How to automate Travel & Expense Management</a>
                                </h5>
                               
                                <div className="infobox-btn">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">How to keep your travelers safe on business trips</a>
                                </h5>
                               
                                <div className="infobox-btn">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Checklist: How to reclaim VAT on hotels</a>
                                </h5>
                                <div className="infobox-btn">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">How to use tech solutions to optimize travel spend</a>
                                </h5>
                                <div className="infobox-btn">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">How travel management tech saves your company money</a>
                                </h5>
                                <div className="infobox-btn">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">How to achieve 100% travel policy compliance</a>
                                </h5>
                                <div className="infobox-btn header-right">
                                    <p className="infobox-excerpt">Author Name </p>
                                </div>
                                <div className="infobox-btn">
                                    <a href="...">Download Ebook </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        </>
    )
}

export default Ebook;