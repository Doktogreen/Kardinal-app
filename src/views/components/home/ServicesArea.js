import React from "react";

function ServicesArea(){
    return(
            <section className="our-services border-top-blue pt-100 pb-90">
            <div className="container">
            <div className="section-title mb-50 text-center">
                <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Solution for every need</h2>
            </div>
                <div className="our-services-content-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="icon-boxes-wrapper icon-boxes-grid" style={{display: "block"}}>
                                <div className="single-iconic-box iconic-box-v2" style={{width: "100%", height: "350px"}}>
                                    <div className="iconic-box-icon iconic-box-gradient-3">
                                        {/* <!--<i className="far fa-user-chart"></i>--> */}
                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_3_36)">
                                        <path d="M47.854 35.468C47.4671 35.96 46.9576 36.626 46.5495 37.102C45.3275 38.414 45.1689 38.586 44.0568 39.556C43.727 39.812 43.3359 40.12 42.9532 40.41C45.7757 38.15 46.1351 35.648 43.5452 34.102C43.5494 34.102 43.5494 34.102 43.5494 34.098C39.9277 32.034 31.9907 32.48 25.7283 35.124C19.6625 37.684 17.4235 41.346 20.4172 43.522C23.0453 43.988 26.1786 44.042 29.4938 43.622L29.8384 44.16L29.553 45.052C27.6036 45.218 25.7515 45.178 24.1532 44.92C23.7662 44.858 23.2567 44.752 22.8761 44.676C22.1404 44.506 21.7408 44.404 21.2608 44.258C20.7703 44.12 20.3517 43.982 19.6223 43.726C18.9077 43.46 18.599 43.34 18.026 43.07C17.3844 42.7931 16.7609 42.4798 16.1591 42.132C11.3893 39.294 14.3557 34.116 22.7725 30.568C31.1662 27.032 41.8622 26.476 46.6553 29.28C46.6574 29.284 46.6637 29.288 46.6764 29.292H46.6679C49.2854 30.86 49.5602 33.136 47.854 35.468ZM26.0158 15.628L26.0835 18.816L28.4789 21.336C36.3926 19.64 44.171 20.004 48.4968 22.414C48.5116 22.43 48.5475 22.446 48.5623 22.462C51.0106 23.888 51.6153 25.728 51.4314 27.728C52.0043 24.802 52.0509 23.746 51.9684 21.242C51.8669 19.674 50.9091 18.228 48.9831 17.088L48.9683 17.072C44.357 14.36 34.7498 13.772 26.0158 15.628ZM16.0259 11.978C27.1956 7.74 41.1751 7.49 47.2472 11.412C46.5915 9.89607 45.6992 8.48169 44.6002 7.216C39.027 3.616 26.1955 3.846 15.9477 7.736C9.94953 10.01 6.165 13.036 5.1713 15.872L4.89222 16.726C4.23045 18.89 4.10571 20.692 4 22.296C4.12051 18.814 8.45686 14.854 16.0259 11.978ZM40.6825 3.816C40.3315 3.5 39.2278 2.218 33.6356 0.801998C32.1239 0.485996 28.3183 -0.528 21.2883 0.945999L21.246 1.552L21.8021 2.376C28.3246 0.916 35.5702 1.404 40.6825 3.816ZM24.5422 29.034L18.6032 24.776C18.6032 24.776 17.3325 23.91 18.5313 23.302C19.7259 22.7 22.7937 21.226 22.7937 21.226L25.8234 22.296L27.3436 21.656L24.6627 19.454L24.6415 16.028L23.0664 16.69L22.022 19.584C22.022 19.584 18.8146 20.752 17.5419 21.192C16.2627 21.622 16.434 20.15 16.434 20.15L17.064 13.128L14.9709 14.008L11.5247 23.482C11.5247 23.482 9.69794 24.322 8.41246 25.06C7.12911 25.798 6.68934 27.022 6.68934 27.022C6.68934 27.022 7.94098 27.532 9.38291 27.122C10.8248 26.716 12.7044 25.992 12.7044 25.992L22.4554 29.91L24.5422 29.034ZM37.1072 42.506L33.0753 39.468L31.9738 39.624L34.1684 42.35C34.1684 42.35 34.6462 42.914 34.0035 43.048C33.3565 43.184 31.7201 43.5 31.7201 43.5L30.4896 42.57L29.6608 42.686L30.5995 44.098L30.1048 45.664L30.9061 45.554L31.8554 44.362C31.8554 44.362 33.5215 44.214 34.1769 44.162C34.8365 44.114 34.5532 44.784 34.5532 44.784L33.2889 48L34.3968 47.846L37.3144 43.828C37.3144 43.828 38.287 43.66 38.991 43.47C39.6972 43.282 40.0693 42.766 40.0693 42.766C40.0693 42.766 39.5513 42.37 38.8219 42.384C38.0861 42.398 37.1072 42.506 37.1072 42.506ZM17.1803 3.47L19.7893 4.76L20.3898 4.562L18.8442 3.254C18.8442 3.254 18.5144 2.988 18.8612 2.846C19.2079 2.706 20.0917 2.362 20.0917 2.362L20.8211 2.67L21.2545 2.522L20.6477 1.91L20.7069 1.016L20.2545 1.164L19.9162 1.89C19.9162 1.89 18.9986 2.148 18.6328 2.24C18.2692 2.334 18.3516 1.93 18.3516 1.93L18.6962 0L18.0937 0.198002L16.9118 2.75C16.9118 2.75 16.3896 2.944 16.0154 3.122C15.6411 3.3 15.4931 3.628 15.4931 3.628C15.4931 3.628 15.8251 3.8 16.2352 3.714C16.6475 3.632 17.1803 3.47 17.1803 3.47Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_3_36" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_36"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_36" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div className="iconic-box-body">
                                        <h5 className="iconic-box-title">Bleisure</h5>
                                        <p className="iconic-box-content">
                                            The silver lining to your work. Enjoy the best of both worlds; work and play wherever you are.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="icon-boxes-wrapper icon-boxes-grid" style={{display: "block"}}>
                                <div className="single-iconic-box iconic-box-v2" style={{width: "100%", height: "350px"}}>
                                    <div className="iconic-box-icon iconic-box-gradient-3">
                                        {/* <!--<i className="far fa-user-chart"></i>--> */}
                                        <svg width="50" height="50" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_3_7)">
                                        <path d="M13 21.2105C13 18.6842 15.6667 16.1579 21 16.1579H23.6667C25.7884 16.1579 27.8232 15.3594 29.3235 13.9381C30.8238 12.5167 31.6667 10.589 31.6667 8.57895V1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13 49H53V38.8947L43.6667 31.3158L33 37.6316L22.3333 31.3158L13 37.6316M13 49L5 49V26.2632L13 26.2632V37.6316V49ZM13 49V37.6316V49Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5 21.2105C5 6.05263 15.6667 6.05263 15.6667 6.05263C15.6667 6.05263 5 7.31579 5 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_3_7" x="0.25" y="0.25" width="57.5" height="57.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_7"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_7" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div className="iconic-box-body">
                                        <h5 className="iconic-box-title">Industry</h5>
                                        <p className="iconic-box-content">
                                            Travel solution for every industry. Whether entertainment, Oil and Gas, NGO, Financial or FMCG, leverage the right tool for your business travel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="icon-boxes-wrapper icon-boxes-grid" style={{display: "block"}}>
                                <div className="single-iconic-box iconic-box-v2" style={{width: "100%"}}>
                                    <div className="iconic-box-icon iconic-box-gradient-3">
                                        {/* <!--<i className="far fa-user-chart"></i>--> */}
                                        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_3_19)">
                                        <path d="M24 24V36" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M24 4L24 24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M24 2V4" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M40 38H14L8 32" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M33 38V42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16 38V42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M24 4C33.941 4 42 12.034 42 21.944V24C42 21.522 39.985 19 37.5 19C35.015 19 33 21.522 33 24C33 21.522 30.985 19 28.5 19C26.015 19 24 21.522 24 24C24 21.522 21.985 19 19.5 19C17.015 19 15 21.522 15 24C15 21.522 12.985 19 10.5 19C8.015 19 6 21.522 6 24V21.944C6 12.034 14.059 4 24 4Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M33 24C33 24 34.5 18.5 32 13C29.499 7.5 24 4 24 4" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15 24C15 24 14.5 19.5 17 13C19.5 6.5 24 4 24 4" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M24 23L24 4" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.5 19C17.015 19 15 21.522 15 24C15 21.522 12.985 19 10.5 19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.5 19C21.985 19 24 21.522 24 24C24 21.522 26.015 19 28.5 19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M37.5 19C35.015 19 33 21.522 33 24C33 21.522 30.985 19 28.5 19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M32.267 6C29.79 4.722 26.98 4 24 4C21.02 4 18.21 4.722 15.734 6" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_3_19" x="0" y="0" width="48" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_19"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_19" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div className="iconic-box-body">
                                        <h5 className="iconic-box-title">Leisure</h5>
                                        <p className="iconic-box-content">
                                             Life’s too short! <br /> Discover the experiences that await you. Hop on the platform for booking exciting experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section>
    )
}

export default ServicesArea;