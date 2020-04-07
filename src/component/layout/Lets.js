import React from 'react'
import { Link } from 'react-router-dom'
export default function Lets() {
    return (
        <div style={buttonStyle}>
            <Link to="/about" >
            <button style={{width:"200px", padding: "10px",marginLeft:"-10%",backgroundColor:"#0f2862", borderColor:"black",boxShadow:"2px 5px 6px black",
            borderRadius:"30px",color:"#ffa800",fontStyle:"bold"}}>Let's Begin</button>
            </Link>
            
        </div>
    )
}

const buttonStyle = {
    float: "left",
    marginLeft:"31%",
    marginbottom: "50px",
    marginTop: "5%",
   
   
}
