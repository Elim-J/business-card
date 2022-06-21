import React from "react"
import "../css/Footer.css"
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import insta from "../images/Instagram Icon.png"
import git from "../images/GitHub Icon.png"
// import ReactDOM from "react-dom"

export default function Footer(){
    return (
        <div className="footer">
            <div className="icons">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={insta} alt="" />
                <img src={git} alt="" />
            </div>
        </div>
    )
}