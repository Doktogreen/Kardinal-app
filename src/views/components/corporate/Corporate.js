import React from "react";
import { 
    newsletter,
    particle_five, 
    particle_four, 
    particle_one, 
    particle_three, 
    particle_two 
} from "../car-rental/CarRental";
import { ball, ctabg, curve, dotpattern } from "../career/Career";
import { pic_one } from "../company/Company";

function Corporate(){
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
                            <h2>Production of business events</h2>
                            <p className="mb-4">Join Kardinal and help power growth for a new generation of businesses across Africa.</p>
                            <a href="/register" className="btn1" >
                                See Our Production
                            </a>
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
        <section className="collaboration-area collaboration-area-v2 pt-100 pb-50 border-top">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-lg-12">
                        <div className="section-title text-center" style={{padding: "0 10%"}}>
                           
                            <div className="section-title-description">
                                <p className="mb-5">Kardinal, one of the leading companies in the country in the fields of attractions and event production,provides a wide and comprehensive range of services under one roof to companies, organizations and institutions. The company's staff includes top professionals in the country, all with rich experience of over 20 years in the field of events. Among other things, the company offers a business event production service at the highest level and in perfect accordance with the requirements and needs of the customer</p>
                                <p className="mb-4">"I produced a business event through Kardinal. Everything went quickly and conveniently."</p>
                                <p className="mb-5" style={{textAlign: "center"}}>Jordan</p>
                                <p className="mb-4">Kardinal definitely proved themselves. The level of service we received was excellent, everything went according to time.The employees were satisfied, we received endless compliments</p>
                                <p className="mb-2" style={{textAlign: "center"}}>Tali</p>
                            </div>
                            <h2>Want to get all the details? Talk to us now</h2>
                            <h2 style={{textAlign: "center"}}>Phone: 077-2315716</h2>
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
                            <h2>Production of events for companies in all parts of the country</h2>
                           
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic_one} alt="service thumbnail one" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Production of fun days and formation</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.4s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic_one} alt="service thumbnail two" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Event production for companies</a>
                                </h5>    
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.6s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic_one} alt="service thumbnail three" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Business event &amp; production</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic_one} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Production of parties</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic_one} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Exhibition production</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="single-info-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.8s", animationName: "fadeInUp"}}>
                            <div className="infobox-thumbnail">
                                <a href="...">
                                    <img src={pic_one} alt="service thumbnail four" />
                                </a>
                            </div>
                            <div className="infobox-body ebook-box">
                                <h5 className="infobox-title">
                                    <a href="...">Conference production</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== Start Our Services Area ======--> */}
     <section className="our-services our-services-v1 pt-100 pb-100" style={{backgroundImage: `url(${dotpattern})`}}>
            <div className="container">
                <div className="service-area-internal">
                    <div className="section-particle-effect d-none d-lg-block">
                        <img className="particle-1 animate-zoominout" src={ball} alt="ball shape" />
                        <img className="particle-3 animate-rotate-me" src={curve} alt="curve shape" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-25 text-center section-title-ocean-blue">
                                <div className="section-heading-tag">
                                    <span className="single-heading-tag">Work We Do</span>
                                </div>
                                <h2>Our sample about <br className="d-none d-md-block" />
                                    <span>Production </span> 
                                    we do
                                </h2>
                                <p className="mb-3" >
                                    As a leading company in the field of attractions, effects and event production, we offer 
                                    leading companies and organizations in the Israeli economy a professional event production 
                                    service, among other things, we provide a solution for the following events:
                                </p>
                                <p className="mb-3 justify-content-flex-start">
                                    Fun and formation days all over the country<br />Conference production<br />Exhibition production<br />
                                    Production of parties<br />Production of exhibitions and pavilions<br />Production of fun days and formation
                                </p>
                                <p className="mb-3">
                                    It is important to note that Avnet Plus specializes in private and business event production services, 
                                    the company offers a variety of attractions, gimmicks, sessions for all ages and for any event including 
                                    fun and formation days, bar mitzvahs, bat mitzvahs and special and exciting events for children. We also 
                                    produce birthdays for all ages, and plan a sparkling and memorable party with a variety of attractions and activities
                                </p>
                                <p>
                                    Producing an event for a company begins with formulating an idea, choosing a location, planning activities 
                                    and original and varied activities in accordance with the purpose of the event, and formulating a concept 
                                    for the design of the place. The company staff works jointly with the customer's representatives and 
                                    accompanies them throughout the production stages, from the planning stage, through the actual execution and 
                                    management of the event until its successful completion
                                </p>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- /.row --> */}
                  {/* <!-- /.container-fluid --> */}
                </div> 
                {/* <!-- /.service-area-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        {/* <!--====== End Start Our Services Area ======--> */}
        <section className="cta-area cta-area-v2" style={{backgroundImage: `url(${ctabg})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="cta-content">
                            <div className="section-title section-title-white text-center">
                                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.2s", animationName: "fadeInUp"}}>Production of <br className="d-none d-md-block" /> Kardinal</h2>
                                <div className="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:"0.1s", animationName: "fadeInUp"}}>
                                    <span className="single-heading-tag">Event production is not a trivial matter, there are many event producers in the country so it is worth knowing that Event Plus is one of the leading companies in the 
                                        industry, the company offers a complete solution under one roof and is committed to producing the event according to extremely high standards.In order to produce a perfect and high-quality event 
                                        for the client, we hold an introductory meeting during which we characterize the purpose and type of event to be produced and the characteristics of the participants.After understanding the unique 
                                        needs of the customer we formulate a central idea and pour content for the event.<br /> It is worth noting that we produce both small and large events, each client receives professional service 
                                        and full accompaniment throughout all stages of production.Among other things, we specialize in producing events in the field, in open parks, outdoors, in air-conditioned places, on the beach 
                                        and in recreation and leisure specialties with a swimming pool.We take care of all the equipment needed to produce the event such as shading solutions for summer events, large and luxurious 
                                        event tents with heating and air conditioning solutions, amplification systems, lighting and multimedia, special effects to upgrade the event and experience, food stalls and refreshments and more.  
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
        <section className="collaboration-area collaboration-area-v2 pt-100 pb-50 border-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center" style={{padding: "0 10%"}}>
                            <h2>Organizing a winning and exciting event</h2>
                            <div className="section-title-description">
                                <p className="mb-5">For us, organizing events for companies and organizations, requires us to professionally and 
                                    creatively produce a winning and exciting event that provides perfect enjoyment for the company's employees 
                                    and managers.We are committed to a high-level event production service while meticulously planning to the 
                                    last detail and adapting the concept to the customer's needs. In producing fun days and formation events, 
                                    we take care of a variety of original activities that contribute to the enjoyment of the employees, a 
                                    successful event is also important for the employer who has a cohesive and efficient staff that can successfully 
                                    handle complex and challenging tasks at work.After a fun day the employees return to work refreshed, thank 
                                    the employer who invests in them and work hard to improve the business performance. 
                                </p>
                                <p>Event and exhibition production by Event Plus guarantees the business wide exposure, differentiation from the 
                                    competition, strengthening the brand and conveying marketing messages in a creative way and preventing action.
                                    We produce the exhibition or conference after formulating an original concept and in full coordination with the client. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section>
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
                                    <div className="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <span className="single-heading-tag">Try Kardinal Now</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">For more details please contact us by phone</h2>
                                    <h3 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Leave details on the website and receive an attractive and customized offer</h3>
                                </div>
                                <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" id="emailAddress" className="form-control" placeholder="Enter Your Email Address" />
                                            <button type="submit" name="submit" value="Go" className="filled-btn">Send</button>
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
        {/* <!-- /.subscribe-newsletter-area --></div> */}
        </>
    )
}

export default Corporate;