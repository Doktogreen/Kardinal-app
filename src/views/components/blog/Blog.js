import React from "react";
import HomeLoader from "../home/HomeLoader";
import HomeSearch from "../home/HomeSearch";
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
                            <img class="particle-1 animate-zoom-fade" src="assets/img/particle/particle-1.png" alt="particle One" />
                            <img class="particle-2 animate-rotate-me" src="assets/img/particle/particle-2.png" alt="particle Two" />
                            <img class="particle-3 animate-float-bob-x" src="assets/img/particle/particle-3.png" alt="particle Three" />
                            <img class="particle-4 animate-float-bob-y" src="assets/img/particle/particle-4.png" alt="particle Four" />
                            <img class="particle-5 animate-float-bob-y" src="assets/img/particle/particle-5.png" alt="particle Five" />
                        </div>
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="breadcrumb-content text-center">
                                    <div class="page-title wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.1s; animation-name: fadeInDown;">
                                        <h1>Our Blogs</h1>
                                    </div>
                                    <div class="page-breadcrumb wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.2s; animation-name: fadeInUp;">
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
        
        {/* <!-- /.footer-area --> */}
        {/* <!--====== End Footer Area ======--></img> */}
        </body>
    )
}

export default Blog;