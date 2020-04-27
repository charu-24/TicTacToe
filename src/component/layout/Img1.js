import React, { Component } from 'react'
import { props } from 'prop-types'
import { Img2 } from './Img2'
export class Img1 extends Component {
    renderSquare(i){
       return <Img2 value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)} />
    }


    // constructor(props){
    //     super(props);
    //     this.state ={
    //         display:"no",
    //         nu:"o",
    //         value:"",
            
            
    //     }
    // }

    // onClick = (e) =>{
    //     this.setState({display: "yes"});
    //     this.state.nu==="o"? this.setState({value:"X", nu:"e"}) : this.setState({value: "Y" ,nu:"o"});
        
        

    // }
    render()
    {
        console.log(this.props.name1)
        
        return (
            <div className="Img1Style">
                {/* <button className ="board1  hrz1" onClick= {this.onClick} placeholder={this.state.value}></button>
                <button className ="board2 hrz1"  onClick= {this.onClick}>{this.state.value}</button>
                <button className ="board3 hrz1"  onClick= {this.onClick}>{this.state.value}</button>
                <button className ="board1 hrz2"  onClick= {this.onClick}>{this.state.value}</button>
                <button className ="board2 hrz2"  onClick= {this.onClick}>{this.state.value}</button>
                <button className ="board3 hrz2"  onClick= {this.onClick}>{this.state.value}</button>
                <button className ="board1 hrz3"  onClick= {this.onClick}>{this.state.value}</button>
                <button className ="board2 hrz3"  onClick= {this.onClick}>{this.state.value}</button>
                <button className ="board3 hrz3"  onClick= {this.onClick}>{this.state.value}</button>
                 */}
        
                {/* <hr className="HR1" size="5" color="#0f2862" borderRadius="10px"></hr>
                <hr className="HR2" size="5" color="#0f2862"></hr>
                <div className="VR1"></div>
                <div className="VR2"></div> */}
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}

                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}

                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}

                </div>
                 
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