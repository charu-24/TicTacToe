import React from 'react'
import { Link } from 'react-router-dom'
export default function Lets() {
    return (
        <div style={buttonStyle}>
            <Link to="/about" >
            <button className="letButton" >Let's Begin</button>
            </Link>
            
        </div>
    )
}

const buttonStyle = {
    float: "left",
    marginLeft:"45%",
    marginbottom: "50px",
    marginTop: "5%",
   
   
}
