import React ,{ Component } from 'react';

import { BrowserRouter as Router, Route, Link} from
'react-router-dom';


import { Block1 } from './component/layout/Block1'


import { Decider } from './component/pages/Decider'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Img1 } from './component/layout/Img1';
import { Img2 } from './component/layout/Img2';
import { Between } from './component/layout/Between';
import props from 'prop-types';
import './App.css';

class App extends Component {
  state={
    player1 : "",
    player2 : ""

  }
  var 

  addPlayer1 = (player1) => {
    const p = player1
    this.state.player1 = p
    console.log(this.state.player1)
  }
  
  
  render(){
    
    return (
      <Router>
      <div className="App">
      <header className="App-header">
          Tictactoe
        </header>
        <Route exact path="/" render={props => (  
            <Block1 />
           )} />
        <Route exact path="/about" render={props => (
            <Img1 />
        )}  
        />
      </div>
      </Router>
    );
  }
}

export default App;
