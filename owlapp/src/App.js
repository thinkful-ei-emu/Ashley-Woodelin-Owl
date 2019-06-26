import React, { Component } from 'react';
import './App.css';
import List from './list'


class App extends Component {

  static defaultProps = {
    store: {
      participants: [],
      chatEvents: [],
    }
  };

  render(){

    return (
      <main className="App">
        <header className="App-header">
          <h1>Participants:</h1>          
        </header>
        <div className="App-list">
          <List />
        
            

        </div>
        
       
      </main>
    );

  }


 
}

export default App;
