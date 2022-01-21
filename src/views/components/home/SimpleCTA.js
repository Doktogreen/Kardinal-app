import React from "react";
import cta from "../../../assets/general-assets/img/cta/simple-cta-bg.png";

function SimpleCTA(){
    return(
        <section className="simple-cta-area bg-royal-blue" style={{backgroundImage: `url(${cta})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="simple-cta-content">
                            <h4>Ready to simplify your business trips?</h4>
                            <a href="demo.html" className="filled-btn bg-filled button-radius btn-bordered btn-off-white">
                                Request Demo 
                            </a>
                        </div>
                    </div>
                </div> 
            {/* <!-- /.row --> */}
            </div> 
        {/* <!-- /.container --> */}
        </section> 
        // {/* <!-- /.simple-cta-area -->  */}
    )
}

export default SimpleCTA;