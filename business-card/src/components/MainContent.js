import React from "react"
import "../css/MainContent.css"
import EmailIcon from "../images/mail.png"
import linkedIn from "../images/linkedin.png"


export default function MainContent() {
    return (
        <div className="MainContent">
            <div className="innerContent">
                <h1>Laura Smith</h1>
                <p className="job-title">Frontend Developer</p>
                <p className="website">laurasmith.website</p>
                
                <div className="buttons">
                    <button className="email-btn"><img src={EmailIcon} alt="" className="email-img" />Email</button>
                    <button className="link-btn"><img src={linkedIn} alt="" className="link-img" />LinkedIn</button>
                </div>

                <h3>About</h3>
                <p className="description">I am a frontend developer with a particular interest in making things simple and
                    automating daily tasks. I try to keep up with security and best practices,
                    and am always looking for new things to learn.
                </p>

                <h3>Interests</h3>
                <p className="description" id="lastdescription">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
                    Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    )
}