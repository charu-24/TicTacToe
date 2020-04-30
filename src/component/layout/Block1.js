import React, { Component } from 'react'

import {Button, ButtonToolbar} from 'react-bootstrap'
import { AddName } from './AddName';
import { Block2 } from './Block2'
export class Block1 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            addModalShow : false,
            addModalShow2 :false,
            name1: "dd"
        }
    }
    addName = (name)=> 
        this.setState({name1:name})
    
    
    render(){
        
       let addModalClose = () => this.setState({addModalShow: false})
       console.log(this.state.addModalShow,this.state.name) 
        return (
            
            <div> 
                <ButtonToolbar>
                <Button className="block1Style" onClick={() => this.setState({addModalShow: true})} >
                <h1 style={{textAlign:"center",padding:"2vh", color:"black", fontSize:"2em",marginTop:"0PX" }} >Wanna Play Your Friend?</h1>
                </Button>
                < AddName 
                 show={this.state.addModalShow} 
                 onHide={addModalClose}
                 addNmae={this.props.addNmae.bind(this)} 
                 name1={this.state.name}
                />

                </ButtonToolbar> 
                <ButtonToolbar>
                <Button className="block1Style" onClick={() => this.setState({addModalShow2: true})}>
                <h1 style={{textAlign:"center",padding:"2vh",color:"black", fontSize:"2em",marginTop:"0PX" }} >Wanna Play with Me?</h1>
                </Button>
                <Block2 
                    show={this.state.addModalShow2} 
                    onHide={addModalClose}
                />
               

                </ButtonToolbar>

           </div>
        
        )
    }
}

