import React ,{ Component } from 'react';

import { BrowserRouter as Router, Route} from
'react-router-dom';

import Block1 from './component/layout/Block1'
import Block2 from './component/layout/Block2'
import Lets from './component/layout/Lets';
import Decider from './component/pages/Decider'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';

function App() {
  
  return (
    <Router>
    <div className="App">
    <header className="App-header">
        Tictactoe
      </header>
      <Route exact path="/" render={props => (
        <React.Fragment>
          
          <Block1 />
        <Block2 />
        <Lets />
        </React.Fragment>
      )} />
      <Route exact path="/about" component={Decider}  />
    </div>
    </Router>
  );
}

export default App;
