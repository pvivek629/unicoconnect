import React from 'react'
import "./Banner.css"

function Banner() {
  return (
        <div className="banner">
            <div className='container'>
                <div className='bannerheadingdiv'>
                    <h1 className="banner-heading"><span className="bannerheadingspan">Transform your Ideas</span> into Stunning Products with Unico's Expert Team</h1>
                </div>
                <p className="bannerheadingone">Build, Launch, and Scale your Products with Unmatched Efficiency</p>
                <div className='bannerbuttonheading'>
                    <a href="/contact-us" target="_blank" className="bannerbutton">GET STARTED</a>
                </div>
                <div className="bannercard col-lg-12 d-lg-flex">
                    <div className="bannercarddetail col-lg-4">
                            <div className="bannerimagediv">
                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a7fa93d52282e9c85b3_Group%20289531.svg" loading="lazy" width="60" height="60" alt="icon-mobile" className="bannericon" />
                            </div>  
                            <div className="bannercardheading">
                                <div className="bannercardtext">Top Mobile App Developers</div>
                            </div>
                    </div>
                    <div className="bannercarddetail col-lg-4">
                            <div className="bannerimagediv">
                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a820d72f61b1a74629c_Group%20289530.svg" loading="lazy" width="60" height="60" alt="icon-code" className="bannericon" />
                            </div>
                            <div className="bannercardheading">
                                <div className="bannercardtext">Expert in No code Web Development</div>
                            </div>
                    </div>
                    <div className="bannercarddetail col-lg-4 ">
                            <div className="bannerimagediv">
                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a826201b89f5f3a5cc6_Group%20289529.svg" loading="lazy" width="60" height="60" alt="icon-design" className="bannericon" />
                            </div>
                            <div className="bannercardheading">
                                <div className="bannercardtext">Top Design Agency</div>
                            </div>
                    </div>
                </div>
                </div>
        </div>
    
  )
}

export default Banner