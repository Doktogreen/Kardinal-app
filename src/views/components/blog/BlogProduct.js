import React from "react";
import { 
    thumbnail_8, 
    thumbnail_9, 
    thumbnail_10 
} from "./BlogMoneyChronicle";

function BlogProduct(){
    return(
        <section className="blog-and-news-area blog-news-v3 pt-120 pb-90">
            <div className="container">
                <div className="section-internal">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title section-title-clear-blue mb-70" style="text-align:center">
                                <div className="section-heading-tag">
                                    <span className="single-heading-tag">Products</span>
                                </div>
                                <h2>Latest Product Updates</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-post-item blog-post-item-v5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
                                <div className="post-thumbnail">
                                    <a href="#">
                                        <img src={thumbnail_8} alt="blog thumbnail one" />
                                    </a>
                                </div>
                                <div className="blog-post-entry-content">
                                    <div className="post-meta-wrapper">
                                        <ul>
                                            <li><a href="#" className="post-meta">June 28, 2021</a></li>
                                        </ul>
                                    </div>
                                    <h4 className="post-title"><a href="#">Cowrywise Secures Fund/Portfolio Management Licence from the SEC</a></h4>
                                    <a className="btn-secondary-custom-a" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-post-item blog-post-item-v5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms">
                                <div className="post-thumbnail">
                                    <a href="#">
                                        <img src={thumbnail_9} alt="blog thumbnail two" />
                                    </a>
                                </div>
                                <div className="blog-post-entry-content">
                                    <div className="post-meta-wrapper">
                                        <ul>
                                            <li><a href="#" className="post-meta">June 08, 2021</a></li>
                                        </ul>
                                    </div>
                                    <h4 className="post-title"><a href="#">Signs Website Feels Haunted House Than Welcoming Home</a></h4>
                                    <a className="btn-secondary-custom-a" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-post-item blog-post-item-v5 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1500ms">
                                <div className="post-thumbnail">
                                    <a href="#">
                                        <img src={thumbnail_10} alt="blog thumbnail three" />
                                    </a>
                                </div>
                                <div className="blog-post-entry-content">
                                    <div className="post-meta-wrapper">
                                        <ul>
                                            <li><a href="#" className="post-meta">May 12, 2021</a></li>
                                        </ul>
                                    </div>
                                    <h4 className="post-title"><a href="#">Great Expectas Using Story Principles Anticipate</a></h4>
                                    <a className="btn-secondary-custom-a" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
                {/* <!-- /.section-internal --> */}
            </div> 
            {/* <!-- /.container --> */}
        </section> 
    )
}

export default BlogProduct;