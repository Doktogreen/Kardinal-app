import React, { useState } from 'react';
import './index.scss';

export default function EmailModal(props){
    const [page, setPage] = useState(props.page)
    const pageSetter = () => {
        if (props.response.message !== "failed"){
            setPage(page + 1);
        }else {
            setPage(page);
        }
    }
    return(
        <>
        <form onSubmit={pageSetter} id="emaily" className="modal fade">
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <div className="icon-box">
                            <i className="material-icons">&#xE876;</i>
                        </div>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body text-center">
                        <h4>Great!</h4>	
                        <p>Your account has been created successfully.</p>
                        <button className="btn btn-success" data-dismiss="modal"><span>Start Exploring</span> <i className="material-icons">&#xE5C8;</i></button>
                    </div>
                </div>
            </div>
    <div className="modal fade" id="email" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header justify-content-center">
            <div className="icon-box">
                <i className="material-icons">&#xE876;</i>
                </div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
            <div className="modal-body">
                <div className="widget-content widget-content-area justify-pill" style={{padding: "5px 10px"}}>
                    <ul className="nav nav-pills mb-3 nav-fill" id="justify-pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="justify-pills-home-tab" data-toggle="pill" href="#justify-pills-home" role="tab" aria-controls="justify-pills-home" aria-selected="true">Bank Transfer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="justify-pills-profile-tab" data-toggle="pill" href="#justify-pills-profile" role="tab" aria-controls="justify-pills-profile" aria-selected="false">Pay with card</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="justify-pills-tabContent">
                        <div className="tab-pane fade show active" id="justify-pills-home" role="tabpanel" aria-labelledby="justify-pills-home-tab">
                            <div className="">
                            <h5 style={{lineHeight: "20px"}} className="card-title mb-4">Bank transfer information</h5>
                            <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="card-text mb-1">Wema Bank</p>
                            <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="card-text mb-1"> Kardinal Corporate Extern</p>
                            <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="card-text mb-1"> 7820059143</p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="justify-pills-profile" role="tabpanel" aria-labelledby="justify-pills-profile-tab">
                            <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                                
                            </p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="modal-footer">
                <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Discard</button>
                <button type="submit" className="btn btn-primary">Verify</button>
            </div>
        </div>
    </div>   
</div>
</form>      
    </>
    )
}