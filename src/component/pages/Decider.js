import React from 'react'
import Img1 from '../layout/Img1';
import Img2 from '../layout/Img2';
import Between from '../layout/Between'


export default function Decider() {
    return (
        <React.Fragment>
            <div style={divStyle}>
            <h1 style={textStyle}>Guys let's play a quick game to decide whose chance will be first...</h1>
            <p>Well it kind of a lucky draw..  All u need to do is roll Ur dice and the winner would be the one whose score will be highest..</p>
            </div>
            
            <Img1 />
            
            <Img2 />
            <Between />
            
        </React.Fragment>
    )
}
const textStyle = {
    color:"black",
    textAlign: "center"
}
const divStyle ={
   
    marginLeft: "10%",
    marginRight:"10%",
    
   
}