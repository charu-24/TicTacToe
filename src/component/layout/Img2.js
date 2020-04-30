import React, { Component } from 'react'


export class Img2 extends Component {
    
    render()
    {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

