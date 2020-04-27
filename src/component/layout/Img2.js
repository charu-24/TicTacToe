import React, { Component } from 'react'
import { props } from 'prop-types'

export class Img2 extends Component {
    constructor(props){
        super(props);
    }
    render()
    {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}
const nameStyle ={
    marginTop: "20%",
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