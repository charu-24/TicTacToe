import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button, ButtonToolbar} from 'react-bootstrap'
import { AddName } from './AddName'
export class Block1 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            addModalShow : false
            
        }
    }
    
    render(){
        
       let addModalClose = () => this.setState({addModalShow: false})
       console.log(this.state.addModalShow) 
        return (
            
            <div> 
                <ButtonToolbar>
                <Button className="block1Style" onClick={() => this.setState({addModalShow: true})}>
                <h1 style={{textAlign:"center",padding:"2vh", color:"black", fontSize:"2em",marginTop:"0PX" }} >Wanna Play with Me?</h1>
                </Button>
                < AddName show={this.state.addModalShow} onHide={addModalClose} />

                </ButtonToolbar> 
                <ButtonToolbar>
                <Button className="block1Style" >
                <h1 style={{textAlign:"center",padding:"2vh",color:"black", fontSize:"2em",marginTop:"0PX" }} >Wanna Play with Me?</h1>
                </Button>
               

                </ButtonToolbar>

           </div>
        
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
    marginTop:"20%",
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