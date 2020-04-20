import React, { Component } from 'react'

export class Img1 extends Component {
    
    render()
    {
        console.log(this.props.player1)
        
        return (
            <div className="Img1Style">
                
                
                <hr className="HR1" size="5" color="#0f2862" borderRadius="10px"></hr>
                <hr className="HR1" size="5" color="#0f2862"></hr>
                <div className="VR1"></div>
                <div className="VR2"></div>
                 
            </div>
        )
    }
}

const nameStyle ={
    marginTop: "10%",
    marginLeft: "5%",
    fontSize: "1.09em",
    backgroundColor: "rgba(10,10,10,0.5)",
    border: "2px solid black",
    boxShadow:"1px 2px 5px #0f2862",
    height: "30px",
    color:"black"
    
}
const optionStyle = {
    marginTop: "10%",
    width: "220px",

    marginLeft: "5%",
    fontSize: "1.09em",
    backgroundColor: "rgba(10,10,10,0.5)",
    border: "2px solid black",
    boxShadow:"1px 2px 5px #0f2862",
    height: "30px",
    color:"black"
}
const buttonStyle = {
    marginTop:"10%",
    marginLeft: "35%",
    width : "80px",
    height : "30px",
    fontSize:" 1em",
    backgroundColor:"#0f2862",
    border: "2px solid black",
    boxShadow:"1px 2px 5px black",
    borderRadius: "10px",
    color: " #1c77ac"

}
const fontStyle ={
    fontSize: "10em",
    textAlign:"center",
    marginTop:"-25%",
    
}