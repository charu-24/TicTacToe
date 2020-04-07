import React ,{ Component } from 'react';

import { BrowserRouter as Router, Route} from
'react-router-dom';

import Block1 from './component/layout/Block1'
import Block2 from './component/layout/Block2'
import Lets from './component/layout/Lets';
import Decider from './component/pages/Decider'
import Img1 from './component/layout/Img1';
import Img2 from './component/layout/Img2';
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
      <Route exact path="/about" component={Decider} render={props => (
        <React.Fragment>
          <Img1 />
          <Img2 />
        </React.Fragment>
      )} />
    </div>
    </Router>
  );
}

export default App;
