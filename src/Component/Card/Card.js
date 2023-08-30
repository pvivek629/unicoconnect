import React from 'react'
import "./Card.css"
import CardDesign from './CardDesign'

function Card() {
    return (
        <div className='mb-3'>
            <div className="Cardheader container">
                <div className="cardservice">services</div>
                <h2 className="cardserviceheading">The <span className="cardserviceunique strike">Unique</span> <span className="cardserviceunico"> Unico</span> Approach</h2>
                <div className='hello'></div>

               
            </div>
            <div className='container d-lg-flex justify-content-between'>
                <CardDesign initialColor="#ccfbc4" header="Mobile App" headername="Development" headerdetail="We create custom mobile applications using trusted UX for both iOS and Android."/>
                <CardDesign initialColor="#cde1fb" header="Website" headername="Development" headerdetail="We build website applications that deliver speed, efficiency and results."/>
                <CardDesign initialColor="#fcf6c7" header="Product" headername="Design (UI/UX)" headerdetail="We design robust, fast, scalable and extraordinary interfaces that make a remarkable impact."/>
                <CardDesign initialColor="#fbcdcd" header="Tech" headername="Consulting" headerdetail="We support you by creating an outstanding product that meets the dynamic market needs."/>
            </div>
        </div>
    )
}

export default Card