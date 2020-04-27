import React ,{ Component } from 'react';

import { BrowserRouter as Router, Route, Link} from
'react-router-dom';


import { Block1 } from './component/layout/Block1'



import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Img1 } from './component/layout/Img1';
import { Game } from './component/layout/Game';
import { Between } from './component/layout/Between';
import props from 'prop-types';
import './App.css';

class App extends Component {
  state={
    name:""

  }
  var 

  addNmae = (name) =>
    {
        this.setState({name:name})
        
    }
  
  render(){
    
    return (
      <Router>
      <div className="App">
      <header className="App-header">
          Tictactoe
        </header>
        <Route exact path="/" render={props => (  
            <Block1 addNmae={this.addNmae.bind(this)} name1={this.state.name} />
            
           )} />
        <Route exact path="/about" component={Game} 
        />
      </div>
      </Router>
    );
  }
}

export default App;
