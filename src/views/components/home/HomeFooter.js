import React from "react";
import footer_logo from "../../../assets/general-assets/img/logo-kardinal-white.png";

function HomeFooter(){
    return(
        <footer className="footer-area footer-area-v2 bg-royal-blue" >
            <div className="container">
            <div className="footer-area-internal">
            <div className="row">
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="single-footer-widget footer-text-widget">
                    <img src={footer_logo} alt="footer logo" />
                    <p>2a Alara Steet, Sabo Yaba, Lagos Nigeria.<br />wecare@gokardinal.com<br />+234 8025198619</p>
                    {/* <!--<a className="footer-contact-link" href="tel:+01234567899"><i className="fas fa-phone"></i> +012 (345) 678 99</a>--> */}
                    <a href="/contact" className="btn-contact">Contact Us</a>
                </div> 
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="single-footer-widget">
                    <h5 className="widget-title">Solutions</h5>
                    <div className="footer-widget-menu">
                        <ul>
                            <li><a href="/travel">Travel</a></li>
                            <li><a href="/hotel">Hotel</a></li>
                            <li><a href="...">Accomodation</a></li>
                            <li><a href="...">Corporate Hospitality</a></li>
                        </ul>
                    </div>
                </div> 
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="single-footer-widget">
                    <h5 className="widget-title">Resources</h5>
                    <div className="footer-widget-menu">
                        <ul>
                            <li><a href="/guide">Guides</a></li>
                            <li><a href="/webinar">Webinars</a></li>
                            {/* <!--<li><a href="...">Ebooks</a></li>--> */}
                            <li><a href="/blog" target="_blank" rel="noreferrer">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="single-footer-widget">
                    <h5 className="widget-title">Follow On</h5>
                    <div className="footer-social-links">
                        <ul>
                            <li><a href="https://facebook.com/gokardinal"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/gokardinal"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCN_Da94kEH8yvQu5mirZgrQ"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://instagram.com/gokardinal"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://linkedin.com/company/kardinalinc"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; 2021 <a href="/">Kardinal</a> <br/>All Rights Reserved</p>
                    </div>
                </div> 
            </div>
            </div> 
            {/* <!-- /.row --> */}
            </div> 
            {/* <!-- /.footer-area-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </footer> 
    )
}

export default HomeFooter;