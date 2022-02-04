import React from "react";
import { Particles } from "../home/FAQ";
import HomeLoader from "../home/HomeLoader";
import HomeSearch from "../home/HomeSearch";
import BlogFooter from "./BlogFooter";
import BlogHeader from "./BlogHeader";
import BlogMoneyChronicle from "./BlogMoneyChronicle";
import BlogNews from "./BlogNews";
import BlogProduct from "./BlogProduct";

function Blog(){
    return(
        <body>
            {/* <!--======= Start Preloader =======--> */}
            <HomeLoader />
            {/* <!--======= End Preloader =======--> */}
            {/* <!--====== Start Search From ======--> */}
            <HomeSearch />
            {/* <!--====== End Search From ======--> */}
            {/* <!--====== Start Header Area ======--> */}
            <BlogHeader />
            {/* <!-- /.header-area --> */}
            {/* <!--====== End Header Area ======--> */}
            {/* <!--====== Start Breadcrumb Area ======--> */}

            <section class="breadcrumb-area">
                <div class="container">
                    <div class="section-internal">
                        <div class="section-particle-effect d-none d-md-block section-particle-effect-v3">
                            <Particles />
                        </div>
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="breadcrumb-content text-center">
                                    <div class="page-title wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0.1s", animationName: "fadeInDown"}}>
                                        <h1>Our Blogs</h1>
                                    </div>
                                    <div class="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0.2s", animationName: "fadeUp"}}>
                                        <ul class="breadcrumb">
                                            <span>Resources library</span>
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

        {/* <!--====== Start Products Area ======--> */}
        <BlogProduct />
        {/* <!-- /.blog-and-news-area -->  */}
        {/* <!--====== End Products Area ======--> */}
        
        {/* <!--====== Start Blog or News Area ======--> */}
        <BlogNews />
        {/* <!-- /.blog-and-news-area --> */}
        {/* <!--====== End Blog or News Area ======--> */}

        {/* <!--====== Start Money Chronicles Area ======--> */}
        <BlogMoneyChronicle />
        {/* <!--====== End Money Chronicles Area ======--> */}
        
        
        {/* <!--====== Start Footer Area ======--> */}
            <BlogFooter />
        {/* <!-- /.footer-area --> */}
        {/* <!--====== End Footer Area ======--></img> */}
        </body>
    )
}

export default Blog;