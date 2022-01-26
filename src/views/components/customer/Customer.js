import React from 'react';
import { 
    newsletter,
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from '../car-rental/CarRental';

function Customer(){
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
                                    <h2 className="customer-page-heading">Hear from our customers that trust us...</h2>
                                </div>
                                {/* <!--<div className="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.2s; animation-name: fadeInUp;">-->
                                <!--    <ul className="breadcrumb">-->
                                <!--        <span>Hear from our customers that trust us.</span>-->
                                <!--    </ul>-->
                                <!--</div>--> */}
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
        <section className="blog-and-news-area pt-120 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title mb-120 section-title-mirage">
                            <h3>See how our customers succeeded in managing their travel more effectively.</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post-item blog-post-item-v2 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInUp"}}>
                            <div className="blog-post-entry-content">
                                <div className="post-meta-wrapper">
                                    <ul>
                                        <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i>June 28, 2021</a></li>
                                    </ul>
                                </div>
                                <h4 className="post-title">Response time is superb. I love the personalization in communicating my concerns. I can reach them anywhere and still get a response in a decent time. </h4>
                                <div className="post-author">
                                    {/* <!--<a href="..." className="post-author-thumb"><img src="assets/img/blog/post-author-1.jpg" alt="post author one"></a>--> */}
                                    <a href="..." className="post-author-name">Anthonia<br />Admin Manager,<br /> JNCI
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post-item blog-post-item-v2 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.3s", animationName: "fadeInUp"}}>
                            <div className="blog-post-entry-content">
                                <div className="post-meta-wrapper">
                                    <ul>
                                        <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i>January 8, 2020</a></li>
                                    </ul>
                                </div>
                                <h4 className="post-title">No travel agency understands entertainment travel like Kardinal. From start to finish, I do not bother at all and that is a great thing.</h4>
                                <div className="post-author">
                                    {/* <!--<a href="..." className="post-author-thumb"><img src="assets/img/blog/post-author-2.jpg" alt="post author two"></a>--> */}
                                    <a href="..." className="post-author-name">Great<br />
                                        Talents Manager,<br /> Bean Creative
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post-item blog-post-item-v2 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.3s", animationName: "fadeInUp"}}>
                            <div className="blog-post-entry-content">
                                <div className="post-meta-wrapper">
                                    <ul>
                                        <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i>January 26, 2021</a></li>
                                    </ul>
                                </div>
                                <h4 className="post-title">With how unpredictable tickets prices are, Kardinal's response time ensures, we (Fidson Healthcare Plc) get the best value at all times.</h4>
                                <h4 className="post-title">The ease to speak with a representative at any time with confidence that we will get a response promptly makes Kardinal platform reliable and transparent.</h4>
                                <div className="post-author">
                                    {/* <!--<a href="..." className="post-author-thumb"><img src="assets/img/blog/post-author-3.jpg" alt="post author three"></a>--> */}
                                    <a href="..." className="post-author-name">Thompson<br />
                                        Protocol, <br />Fidson Healthcare LTD
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5" >
                        <div className="blog-post-item blog-post-item-v2 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.3s", animationName: "fadeInUp"}}>
                            <div className="blog-post-entry-content">
                                <div className="post-meta-wrapper">
                                    <ul>
                                        <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i>January 26, 2021</a></li>
                                    </ul>
                                </div>
                                <h4 className="post-title">Really do not know how we were able to manage our travel before Kardinal. Kardinal has been an absolute life-saver! I like them for a lot of reasons, 
                                    number one being the fact that I can leave my travel itinerary in their hands and confidently go to bed knowing that It’s all sorted, automate all our spending. It is unbelievable.
                                </h4>
                                <div className="post-author">
                                    {/* <!--<a href="..." className="post-author-thumb"><img src="assets/img/blog/post-author-3.jpg" alt="post author three"></a>--> */}
                                    <p className="post-author-name">   Desmond<br /> Operations, <br />Chocolate City Music</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="blog-post-item blog-post-item-v2 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.3s", animationName: "fadeInUp"}}>
                            <div className="blog-post-entry-content">
                                <div className="post-meta-wrapper">
                                    <ul>
                                        <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i>January 26, 2021</a></li>
                                    </ul>
                                </div>
                                <h4 className="post-title">Travel for the entertainment industry can be quite daunting. However, with Kardinal’s platform, I can easily derive all my invoices and send them to clients. I can also use their travel policy that helps keep me in check to avoid mistakes when booking for several artists. </h4>
                                <div className="post-author">
                                    {/* <!--<a href="..." className="post-author-thumb"><img src="assets/img/blog/post-author-3.jpg" alt="post author three"></a>--> */}
                                    <p className="post-author-name">Kema Oyih <br />
                                        The Kuti’s Manager 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="blog-post-item blog-post-item-v2 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.3s", animationName: "fadeInUp"}}>
                            <div className="blog-post-entry-content">
                                <div className="post-meta-wrapper">
                                    <ul>
                                        <li><a href="..." className="post-meta"><i className="far fa-calendar-alt"></i>January 26, 2021</a></li>
                                    </ul>
                                </div>
                                <h4 className="post-title">As a business owner, it can get very difficult searching for my preferred flight option from different websites until I came across Kardinal. Not going to lie, I feel special. It feels like I am their only customer.</h4>
                                <div className="post-author">
                                    {/* <!--<a href="..." className="post-author-thumb"><img src="assets/img/blog/post-author-3.jpg" alt="post author three"></a>--> */}
                                    <a href="..." className="post-author-name"> Ebuka <br />
                                        Creative Designer, <br /> Maliko
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        <section className="subscribe-newsletter-area bg-white-lilac pt-80 pb-80" style={{backgroundImage: `url(${newsletter})`}}>
            <div className="container">
                <div className="section-internal">
                    <div className="section-particle-effect d-none d-md-block section-particle-effect-v4">
                        <img className="particle-1 animate-rotate-me" src={particle_one} alt="particle One" />
                        <img className="particle-2 animate-rotate-me" src={particle_two} alt="particle Two" />
                        <img className="particle-3 animate-zoominout" src={particle_three} alt="particle Three" />
                        <img className="particle-4 animate-float-bob-y" src={particle_four} alt="particle Five" />
                    </div>
                    <div className="row text-center justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="subscribe-newsletter-content">
                                <div className="section-title mb-35">
                                    <div className="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <span className="single-heading-tag">Interested?</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Experience next level business travel made for businesses like yours.</h2>
                                </div>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" id="emailAddress" className="form-control" placeholder="Work Email Address" />
                                            <button type="submit" name="submit" value="Go" className="filled-btn bg-filled button-radius btn-bordered">Request Demo</button>
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
        {/* <!--====== Start Subscribe Newsletter Area ======--> */}
        {/* <!-- /.subscribe-newsletter-area --> */}
        {/* <!--====== End Subscribe Newsletter Area ======--> */}
        
        </>
    )
}

export default Customer;