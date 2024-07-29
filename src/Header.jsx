import React from "react"
import mail from "./assets/Mail.svg"
import linkedIn from "./assets/linkedin.svg"
import radu from "./assets/radu.png"

export default function Header(){
    return(
        <header>
            <img className="profile-pic" src={radu} />
            <h1 className="name">Radu</h1>
            <span className="profession">Entrepreneur</span>
            <span className="website-name">radu.website</span>
            <div className="contact-links-container">
                <a target="about:blank"  href="mailto:radu.ion204@gmail.com" className="email"><img src={mail} />Email</a>
                <a target="about:blank"  href="https://www.linkedin.com/in/radu-ion-a8ba2a29b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin"><img src={linkedIn} />LinkedIn</a>
            </div>
        </header>
    )
}