import React, { useState } from 'react'
import "./CardDesign.css"

function CardDesign({header,headername,headerdetail,initialColor}) {

    const [hovered, setHovered] = useState(false);

    const toggleHover = () => {
        setHovered(!hovered);
    };

    const boxStyle = {
        marginRight:'2rem',
        marginTop: '2rem',
        backgroundColor: hovered ? 'black' : initialColor,
      };

      const buttonStyle = {
        backgroundColor: hovered ? '#1a8ef7' : '#000',
        // color: hovered ? '#000000' : '#ffffff',
      }

      const textStyle = {
        color: hovered ? '#ffffff' : '#000000',
      }

  return (
    <div style={boxStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} className='carddesign col-lg-3'>
        <div class="carddesign-wrapper">
            <div class="carddesign-holder">
                <div class="carddesign-icon-circle" >
                    <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550dee24ff2ce291e53296_Mobilesvg.svg" loading="lazy" width="38" height="60" alt="img" class="carddesign-icon h-70" />
                </div>
            </div>
            <div class="carddesign-blue-bg" ></div>
            <div class="carddesign-circle" >
                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/6205e734dcdf5113d925ee37_Mobile-dev.svg" loading="lazy" alt="img" class="carddesign-7" />
                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620a338a565c1d3f98e516c5_Mobile-dev.svg" loading="lazy" alt="img" class="carddesign-8" />
            </div>
            <div class="carddesign-content">
                <div class="carddesign-service-wrapper">
                    <h3 class="carddesign-title">{header}<br/>{headername}</h3>
                    <div class="carddesign-small-para" style={textStyle}>{headerdetail}</div>
                </div>
                <a class="carddesign-div d-flex justify-content-center" style={buttonStyle}>
                    <div class="carddesign-quote text-center">KNOW MORE</div>
                </a>           
            </div>
        </div>
    </div>
  )
}

export default CardDesign