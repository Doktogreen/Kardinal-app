import React from "react";
// import team_one from "../../../assets/general-assets/img/team/team1.jpg";
import { 
    newsletter, 
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import { dotpattern } from "../career/Career";
import { members } from "../company/Company";

function Team(){
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
                            <div className="section-title mb-25 text-center">
                            <h2>Teams at Kardinal</h2>
                            <p className="mb-4">We Live We Do .</p>
                            <p className="mb-4">We are a team that champions bringing together as many unique perspectives as possible to solve brands' biggest challenges.</p>
                        </div>
                        </div>
                    </div> 
                    {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.section-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
        {/* <!-- /.breadcrumb-area --> */}
        {/* <!--====== End Breadcrumb Area ======--> */}
        <section className="team-skills-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="team-details-images content-right-spacer">
                            <div className="team-details-thumbnail team-details-thumbnail-main animate-float-bob-y wow fadeInDown" data-wow-delay="100ms" data-wow-duration="2000ms" style={{visibility: "visible", animationDuration: "2000ms", animationDelay: "100ms", animationName: "float-bob-y"}}>
                                <img src=".." alt="team skills thumbnail one" />
                            </div>
                        </div> 
                    </div> 
                    <div className="col-xl-5 col-lg-6">
                        <div className="team-details-content">
                            <div className="section-title">
                                <div className="section-heading-tag">
                                </div>
                                <h2>THE SUM OF OUR PERSPECTIVES</h2>
                                <div className="section-title-description">
                                    <p>That’s why everyone at Translation has a major (what it says on our email signatures) and a minor (our secret superpowers). We are creators, collectors, historians, and more. And in everything we do, we allow our expert fluency across different pockets of culture to inform the boardroom and elevate the work. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== Start Our Services Area ======--> */}
        <section className="our-team-area our-team-area-v2 pt-130 pb-100" style={{backgroundImage: `url(${dotpattern})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-70">
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">Creative Team</span>
                            </div>
                            <h2>We Have Professional <br className="d-none d-md-block" /> Creative Team</h2>
                        </div>
                    </div> 
                    {/* <!-- /.col-lg-8 --> */}
                </div> 
                {/* <!-- /.row --> */}
                <div className="team-member-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_1} alt="team member one" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Chaucer Barnes
                                    </h5>
                                    <p className="team-member-role">
                                        Chief Marketing Officer
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"100ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_2} alt="team member two" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Shanice Graves
                                    </h5>
                                    <p className="team-member-role">
                                        Head of Ideas
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"20ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_3} alt="team member three" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Ann Wool
                                    </h5>
                                    <p className="team-member-role">
                                        President, Translation LLC
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"300ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_4} alt="team member four" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Susanna Swartley
                                    </h5>
                                    <p className="team-member-role">
                                        Head of Client Services
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"400ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_5} alt="team member five" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Sandi Preston
                                    </h5>
                                    <p className="team-member-role">
                                        Chief Strategy Officer
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"500ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_6} alt="team member six" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Alison Hill
                                    </h5>
                                    <p className="team-member-role">
                                        Head of Production
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"600ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_7} alt="team member seven" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        James McNamara
                                    </h5>
                                    <p className="team-member-role">
                                        EVP Operations
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"700ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_8} alt="team member eight" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Jason Campbell
                                    </h5>
                                    <p className="team-member-role">
                                        Executive Creative Director
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"700ms", animationName: "fadeInUp"}}>
                                <div className="team-member-thumb">
                                    <img src={members.member_9} alt="team member eight" />
                                </div>
                                <div className="team-member-bio">
                                    <h5 className="team-member-name">
                                        Joel Rodriguez
                                    </h5>
                                    <p className="team-member-role">
                                        Group Context Director
                                    </p>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="..."><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="..."><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="..."><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="..."><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.team-member-content --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== End Start Our Services Area ======--> */}
        {/* <!--====== Start Subscribe Newsletter Area ======--> */}
        <section className="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style={{backgroundImage: `url(${newsletter})`}}>
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img className="particle-1 animate-rotate-me" src={particle_two} alt="particle One" />
                        <img className="particle-2 animate-rotate-me" src={particle_one} alt="particle Two" />
                        <img className="particle-3 animate-zoominout" src={particle_four} alt="particle Three" />
                        <img className="particle-4 animate-float-bob-y" src={particle_five} alt="particle Five" />
                    </div>
                    <div className="row text-center justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="subscribe-newsletter-content">
                                <div className="section-title mb-35">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Get In Touch<br className="d-none d-md-block" />212.299.5505</h2>
                                </div>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" id="emailAddress" className="form-control" placeholder="Got talent? Show us what you got." />
                                            <button type="submit" name="submit" value="Go" className="filled-btn">Apply Here</button>
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

export default Team;