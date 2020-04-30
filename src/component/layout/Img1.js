import React, { Component } from 'react'

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


    
