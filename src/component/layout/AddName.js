import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { props } from 'prop-types'
import { getRandomBetween } from 'random-in'

export class AddName extends Component{
    constructor(props){
      super(props);
      this.state = {
          player1: "",
          player2:"",
          isDiv1Visible: true,
          isDiv2Visible:false,
          isDiv3Visible: false,
          isDiv4Visible:false,
          isX: '',
          isO: '',
          num1:"",
          num2:""
      }
    }
    onChange = (e) =>
    { 
      const name = e.target.name;
      const val = e.target.value;
      this.setState({[name]:val})

      

    }
    

    onSubmit = (e) =>{
      e.preventDefault();
      this.props.addNmae(this.state.name);
      
      
     
    }

    render() {
      const randomNum=getRandomBetween(0,9)
        console.log(this.state.player1,this.state.player2)
        return(
            <div>
              <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className="modal"
    >
      <div className="innerModal">
      
      <Modal.Body >
        <div className={ this.state.isDiv1Visible ? "formS": "overlapDiv2"}>
          
        <form onSubmit={this.onSubmit.bind(this)}>

            <h1 style={{top:"-10%"}} >Player1 :</h1> 
            <input type="text"
             style={{
                  width:"40%", 
                  height:"30px", 
                  fontSize:"1.5em",
                  backgroundColor:"#1c77ac",
                  border:"none", 
                  color:"black"
                }}
            value={this.state.player1} name="player1" onChange={this.onChange} 
            placeholder="name"/>
             <h1 >Player2 :</h1> <input type="text" style={{ width:"40%", height:"30px", fontSize:"1.5em",backgroundColor:"#1c77ac",border:"none", color:"black"}}
            value={this.state.player2} name="player2" onChange={this.onChange} 
            placeholder="name"/>
            
            
          </form>
          <button onClick={this.onSubmit,  () => this.setState({isDiv1Visible:false,isDiv2Visible:true})} className="close">Done</button>
        </div >
        <div  className={ this.state.isDiv2Visible ? "formS": "overlapDiv2"}>
           <h1>Let's choose whose chance will be first...</h1>
           <h3 style={{color:"#ffa800"}}>So Guys Choose any number between 0-9:</h3>
           <form>
           <div className="col-md-6">
           <h2 style={{color:"#0f2862"}} >{this.state.player1}</h2>:
            <input type="text" value={this.state.num1} onChange={this.onChange} name="num1"
            style={{
              width:"20%", 
              height:"60px", 
              fontSize:"1.5em",
              backgroundColor:"#1c77ac",
              border:"none", 
              color:"black",
              textAlign:"center",
              borderRadius:"40px",
              boxShadow:"2px 4px 10px black"
            }}
             />
           </div>
           <div className="col-md-6">
           <h2 style={{color:"#0f2862"}}>{this.state.player2},{randomNum}</h2>: 
           <input type="text" value={this.state.num2} onChange={this.onChange} name="num2"
           style={{
            width:"20%", 
            height:"60px", 
            fontSize:"1.5em",
            backgroundColor:"#1c77ac",
            border:"none", 
            color:"black",
            textAlign:"center",
            borderRadius:"40px",
              boxShadow:"2px 4px 10px black"
          }}
          />
           </div>
           
           </form>
           <button onClick={this.onSubmit,  () => this.setState({isDiv2Visible:false,isDiv3Visible:true})} className="close">Done</button>

        </div>
        
        <div className={ this.state.isDiv3Visible ? "formS": "overlapDiv2"}>
        <h1>Let's choose whose chance will be first...</h1>
        <h3 style={{color:"#ffa800"}}>Wait for a sec..</h3>
        <div>
          <h1><span id="#random"></span></h1>
        </div>  
        <button onClick={this.onSubmit,  () => this.setState({isDiv3Visible:false,isDiv4Visible:true})} className="close">Done</button>
        </div>

        <div className={this.state.isDiv4Visible ? "formS": "overlapDiv2"}>
        <h1 >Hey {this.state.name} which one u would choose??</h1>
          <button className="x" onClick={ () => this.setState({isX: true,isO:false}) }>X</button>
          <button className="o" onClick={() => this.setState({isO:true, isX:false})}>O</button>
          <div style={(this.state.isX=== true || this.state.isO=== true)? {display: "block"} : {display: "none"}}>
        <h1>Ok, {this.state.name} your chance will be first </h1>
          <Link to="/about">
          <button className={"letButton"}>Let's Begin</button>
          
          </Link>
          </div>
        </div>

      </Modal.Body>
      
        
      
      </div>
    </Modal>
            
            </div>
        )
    }
}


