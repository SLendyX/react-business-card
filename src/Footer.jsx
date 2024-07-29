import React from "react"
import facebook from "./assets/facebook.svg"
import github from "./assets/github.svg"
import instagram from "./assets/instagram.svg"
import twitter from "./assets/twitter.svg"


export default function Footer(){
    return (
        <footer>
            <a target="about:blank"  href="https://instagram.com/rd_ion"><img src={instagram} /></a>
            <a target="about:blank"  href="https://github.com/SLendyX"><img src={github} /></a>
        </footer>
    )
}