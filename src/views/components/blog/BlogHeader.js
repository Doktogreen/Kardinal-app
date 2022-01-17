import React from "react";

function BlogHeader(){
    return(
        <header className="header-area header-v1">
            <div className="header-navigation">
            <div className="container-fluid">
            <div className="row align-items-center">
            {/* <!-- Brand Logo and Language Selection Dropdown --> */}
            <div className="col-xl-2 col-lg-4 col-md-5 col-8">
                <div className="site-branding-and-language-selection">
                    <div className="brand-logo">
                        <a href="index.html">
                            <img src="assets/img/kardinal.png" alt="logo" />
                        </a>
                    </div>
                    {/* <!--<div className="language-selection">-->
                    <!--    <select className="nice-select" name="language">-->
                    <!--        <option value="en">English</option>-->
                    <!--        <option value="de">Deutsch</option>-->
                    <!--        <option value="es">Español</option>-->
                    <!--        <option value="fr">Français</option>-->
                    <!--    </select>-->
                    <!--</div>--> */}
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
                                    <a href="index.html" className="nav-link "> Solutions</a>
                                    <ul className="sub-menu"  style="width: 500px;">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="travel.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fa fa-plane fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Travel</span><br/> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="k-care.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fa fa-building fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">K- Care</span><br/> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="hotel.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fa fa-bed fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Hotel/Accommodation</span><br/> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="car-rental.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fa fa-car fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Car Rental</span><br/> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="corporate.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fa fa-bed fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Corporate Hospitality</span><br/> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="pricing.html" className="nav-link">Pricing</a>
                                </li>
                                <li className="menu-item ">
                                    <a href="#" className="nav-link active">Resources</a>
                                    <ul className="sub-menu"  style="width: 500px;">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="guide.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fas fa-directions fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Guides</span><br /> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="webinar.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fas fa-webcam fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Webinars</span><br /> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="ebook.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fas fa-book fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Ebooks</span><br /> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="blog.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fas fa-blog fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Blog</span><br /> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="menu-item ">
                                    <a href="#" className="nav-link">People</a>
                                    <ul className="sub-menu"  style="width: 500px;">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="team.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fas fa-user-friends fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Team</span><br /> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="customer.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fab fa-intercom fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Customers</span><br /> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="vendor.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fas fa-inventory fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Vendor</span><br/> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="career.html">
                                                        <div className="d-inline-flex ">
                                                            <div className="menu-icon-drop">
                                                                <i className="fas fa-briefcase fa-2x"></i>
                                                            </div>
                                                            <p className="drop-menu-new-p"><span style="font-size: 12px; font-weight: 500">Careers</span><br/> Lorem ipsum text goes here</p>
                                                        </div> 
                                                    </a>
                                                </li> 
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="company.html" className="nav-link">Company</a>
                                </li>
                                <li className="menu-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
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
                        <li className="get-started-wrapper">
                            <a href="auth_login.html" className="filled-btn bg-filled button-radius btn-bordered">
                                LogIn 
                            </a>
                        </li>
                        <li className="get-started-wrapper">
                            <a href="auth_register.html" className="btn1" >
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

export default BlogHeader;