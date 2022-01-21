import React from "react";
import services_background from "../../../assets/general-assets/img/services/dots-pattern-bg.png";
import company_1 from "../../../assets/general-assets/img/brand/company-1.png";
import company_2 from "../../../assets/general-assets/img/brand/company-2.png";
import company_3 from "../../../assets/general-assets/img/brand/company-3.png";
import company_4 from "../../../assets/general-assets/img/brand/company-4.png";
import company_5 from "../../../assets/general-assets/img/brand/company-5.png";
import company_6 from "../../../assets/general-assets/img/brand/company-6.png";
import company_7 from "../../../assets/general-assets/img/brand/company-7.png";
import company_8 from "../../../assets/general-assets/img/brand/company-8.png";
import company_9 from "../../../assets/general-assets/img/brand/company-9.png";
import company_10 from "../../../assets/general-assets/img/brand/company-10.png";
import company_11 from "../../../assets/general-assets/img/brand/company-11.png";
import company_12 from "../../../assets/general-assets/img/brand/company-12.png";
import company_13 from "../../../assets/general-assets/img/brand/company-13.png";
import company_14 from "../../../assets/general-assets/img/brand/company-14.png";
import company_15 from "../../../assets/general-assets/img/brand/company-15.png";
// import company_16 from "../../../assets/general-assets/img/brand/company-16.png";
// import company_17 from "../../../assets/general-assets/img/brand/company-17.png";
// import company_18 from "../../../assets/general-assets/img/brand/company-18.png";

function TeamServiceArea(){
    return(
        <section className="our-services our-services-v1 pt-100 pb-100" style={{backgroundImage: `url(${services_background})`}}>
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-lg-6">
                        <div className="section-title text-center text-lg-left section-title-ocean-blue">
                        {/* <!--
                            <div className="section-heading-tag">
                                <span className="single-heading-tag">Creative Team</span>
                            </div>
                        --> */}
                            <h2>Join over 100 businesses doing business travel the <span>right way</span></h2>
                        </div>
                        <div className="row justify-content-end">
                            {/* Single Team Member */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_1} alt="team member one" />
                                    </div>
                                    {/* <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Donald L. Juarez
                                        </h5>
                                    </div> */}
                                </div>
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_2} alt="team member one" />
                                    </div>
                                </div>
                            </div>
                            {/* Single Team Member */}
                            <div className="col-lg-3 col-sm-6" style={{paddingTop: "5%"}}>
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_3} alt="team member one" />
                                    </div>
                                    {/* <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Donald L. Juarez
                                        </h5>
                                    </div> */}
                                </div>
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_4} alt="team member one" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_5} alt="team member one" />
                                    </div>
                                    {/* <!--
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Donald L. Juarez
                                        </h5>
                                    </div>
                                    --> */}
                                </div>
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_6} alt="team member one" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6" style={{paddingTop: "5%"}}>
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_7} alt="team member one" />
                                    </div>
                                    {/* <!--
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Donald L. Juarez
                                        </h5>
                                    </div>
                                    --> */}
                                </div>
                                <div className="single-team-member wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={company_8} alt="team member one" />
                                    </div>
                                </div>   
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="team-member-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    {/* <!-- Single Team Member --> */}
                                    <div className="single-team-member wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <div className="team-member-thumb">
                                            <img src={company_9} alt="team member two" />
                                        </div>
                                    </div>
                                    {/* <!-- Single Team Member --> */}
                                    <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="team-member-thumb">
                                            <img src={company_10} alt="team member three" />
                                        </div>
                                    </div>
                                    {/* <!-- Single Team Member --> */}
                                    <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="team-member-thumb">
                                            <img src={company_11} alt="team member three" />
                                        </div>
                                    </div>
                                    {/* <!-- Single Team Member --> */}
                                    <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="team-member-thumb">
                                            <img src={company_12} alt="team member three" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Single Team Member --> */}
                                <div className="col-lg-6">
                                    <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="team-member-thumb">
                                            <img src={company_13} alt="team member four" />
                                        </div>
                                    </div>
                                    <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="team-member-thumb">
                                            <img src={company_14} alt="team member four" />
                                        </div>
                                    </div>
                                    <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="team-member-thumb">
                                            <img src={company_15} alt="team member four" />
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            {/* <!-- /.row --> */}
            </div> 
        {/* <!-- /.container --> */}
        </section> 
    // {/* <!-- /.our-services --> */}
    )
}

export default TeamServiceArea;