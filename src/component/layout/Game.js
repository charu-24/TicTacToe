import React, { Component } from 'react'
import { Img1 } from './Img1'
export class Game extends Component {
constructor(props){
    super(props);
    this.state = {
        xIsNext: true,
        stepNum: 0,
        history: [
            {squares: Array(9).fill(null)}
            
          ] 
        }
    
    }

    hanldeClick(i){
        const history= this.state.history.slice(0,this.state.stepNum+1)
        const current = history[history.length-1]
        const squares = current.squares.slice();
        const winner = getWinner(squares);
        if(winner || squares[i]){
            return;
        }
        
        squares[i]= this.state.xIsNext? 'X' : 'O'
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNum: history.length
        })
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNum];
        const winner = getWinner(current.squares);
        const moves =history.map((step, move)=>{
            const disc = move? "": "Start the game";
            return(
                <h1 key={move}>

                </h1>
            )
        })
        let status;
        if (winner){
            status = "winner is " + winner;

        }
        else{
            status="Next Player is" +(this.xIsNext? 'X':'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    < Img1 onClick={(i)=>this.hanldeClick(i)}
                    squares={current.squares} />

                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>{moves}</div>
                </div>
                
            </div>
        )
    }
}

function getWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a]  && squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a];
        }


    }

    return null;
}