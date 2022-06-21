import React from "react"
import picture from "../images/picture.png"
import "../css/Header.css"
// import ReactDOM from "react-dom"

export default function Header(){
    return (
        <div className="header">
            <img src={picture} alt="developer" className="header-img"></img>
        </div>
    )
}