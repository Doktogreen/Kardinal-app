import React from "react";
import car from "../../../assets/general-assets/img/icons/car.png";
import kardinal_logo from "../../../assets/general-assets/img/kardinal.png";
import travel from "../../../assets/general-assets/img/icons/travel.png";
import hotel from "../../../assets/general-assets/img/icons/hotel.png";
import k_care from "../../../assets/general-assets/img/icons/k-care.png";

function HomeHeader(){
    return(
        <header className="header-area header-v1">
        <div className="header-navigation">
        <div className="container-fluid">
        <div className="row align-items-center">
        {/* <!-- Brand Logo and Language Selection Dropdown --> */}
        <div className="col-xl-2 col-lg-4 col-md-5 col-8">
            <div className="site-branding-and-language-selection">
                <div className="brand-logo">
                    <a href="/">
                        <img src={kardinal_logo} alt="logo" />
                    </a>
                </div>
            </div>
        </div>
        {/* <!-- Desktop and Mobile Menu --> */}
        <div className="col-xl-7 col-lg-3 col-md-1 col-2 text-center">
            <div className="primary-menu">
                <div className="nav-menu">
                    {/* <!-- Navbar Close Icon --> */}
                    <div className="navbar-close">
                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                    </div>
                    <nav className="main-menu">
                        <ul>
                            <li className="menu-item ">
                                <a href="/" className="nav-link active"> Solutions</a>
        
                                <ul className="sub-menu">
                                    <div className="row">
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="/travel">
                                                        <div className="d-inline-flex row">
                                                            <div className="menu-icon-drop col-3">
                                                                <img src={travel} alt="travel"/>
                                                                {/* <!--<i className="fa fa-plane fa-2x"></i>--> */}
                                                            </div>
                                                            <p className="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Travel</span><br />  Automate your expense, travel, and invoice management for improved business resilience.</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="k-care.html">
                                                        <div className="d-inline-flex row">
                                                            <div className="menu-icon-drop col-3">
                                                                <img src={k_care} alt="kcare" />
                                                                {/* <!--<i className="fa fa-building fa-2x"></i>--> */}
                                                            </div>
                                                            <p className="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>K-Care </span><br /> Travel alerts with detailed information to keep you and your team up-to-date.</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="/hotel">
                                                        <div className="d-inline-flex row">
                                                            <div className="menu-icon-drop col-3">
                                                                <img src={hotel} alt="htel"/>
                                                                {/* <!--<i className="fa fa-plane fa-2x"></i>--> */}
                                                            </div>
                                                            <p className="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Hotel/Accommodation</span><br />  Comfort rooms for all your business trip need.</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="/car-rental">
                                                        <div className="d-inline-flex row">
                                                            <div className="menu-icon-drop col-3">
                                                                <img src={car} alt="car"/>
                                                                {/* <!--<i className="fa fa-car fa-2x"></i>--> */}
                                                            </div>
                                                            <p className="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Car Rental</span><br />Corporate car solution to help you move faster</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                     </div>
                                </ul>
                            </li>
                            {/* <!--<li className="menu-item">-->
                            <!--    <a href="pricing.html" className="nav-link">Pricing</a>-->
                            <!--</li>--> */}
                            <li className="menu-item ">
                                <a href="..." className="nav-link">Resources</a>
                                <ul className="sub-menu" >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <li>
                                                <a href="guide.html">
                                                    <div className="d-inline-flex row">
                                                        <div className="menu-icon-drop col-3">
                                                            <i className="fas fa-directions fa-2x"></i>
                                                        </div>
                                                        <p className="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Guides</span><br /> Corporate travel jargon simplified for you.</p>
                                                    </div> 
                                                </a>
                                            </li> 
                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <a href="/webinar">
                                                    <div className="d-inline-flex row">
                                                        <div className="menu-icon-drop col-3">
                                                            <i className="fas fa-webcam fa-2x"></i>
                                                        </div>
                                                        <p className="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Webinars</span><br /> Corporate Live Series that talks about business needs for today’s world.</p>
                                                    </div> 
                                                </a>
                                            </li> 
                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <a href="https://gokardinal.medium.com/" target="_blank">
                                                    <div className="d-inline-flex row">
                                                        <div className="menu-icon-drop col-3">
                                                            <i className="fas fa-blog fa-2x"></i>
                                                        </div>
                                                        <p className="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Blog</span><br /> The best online resource for business trip management.</p>
                                                    </div> 
                                                </a>
                                            </li> 
                                        </div>
                                </div>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="/customer" className="nav-link">Customers</a>
                            </li>
                            <li className="menu-item">
                                <a href="/company" className="nav-link">Company</a>
                            </li>
                            <li className="menu-item">
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Menu Right --> */}
        <div className="col-xl-3 col-lg-5 col-md-6 col-2">
            <div className="header-right">
                <ul>
                    {/* <li className="get-started-wrapper">
                        <!--<button className="btn1" data-toggle="modal" data-target="#earlyaccessModal">-->
                        <!--    Get early access -->
                        <!--</button>-->
                        <a className="btn1" href="https://forms.gle/1tdHpLzWG2brgz5k7" target="_blank">
                            Request Demo 
                        </a>
                        
                    </li> */}
                    <li className="get-started-wrapper">
                        <a href="/login" className="filled-btn bg-filled button-radius btn-bordered">
                            Login 
                        </a>
                        
                    </li>
                    <li className="get-started-wrapper">
                        <a href="/onboarding" className="btn1" >
                            Sign Up For Free
                        </a>
                    </li>
                    <li>
                        <div className="menu-toggle">
                            <div className="menu-overlay"></div>
                            {/* <!-- Navbar Toggler --> */}
                            <div className="nav-toggle">
                                <div className="navbar-toggler float-end">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        {/* <!-- /.row --> */}
        </div> 
        {/* <!-- /.container-fluid --> */}
        </div> 
        {/* <!-- /.header-navigation --> */}
        </header>
    )
}

export default HomeHeader;