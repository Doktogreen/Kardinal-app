import React from "react";
import services_background from "../../../assets/general-assets/img/services/dots-pattern-bg.png";
import company_1 from "../../../assets/general-assets/img/brand/brand/company-1.png";
import company_2 from "../../../assets/general-assets/img/brand/brand/company-2.png";
import company_3 from "../../../assets/general-assets/img/brand/brand/company-3.png";
import company_4 from "../../../assets/general-assets/img/brand/brand/company-4.png";
import company_5 from "../../../assets/general-assets/img/brand/brand/company-5.png";
import company_6 from "../../../assets/general-assets/img/brand/brand/company-6.png";
import company_7 from "../../../assets/general-assets/img/brand/brand/company-7.png";
import company_8 from "../../../assets/general-assets/img/brand/brand/company-8.png";
import company_9 from "../../../assets/general-assets/img/brand/company-9.png";
import company_10 from "../../../assets/general-assets/img/brand/company-10.png";
import company_11 from "../../../assets/general-assets/img/brand/company-11.png";
import company_12 from "../../../assets/general-assets/img/brand/company-12.png";
import company_13 from "../../../assets/general-assets/img/brand/company-13.png";
import company_14 from "../../../assets/general-assets/img/brand/company-14.png";
import company_15 from "../../../assets/general-assets/img/brand/company-15.png";
import company_16 from "../../../assets/general-assets/img/brand/company-16.png";
import company_17 from "../../../assets/general-assets/img/brand/company-17.png";
import company_18 from "../../../assets/general-assets/img/brand/company-18.png";

export let companies = {
    company1: company_1,
    company2: company_2,
    company3: company_3,
    company4: company_4,
    company5: company_5,
    company6: company_6,
    company7: company_7,
    company8: company_8,
    company9: company_9,
    company10: company_10,
    company11: company_11,
    company12: company_12,
    company13: company_13,
    company14: company_14,
    company15: company_15,
    company16: company_16,
    company17: company_17,
    company18: company_18,
};

function TeamServiceArea(){
    return(
        <section className="our-services brands-class our-services-v1 pt-100 pb-100" style={{backgroundImage: `url(${services_background})`}}>
        <div className="container">
        <div className="row justify-content-center justify-content-lg-start">
        <div className="col-lg-6">
        <div className="section-title text-center text-lg-left section-title-ocean-blue">
        {/* <!--
            <div className="section-heading-tag">
                <span className="single-heading-tag">Creative Team</span>
            </div>
        --> */}
            <h2>Join over 100 businesses doing business travel the <span>right way</span>
            </h2>
        </div>
        
        </div>
        <div className="col-lg-3">
        <div className="team-member-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* <!-- Single Team Member --> */}
                    <div className="single-team-member wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="team-member-thumb">
                            <img src={company_7} alt="team member two" />
                        </div>
                    </div>
                    {/* <!-- Single Team Member --> */}
                    <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team-member-thumb">
                            <img src={company_8} alt="team member three" />
                        </div>
                    </div>
                </div>
                {/* <!-- Single Team Member --> */}
                <div className="col-lg-6">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="team-member-thumb">
                            <img src={company_5} alt="team member four" />
                        </div>
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="team-member-thumb">
                            <img src={company_6} alt="team member four" />
                        </div>
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
                            <img src={company_3} alt="team member two" />
                        </div>
                    </div>
                    {/* <!-- Single Team Member --> */}
                    <div className="single-team-member wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team-member-thumb">
                            <img src={company_4} alt="team member three" />
                        </div>
                    </div>
                </div>
                {/* <!-- Single Team Member --> */}
                <div className="col-lg-6">
                    <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="team-member-thumb">
                            <img src={company_1} alt="team member four" />
                        </div>
                    </div>
                    <div className="single-team-member wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="team-member-thumb">
                            <img src={company_2} alt="team member four" />
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
    )
}

export default TeamServiceArea;