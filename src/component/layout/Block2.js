import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { props } from 'prop-types'


export class Block2 extends Component{
    constructor(props){
      super(props);
      this.state = {
          name: this.props.name1,
          isDiv1Visible: true,
          isDiv2Visible: false,
          isX: '',
          isO: '',
      }
    }
    onChange = (e) => this.setState({name: e.target.value})
    

    onSubmit = (e) =>{
      e.preventDefault();
      this.props.addNmae(this.state.name);
      this.setState({name:""})
      
     
    }

    render() {
        console.log(this.state.name)
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
          <h1>Your Name??</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" style={{ width:"40%", height:"30px", fontSize:"1.5em",backgroundColor:"#1c77ac",border:"none", color:"black"}}
            value={this.state.name} onChange={this.onChange} 
            placeholder="name"/>
            
            
          </form>
          <button onClick={this.onSubmit,  () => this.setState({isDiv1Visible:false,isDiv2Visible:true})} className="close">Done</button>
        </div >
        
        <div className={this.state.isDiv2Visible ? "formS": "overlapDiv2"}>
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


