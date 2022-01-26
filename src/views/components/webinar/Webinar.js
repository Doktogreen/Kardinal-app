import React from "react";
import { 
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import { dotpattern } from "../career/Career";
import { announcement_orange, particlleblue, plane_orange } from "../ebook/Ebook";
import hero_blob_2 from "../../../assets/general-assets/img/hero/hero-blob-2.png";
import webinar_stepup from "../../../assets/general-assets/img/webinar-step-up-your-business.png";
import webinar_improve from "../../../assets/general-assets/img/webinar-improve-employee-engagement.png";

function Webinar(){
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
                                    <h2>The Corporate Live Series</h2>
                                </div>
                                <div className="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInUp"}}>
                                    <ul className="breadcrumb">
                                        <span>The best online resources you can find on corporate travel, hospitality and everything in between. <br />Check out your favourite topics and dig in!</span>
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
        {/* <!--====== Start About Us Area ======--> */}
        <section className="about-us-area pt-130 pb-150">
            <div className="container">
                <div className="row align-items-center align-items-center">
                    <div className="col-lg-7">
                        <div className="blob-image-wrapper content-right-spacer">
                            <div className="blob-shape-wrapper">
                                <img src={particlleblue} alt="blue thumbs up" className="blob-shape blob-shape-1 animate-float-bob-y" />
                                <img src={announcement_orange} alt="orange announcement" className="blob-shape blob-shape-2 animate-float-bob-x" />
                                <img src={plane_orange} alt="orange paper plane" className="blob-shape blob-shape-3 animate-float-bob-x" />
                            </div>
                            <div className="blob-main-image wow fadeInUp" data-wow-delay="00ms" data-wow-duration="2500ms">
                                <img src={hero_blob_2} alt="about blob" />
                            </div>
                        </div> 
                        {/* <!-- /.blob-image-wrapper --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title section-title-ocean-blue">
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">Current Webinar </span>
                            </div>
                            <h2>Leveraging The Right Tool For Your <span>Business</span> Travel  </h2>
                            <div className="section-title-quote">
                                <p><i className="far fa-calendar-alt"></i>Janaury 02, 2022 | 3pm</p>
                            </div>
                            <div className="section-title-description">
                                <p>The Kardinal Corporate Live Series offers a platform for discussing the external services 
                                    that companies require and how sustainable solutions can be applied to them. As part of 
                                    this discussion, we will examine innovative solutions that can be applied to existing ones 
                                    in order to help organizations maximize their output.
                                </p>
                            </div>
                            <a className="btn-secondary-custom-a" href="...">Register</a>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.about-us-area --> */}
        {/* <!--====== End About Us Area ======--> */}
        <section className="blog-and-news-area  bg-magnolia pt-130 pb-100" style={{backgroundImage: `url(${dotpattern})`}} >
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v2">
                        <img className="particle-1 animate-zoom-fade" src={particle_one} alt="particle One" />
                        <img className="particle-2 animate-rotate-me" src={particle_two} alt="particle Two" />
                        <img className="particle-3 animate-float-bob-y" src={particle_three} alt="particle Three" />
                        <img className="particle-4 animate-zoominout" src={particle_four} alt="particle Four" />
                        <img className="particle-5 animate-zoominout" src={particle_five} alt="particle Five" />
                        <img className="particle-7 animate-float-bob-x" src={particle_three} alt="particle Seven" />
                    </div>
                    <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-105 section-title-ocean-blue">
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">Our previous webinars</span>
                            </div>
                            <h3>Catch all the highlights on our corporate live series</h3>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                {/* <!-- Single Blog Post --> */}
                                <div className="col-sm-12 col-lg-4">
                                    <div className="blog-post-item webinar-post-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                                        <div className="post-thumbnail">
                                            <a href="...">
                                                <img src={webinar_stepup} alt="webinar thumbnail one" />
                                            </a>
                                           
                                        </div>
                                        <div className="blog-post-entry-content">
                                            <div className="post-meta-wrapper">
                                                <ul>
                                                    <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i> November 17, 2021 | 11:00 AM</a></li>
                                                    
                                                </ul>
                                            </div>
                                            <h4 className="post-title"><a href="...">Step up your business using bleisure programs with Oluchi Obiejesi and Yyvonne Joseph. </a></h4>
                                                <a className="btn-secondary-custom-a" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=qgggwwTyrMk&t=976s">View Recording</a>
                                            <div className="team-member-bio" style={{marginTop: "20px", textAlign: "right"}}>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="https://open.spotify.com/episode/2XaIc8LTCCfcLPjyO01YHK?si=QvEbgCqqSY2mgEyjGZ_xKA" target="_blank" rel="noreferrer"><i className="fab fa-spotify"></i></a></li>
                                                        <li><a href="https://podcasts.apple.com/ng/podcast/the-corporate-live-series/id1586156609?i=1000542334923" target="_blank" rel="noreferrer"><i className="fa fa-podcast"></i></a></li>
                                                        <li><a href="https://anchor.fm/kardinal/episodes/Improving-Employee-Engagement-and-Experience-with-Modupe-Bankole-and-Temitope-Aina-e173ub0" target="_blank" rel="noreferrer"><i className="fa fa-anchor"></i></a></li>
                                                        <li><a href="https://podcasts.google.com?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82YWQ5MjUxNC9wb2RjYXN0L3Jzcw%3D%3D&episode=ZGQzNTQzMjItYWQyMC00NGFjLTlhMjUtMTUxYmQ3MDlkZjdl" target="_blank" rel="noreferrer"><i className="fa fa-podcast"></i></a></li>
                                                    </ul>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Single Blog Post --> */}
                                <div className="col-sm-12 col-lg-4">
                                    <div className="blog-post-item webinar-post-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                                        <div className="post-thumbnail">
                                            <a href="...">
                                                <img src={webinar_improve} alt="webinar thumbnail one" />
                                            </a>
                                        </div>
                                        <div className="blog-post-entry-content">
                                            <div className="post-meta-wrapper">
                                                <ul>
                                                    <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i> September 8, 2021 | 11:00 AM</a></li>
                                                    
                                                </ul>
                                            </div>
                                            <h4 className="post-title"><a href="...">Improving employee engagement and experience with Modupe Bankole and Temitope Aina</a></h4>
                                            <a className="btn-secondary-custom-a" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=BNjj6Y-4HF0">View Recording</a>
                                            <div className="team-member-bio" style={{marginTop: "20px", textAlign: "right"}}>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="https://open.spotify.com/episode/4TWWzEXa9rtjzSRGzHoFll?si=HCkN_Ea6SAOCgJG80fmLgQ" target="_blank" rel="noreferrer"><i className="fab fa-spotify"></i></a></li>
                                                        <li><a href="https://podcasts.apple.com/ng/podcast/the-corporate-live-series/id1586156609?i=1000535541989" target="_blank" rel="noreferrer"><i className="fa fa-podcast"></i></a></li>
                                                        <li><a href="https://anchor.fm/kardinal/episodes/Improving-Employee-Engagement-and-Experience-with-Modupe-Bankole-and-Temitope-Aina-e173ub0" target="_blank" rel="noreferrer"><i className="fa fa-anchor"></i></a></li>
                                                        <li><a href="https://podcasts.google.com?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82YWQ5MjUxNC9wb2RjYXN0L3Jzcw%3D%3D&episode=NDNlMjMxMzQtY2RlYS00NDRiLThlNjMtMjUzZjJlZDY3Yjky" target="_blank" rel="noreferrer"><i className="fa fa-podcast"></i></a></li>
                                                    </ul>
                                                </div>  
                                            </div>
                                        </div>
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
        {/* <!--====== Start Contact Area ======--> */}
        <section className="contact-area pt-120 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center mb-75">
                            <h2>Get front seats to our next webinar.</h2>
                            <p>Sign up and you will be the first to know when we host our next Corporate Live Series</p>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-box-wrapper">
                                    <div className="single-contact-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
                                        <h4>Ready to work together for better solutions?</h4>
                                        <a href="..." className="filled-btn btn-bordered bg-royal-blue">
                                            Join Us <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="single-contact-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms">
                                        <h4>Request a  <br className="d-none d-xl-block" /> <span>demo </span> here.</h4>
                                        <a href="/demo" className="filled-btn btn-bordered bg-royal-blue">
                                            Request Demo <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-form-area contact-form-area-v2 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1500ms">
                            <div className="contact-respond">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="fullName" placeholder="Your Full Name" name="name" required="" />
                                        <label for="fullName">Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="email" className="form-control" id="yourEmail" placeholder="Email Address" name="email" required="" />
                                        <label for="emailAddress">Email</label>
                                    </div>
                                    {/* <!--<div className="input-group">-->
                                    <!--    <div className="subject-dropdown">-->
                                    <!--        <select className="nice-select" name="subject">-->
                                    <!--            <option>Subject You Like</option>-->
                                    <!--            <option value="knowsomething">About Us</option>-->
                                    <!--            <option value="sayhello">Say Hello</option>-->
                                    <!--            <option value="askme">Ask Me</option>-->
                                    <!--        </select>-->
                                    <!--    </div>-->
                                    <!--</div>-->
                                    <!--<div className="input-group form-textarea">-->
                                    <!--    <textarea className="form-control" id="message" placeholder="Write Message" name="message"></textarea>-->
                                    <!--    <label for="message">Message</label>-->
                                    <!--</div>--> */}
                                    <div className="input-group">
                                        <button type="submit" className="filled-btn">Register <i className="fas fa-arrow-right"></i></button>
                                    </div>
                                </form>
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

export default Webinar;