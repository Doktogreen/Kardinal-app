import React from "react";
import HomeFooter from "../home/HomeFooter";
import HomeHeader from "../home/HomeHeader";
import Company from "./Company";

function CompanyComponent(){
    return(
        <>
            <HomeHeader />
                <Company/>
            <HomeFooter />
        </>
    )
}

export default CompanyComponent;