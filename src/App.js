import React ,{ Component } from 'react';
import { BrowserRouter as Router, Route} from
'react-router-dom';
import { Block1 } from './component/layout/Block1'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Game } from './component/layout/Game';
import './App.css';
import { props } from 'prop-types';

class App extends Component {
  state= {
    name:''
  }

  addNmae = (name1) => this.setState({name:name1})
        
  render(){
    console.log()
    
    return (
      <Router>
      <div className="App">
      <header className="App-header">
          Tictactoe
      </header>
      <Route exact path="/" render={props => 
        (  
          <Block1 
            addNmae={this.addNmae.bind(this)} 
            name1={this.state.name} 
          />
            
        )} 
      />
      <Route exact path="/about" render={props =>
        (
         <Game 
            name1={this.state.name}
         />
        )}
      />
      </div>
      </Router>
    );
  }
}

export default App;
